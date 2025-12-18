import { describe, it, expect } from 'vitest';
import { Patient } from '../Patient';
import { Observation } from '../Observation';
import { Bundle } from '../Bundle';
import { CodeableConcept } from '../CodeableConcept';
import { EResourceType } from '../../types/primitives/allowedResourceTypes';

describe('Integration Tests - Complete Workflow', () => {
    it('should create a complete FHIR bundle with patient and observation', () => {
        // Create a patient
        const patient = new Patient()
            .setId('patient-123')
            .addName({ given: ['John'], family: 'Doe' })
            .setGender('male')
            .setBirthDate('1990-01-01')
            .addIdentifier({
                system: 'http://hospital.example.org',
                value: 'MRN-12345'
            });

        expect(patient.validate()).toBe(true);

        // Create an observation using CodeableConcept
        const bloodPressureCode = new CodeableConcept()
            .addCoding({
                system: 'http://loinc.org',
                code: '85354-9',
                display: 'Blood pressure panel'
            })
            .setText('Blood pressure');

        const observation = new Observation()
            .setStatus('final')
            .setCode(bloodPressureCode.serialize())
            .setSubject({ reference: 'Patient/patient-123' })
            .setValueQuantity({
                value: 120,
                unit: 'mmHg',
                system: 'http://unitsofmeasure.org',
                code: 'mm[Hg]'
            })
            .setEffectiveDateTime('2024-01-01T10:00:00Z');

        expect(observation.validate()).toBe(true);

        // Create a bundle
        const bundle = new Bundle('collection')
            .setTimestamp('2024-01-01T12:00:00Z')
            .addEntry({ resource: patient.serialize() })
            .addEntry({ resource: observation.serialize() });

        expect(bundle.validate()).toBe(true);

        // Verify the bundle structure
        const serializedBundle = bundle.serialize();
        expect(serializedBundle.resourceType).toBe(EResourceType.BUNDLE);
        expect(serializedBundle.type).toBe('collection');
        expect(serializedBundle.entry).toHaveLength(2);
        expect(serializedBundle.total).toBe(2);
        expect(serializedBundle.timestamp).toBe('2024-01-01T12:00:00Z');

        // Verify patient resource in bundle
        const patientResource = serializedBundle.entry?.[0]?.resource;
        expect(patientResource).toBeDefined();
        expect(patientResource?.resourceType).toBe(EResourceType.PATIENT);
        expect(patientResource?.id).toBe('patient-123');

        // Verify observation resource in bundle
        const observationResource = serializedBundle.entry?.[1]?.resource;
        expect(observationResource).toBeDefined();
        expect(observationResource?.resourceType).toBe(EResourceType.OBSERVATION);
    });

    it('should demonstrate data cleaning with serialize()', () => {
        const patient = new Patient()
            .setId('patient-456')
            .addName({ given: ['Jane'], family: 'Smith' });
        // Note: many optional fields are not set

        const serialized = patient.serialize();

        // Should only have resourceType, id, and name
        expect(serialized.resourceType).toBe(EResourceType.PATIENT);
        expect(serialized.id).toBe('patient-456');
        expect(serialized.name).toBeDefined();

        // Should not have undefined fields
        expect(serialized).not.toHaveProperty('telecom');
        expect(serialized).not.toHaveProperty('address');
        expect(serialized).not.toHaveProperty('photo');
        expect(serialized).not.toHaveProperty('contact');
    });

    it('should work with mixin pattern for identifiers', () => {
        const patient = new Patient()
            .addName({ given: ['Test'], family: 'User' })
            .addIdentifier({ system: 'http://hospital.org', value: 'ID-1' })
            .addIdentifier({ system: 'http://national.org', value: 'ID-2' });

        const serialized = patient.serialize();
        expect(serialized.identifier).toHaveLength(2);
        expect(serialized.identifier?.[0]?.system).toBe('http://hospital.org');
        expect(serialized.identifier?.[1]?.value).toBe('ID-2');
    });

    it('should preserve false and 0 values in serialization', () => {
        const observation = new Observation()
            .setStatus('final')
            .setCode({ coding: [{ code: 'test' }] });
        
        observation.valueBoolean = false;
        observation.valueInteger = 0;

        const serialized = observation.serialize();
        expect(serialized.valueBoolean).toBe(false);
        expect(serialized.valueInteger).toBe(0);
    });
});
