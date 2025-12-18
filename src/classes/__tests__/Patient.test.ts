import { describe, it, expect } from 'vitest';
import { Patient } from '../Patient';
import { EResourceType } from '../../types/primitives/allowedResourceTypes';

describe('Patient', () => {
    describe('constructor', () => {
        it('should create a patient with PATIENT resourceType', () => {
            const patient = new Patient();
            expect(patient.resourceType).toBe(EResourceType.PATIENT);
        });

        it('should initialize name as empty array', () => {
            const patient = new Patient();
            expect(patient.name).toEqual([]);
        });

        it('should create a patient with initial data', () => {
            const patient = new Patient({
                id: 'patient-123',
                name: [{ given: ['John'], family: 'Doe' }],
                gender: 'male'
            });
            expect(patient.id).toBe('patient-123');
            expect(patient.name).toEqual([{ given: ['John'], family: 'Doe' }]);
            expect(patient.gender).toBe('male');
        });
    });

    describe('addIdentifier', () => {
        it('should add an identifier', () => {
            const patient = new Patient();
            patient.addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' });
            expect(patient.identifier).toEqual([
                { system: 'http://hospital.org', value: 'MRN-123' }
            ]);
        });

        it('should add multiple identifiers', () => {
            const patient = new Patient();
            patient
                .addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' })
                .addIdentifier({ system: 'http://national.org', value: 'SSN-456' });
            expect(patient.identifier).toHaveLength(2);
        });

        it('should return this for method chaining', () => {
            const patient = new Patient();
            const result = patient.addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' });
            expect(result).toBe(patient);
        });
    });

    describe('addName', () => {
        it('should add a name', () => {
            const patient = new Patient();
            patient.addName({ given: ['John'], family: 'Doe' });
            expect(patient.name).toEqual([{ given: ['John'], family: 'Doe' }]);
        });

        it('should add multiple names', () => {
            const patient = new Patient();
            patient
                .addName({ given: ['John'], family: 'Doe' })
                .addName({ given: ['Johnny'], family: 'Doe', use: 'nickname' });
            expect(patient.name).toHaveLength(2);
        });

        it('should return this for method chaining', () => {
            const patient = new Patient();
            const result = patient.addName({ given: ['John'], family: 'Doe' });
            expect(result).toBe(patient);
        });
    });

    describe('setGender', () => {
        it('should set the gender', () => {
            const patient = new Patient();
            patient.setGender('male');
            expect(patient.gender).toBe('male');
        });

        it('should return this for method chaining', () => {
            const patient = new Patient();
            const result = patient.setGender('female');
            expect(result).toBe(patient);
        });
    });

    describe('setBirthDate', () => {
        it('should set the birth date', () => {
            const patient = new Patient();
            patient.setBirthDate('1990-01-01');
            expect(patient.birthDate).toBe('1990-01-01');
        });

        it('should return this for method chaining', () => {
            const patient = new Patient();
            const result = patient.setBirthDate('1990-01-01');
            expect(result).toBe(patient);
        });
    });

    describe('validate', () => {
        it('should return false for patient without name', () => {
            const patient = new Patient();
            expect(patient.validate()).toBe(false);
        });

        it('should return true for patient with name', () => {
            const patient = new Patient();
            patient.addName({ given: ['John'], family: 'Doe' });
            expect(patient.validate()).toBe(true);
        });
    });

    describe('toJSON', () => {
        it('should convert patient to plain object', () => {
            const patient = new Patient();
            patient
                .setId('patient-123')
                .addName({ given: ['John'], family: 'Doe' })
                .setGender('male')
                .setBirthDate('1990-01-01');

            const json = patient.toJSON();
            expect(json).toEqual({
                resourceType: EResourceType.PATIENT,
                id: 'patient-123',
                name: [{ given: ['John'], family: 'Doe' }],
                gender: 'male',
                birthDate: '1990-01-01'
            });
        });

        it('should include identifiers if present', () => {
            const patient = new Patient();
            patient
                .addName({ given: ['John'], family: 'Doe' })
                .addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' });

            const json = patient.toJSON();
            expect(json.identifier).toEqual([
                { system: 'http://hospital.org', value: 'MRN-123' }
            ]);
        });
    });

    describe('serialize', () => {
        it('should return cleaned JSON object', () => {
            const patient = new Patient();
            patient
                .setId('patient-123')
                .addName({ given: ['John'], family: 'Doe' })
                .setGender('male');

            const serialized = patient.serialize();
            expect(serialized).toEqual({
                resourceType: EResourceType.PATIENT,
                id: 'patient-123',
                name: [{ given: ['John'], family: 'Doe' }],
                gender: 'male'
            });
        });

        it('should remove undefined fields', () => {
            const patient = new Patient();
            patient.addName({ given: ['John'], family: 'Doe' });
            
            const serialized = patient.serialize();
            expect(serialized).not.toHaveProperty('telecom');
            expect(serialized).not.toHaveProperty('address');
        });
    });

    describe('method chaining', () => {
        it('should support complete method chaining', () => {
            const patient = new Patient()
                .setId('patient-123')
                .addName({ given: ['John'], family: 'Doe' })
                .setGender('male')
                .setBirthDate('1990-01-01')
                .addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' });

            expect(patient.id).toBe('patient-123');
            expect(patient.name).toHaveLength(1);
            expect(patient.gender).toBe('male');
            expect(patient.birthDate).toBe('1990-01-01');
            expect(patient.identifier).toHaveLength(1);
        });
    });
});
