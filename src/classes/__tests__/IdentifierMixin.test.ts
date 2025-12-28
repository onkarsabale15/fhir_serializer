import { describe, it, expect } from 'vitest';
import { IdentifierMixin } from '../mixins/IdentifierMixin';
import { Resource } from '../Resource';
import { EResourceType } from '../../types/primitives/allowedResourceTypes';

describe('IdentifierMixin', () => {
    describe('mixin application', () => {
        it('should add identifier property to base class', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            expect(resource.identifier).toBeUndefined();
        });

        it('should add addIdentifier method to base class', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            expect(typeof resource.addIdentifier).toBe('function');
        });
    });

    describe('addIdentifier', () => {
        it('should add an identifier', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            resource.addIdentifier({ 
                system: 'http://hospital.org', 
                value: 'MRN-123' 
            });

            expect(resource.identifier).toEqual([
                { system: 'http://hospital.org', value: 'MRN-123' }
            ]);
        });

        it('should add multiple identifiers', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            resource
                .addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' })
                .addIdentifier({ system: 'http://national.org', value: 'SSN-456' });

            expect(resource.identifier).toHaveLength(2);
            expect(resource.identifier).toEqual([
                { system: 'http://hospital.org', value: 'MRN-123' },
                { system: 'http://national.org', value: 'SSN-456' }
            ]);
        });

        it('should initialize identifier array on first add', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            expect(resource.identifier).toBeUndefined();

            resource.addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' });
            expect(Array.isArray(resource.identifier)).toBe(true);
        });

        it('should return this for method chaining', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            const result = resource.addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' });
            expect(result).toBe(resource);
        });

        it('should work with method chaining from base class', () => {
            class TestResource extends IdentifierMixin(Resource) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            resource
                .setId('patient-123')
                .addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' })
                .setLanguage('en-US');

            expect(resource.id).toBe('patient-123');
            expect(resource.identifier).toHaveLength(1);
            expect(resource.language).toBe('en-US');
        });
    });

    describe('multiple mixin composition', () => {
        it('should work with multiple mixins', () => {
            // Create a simple second mixin for testing
            function StatusMixin<T extends new (...args: any[]) => any>(Base: T) {
                return class extends Base {
                    status?: string;
                    setStatus(status: string) {
                        this.status = status;
                        return this;
                    }
                };
            }

            class TestResource extends StatusMixin(IdentifierMixin(Resource)) {
                constructor() {
                    super(EResourceType.PATIENT);
                }
            }

            const resource = new TestResource();
            resource
                .setId('patient-123')
                .addIdentifier({ system: 'http://hospital.org', value: 'MRN-123' })
                .setStatus('active');

            expect(resource.id).toBe('patient-123');
            expect(resource.identifier).toHaveLength(1);
            expect(resource.status).toBe('active');
        });
    });
});
