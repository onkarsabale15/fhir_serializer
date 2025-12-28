import { describe, it, expect } from 'vitest';
import { Resource } from '../Resource';
import { EResourceType } from '../../types/primitives/allowedResourceTypes';

describe('Resource', () => {
    describe('constructor', () => {
        it('should create a resource with resourceType', () => {
            const resource = new Resource(EResourceType.PATIENT);
            expect(resource.resourceType).toBe(EResourceType.PATIENT);
        });

        it('should create a resource with initial data', () => {
            const resource = new Resource(EResourceType.PATIENT, {
                id: 'patient-123',
                language: 'en-US'
            });
            expect(resource.id).toBe('patient-123');
            expect(resource.language).toBe('en-US');
        });
    });

    describe('setId', () => {
        it('should set the resource id', () => {
            const resource = new Resource(EResourceType.PATIENT);
            resource.setId('patient-456');
            expect(resource.id).toBe('patient-456');
        });

        it('should return this for method chaining', () => {
            const resource = new Resource(EResourceType.PATIENT);
            const result = resource.setId('patient-789');
            expect(result).toBe(resource);
        });
    });

    describe('setMeta', () => {
        it('should set the resource meta', () => {
            const resource = new Resource(EResourceType.PATIENT);
            const meta = { versionId: '1' };
            resource.setMeta(meta);
            expect(resource.meta).toEqual(meta);
        });
    });

    describe('setLanguage', () => {
        it('should set the resource language', () => {
            const resource = new Resource(EResourceType.PATIENT);
            resource.setLanguage('en-US');
            expect(resource.language).toBe('en-US');
        });
    });

    describe('toJSON', () => {
        it('should convert resource to plain object with only resourceType', () => {
            const resource = new Resource(EResourceType.PATIENT);
            const json = resource.toJSON();
            expect(json).toEqual({
                resourceType: EResourceType.PATIENT
            });
        });

        it('should include id if set', () => {
            const resource = new Resource(EResourceType.PATIENT);
            resource.setId('patient-123');
            const json = resource.toJSON();
            expect(json).toEqual({
                resourceType: EResourceType.PATIENT,
                id: 'patient-123'
            });
        });

        it('should include meta if set', () => {
            const resource = new Resource(EResourceType.PATIENT);
            const meta = { versionId: '1' };
            resource.setMeta(meta);
            const json = resource.toJSON();
            expect(json.meta).toEqual(meta);
        });

        it('should include language if set', () => {
            const resource = new Resource(EResourceType.PATIENT);
            resource.setLanguage('en-US');
            const json = resource.toJSON();
            expect(json.language).toBe('en-US');
        });
    });

    describe('serialize', () => {
        it('should return cleaned JSON object', () => {
            const resource = new Resource(EResourceType.PATIENT);
            resource.setId('patient-123');
            const serialized = resource.serialize();
            expect(serialized).toEqual({
                resourceType: EResourceType.PATIENT,
                id: 'patient-123'
            });
        });
    });

    describe('validate', () => {
        it('should return true for valid resource with resourceType', () => {
            const resource = new Resource(EResourceType.PATIENT);
            expect(resource.validate()).toBe(true);
        });
    });

    describe('Resource.clean static method', () => {
        it('should remove undefined values from objects', () => {
            const data = {
                a: 'value',
                b: undefined,
                c: 'another'
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                a: 'value',
                c: 'another'
            });
        });

        it('should remove null values from objects', () => {
            const data = {
                a: 'value',
                b: null,
                c: 'another'
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                a: 'value',
                c: 'another'
            });
        });

        it('should remove empty objects', () => {
            const data = {
                a: 'value',
                b: {},
                c: 'another'
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                a: 'value',
                c: 'another'
            });
        });

        it('should remove empty arrays', () => {
            const data = {
                a: 'value',
                b: [],
                c: 'another'
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                a: 'value',
                c: 'another'
            });
        });

        it('should clean nested objects recursively', () => {
            const data = {
                a: 'value',
                nested: {
                    b: 'nested value',
                    c: undefined,
                    d: null
                }
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                a: 'value',
                nested: {
                    b: 'nested value'
                }
            });
        });

        it('should clean arrays recursively', () => {
            const data = {
                items: [
                    { a: 'value1', b: undefined },
                    { a: 'value2', c: null },
                    {}
                ]
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                items: [
                    { a: 'value1' },
                    { a: 'value2' }
                ]
            });
        });

        it('should preserve false and 0 values', () => {
            const data = {
                boolean: false,
                number: 0,
                string: ''
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                boolean: false,
                number: 0,
                string: ''
            });
        });

        it('should handle deeply nested structures', () => {
            const data = {
                level1: {
                    level2: {
                        level3: {
                            value: 'deep',
                            empty: undefined
                        },
                        nothing: null
                    }
                }
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toEqual({
                level1: {
                    level2: {
                        level3: {
                            value: 'deep'
                        }
                    }
                }
            });
        });

        it('should return null for empty object after cleaning', () => {
            const data = {
                a: undefined,
                b: null,
                c: {}
            };
            const cleaned = Resource.clean(data);
            expect(cleaned).toBeNull();
        });
    });
});
