import { describe, it, expect } from 'vitest';
import { Observation } from '../Observation';
import { EResourceType } from '../../types/primitives/allowedResourceTypes';

describe('Observation', () => {
    describe('constructor', () => {
        it('should create an observation with OBSERVATION resourceType', () => {
            const obs = new Observation();
            expect(obs.resourceType).toBe(EResourceType.OBSERVATION);
        });

        it('should create an observation with initial data', () => {
            const obs = new Observation({
                id: 'obs-123',
                status: 'final',
                code: { coding: [{ code: '85354-9', system: 'http://loinc.org' }] }
            });
            expect(obs.id).toBe('obs-123');
            expect(obs.status).toBe('final');
            expect(obs.code).toEqual({ coding: [{ code: '85354-9', system: 'http://loinc.org' }] });
        });
    });

    describe('setStatus', () => {
        it('should set the status', () => {
            const obs = new Observation();
            obs.setStatus('final');
            expect(obs.status).toBe('final');
        });

        it('should return this for method chaining', () => {
            const obs = new Observation();
            const result = obs.setStatus('final');
            expect(result).toBe(obs);
        });
    });

    describe('setCode', () => {
        it('should set the code', () => {
            const obs = new Observation();
            const code = { coding: [{ code: '85354-9', system: 'http://loinc.org' }] };
            obs.setCode(code);
            expect(obs.code).toEqual(code);
        });

        it('should return this for method chaining', () => {
            const obs = new Observation();
            const result = obs.setCode({ coding: [{ code: '85354-9' }] });
            expect(result).toBe(obs);
        });
    });

    describe('setSubject', () => {
        it('should set the subject reference', () => {
            const obs = new Observation();
            obs.setSubject({ reference: 'Patient/patient-123' });
            expect(obs.subject).toEqual({ reference: 'Patient/patient-123' });
        });

        it('should return this for method chaining', () => {
            const obs = new Observation();
            const result = obs.setSubject({ reference: 'Patient/patient-123' });
            expect(result).toBe(obs);
        });
    });

    describe('setValueQuantity', () => {
        it('should set the value quantity', () => {
            const obs = new Observation();
            const quantity = { value: 120, unit: 'mmHg', system: 'http://unitsofmeasure.org' };
            obs.setValueQuantity(quantity);
            expect(obs.valueQuantity).toEqual(quantity);
        });

        it('should return this for method chaining', () => {
            const obs = new Observation();
            const result = obs.setValueQuantity({ value: 120, unit: 'mmHg' });
            expect(result).toBe(obs);
        });
    });

    describe('setEffectiveDateTime', () => {
        it('should set the effective date time', () => {
            const obs = new Observation();
            obs.setEffectiveDateTime('2024-01-01T10:00:00Z');
            expect(obs.effectiveDateTime).toBe('2024-01-01T10:00:00Z');
        });

        it('should return this for method chaining', () => {
            const obs = new Observation();
            const result = obs.setEffectiveDateTime('2024-01-01T10:00:00Z');
            expect(result).toBe(obs);
        });
    });

    describe('validate', () => {
        it('should return false for observation without status', () => {
            const obs = new Observation();
            obs.setCode({ coding: [{ code: '85354-9' }] });
            expect(obs.validate()).toBe(false);
        });

        it('should return false for observation without code', () => {
            const obs = new Observation();
            obs.setStatus('final');
            expect(obs.validate()).toBe(false);
        });

        it('should return true for observation with status and code', () => {
            const obs = new Observation();
            obs
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9' }] });
            expect(obs.validate()).toBe(true);
        });
    });

    describe('toJSON', () => {
        it('should convert observation to plain object', () => {
            const obs = new Observation();
            obs
                .setId('obs-123')
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9', system: 'http://loinc.org' }] })
                .setSubject({ reference: 'Patient/patient-123' })
                .setValueQuantity({ value: 120, unit: 'mmHg' });

            const json = obs.toJSON();
            expect(json).toEqual({
                resourceType: EResourceType.OBSERVATION,
                id: 'obs-123',
                status: 'final',
                code: { coding: [{ code: '85354-9', system: 'http://loinc.org' }] },
                subject: { reference: 'Patient/patient-123' },
                valueQuantity: { value: 120, unit: 'mmHg' }
            });
        });

        it('should include effective date time if set', () => {
            const obs = new Observation();
            obs
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9' }] })
                .setEffectiveDateTime('2024-01-01T10:00:00Z');

            const json = obs.toJSON();
            expect(json.effectiveDateTime).toBe('2024-01-01T10:00:00Z');
        });

        it('should include boolean values even if false', () => {
            const obs = new Observation();
            obs
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9' }] });
            obs.valueBoolean = false;

            const json = obs.toJSON();
            expect(json.valueBoolean).toBe(false);
        });

        it('should include integer values even if 0', () => {
            const obs = new Observation();
            obs
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9' }] });
            obs.valueInteger = 0;

            const json = obs.toJSON();
            expect(json.valueInteger).toBe(0);
        });
    });

    describe('serialize', () => {
        it('should return cleaned JSON object', () => {
            const obs = new Observation();
            obs
                .setId('obs-123')
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9' }] })
                .setSubject({ reference: 'Patient/patient-123' });

            const serialized = obs.serialize();
            expect(serialized).toEqual({
                resourceType: EResourceType.OBSERVATION,
                id: 'obs-123',
                status: 'final',
                code: { coding: [{ code: '85354-9' }] },
                subject: { reference: 'Patient/patient-123' }
            });
        });

        it('should remove undefined fields', () => {
            const obs = new Observation();
            obs
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9' }] });
            
            const serialized = obs.serialize();
            expect(serialized).not.toHaveProperty('valueQuantity');
            expect(serialized).not.toHaveProperty('subject');
        });
    });

    describe('method chaining', () => {
        it('should support complete method chaining', () => {
            const obs = new Observation()
                .setId('obs-123')
                .setStatus('final')
                .setCode({ coding: [{ code: '85354-9', system: 'http://loinc.org' }] })
                .setSubject({ reference: 'Patient/patient-123' })
                .setValueQuantity({ value: 120, unit: 'mmHg' })
                .setEffectiveDateTime('2024-01-01T10:00:00Z');

            expect(obs.id).toBe('obs-123');
            expect(obs.status).toBe('final');
            expect(obs.code).toBeDefined();
            expect(obs.subject).toBeDefined();
            expect(obs.valueQuantity).toBeDefined();
            expect(obs.effectiveDateTime).toBe('2024-01-01T10:00:00Z');
        });
    });
});
