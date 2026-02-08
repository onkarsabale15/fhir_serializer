import { describe, it, expect } from 'vitest';
import { Bundle } from '../Bundle';
import { Patient } from '../Patient';
import { EResourceType } from '../../types/primitives/allowedResourceTypes';

describe('Bundle', () => {
    describe('constructor', () => {
        it('should create a bundle with BUNDLE resourceType', () => {
            const bundle = new Bundle('collection');
            expect(bundle.resourceType).toBe(EResourceType.BUNDLE);
        });

        it('should set the bundle type', () => {
            const bundle = new Bundle('collection');
            expect(bundle.type).toBe('collection');
        });

        it('should create a bundle with initial data', () => {
            const bundle = new Bundle('searchset', {
                id: 'bundle-123',
                total: 5
            });
            expect(bundle.id).toBe('bundle-123');
            expect(bundle.total).toBe(5);
        });

        it('should accept different bundle types', () => {
            const collectionBundle = new Bundle('collection');
            expect(collectionBundle.type).toBe('collection');

            const searchsetBundle = new Bundle('searchset');
            expect(searchsetBundle.type).toBe('searchset');

            const transactionBundle = new Bundle('transaction');
            expect(transactionBundle.type).toBe('transaction');
        });
    });

    describe('addEntry', () => {
        it('should add an entry to the bundle', () => {
            const bundle = new Bundle('collection');
            const patient = new Patient()
                .addName({ given: ['John'], family: 'Doe' });

            bundle.addEntry({ resource: patient.toJSON() });

            expect(bundle.entry).toHaveLength(1);
            expect(bundle.entry?.[0]?.resource).toBeDefined();
        });

        it('should increment total count when adding entry', () => {
            const bundle = new Bundle('collection');
            const patient = new Patient()
                .addName({ given: ['John'], family: 'Doe' });

            bundle.addEntry({ resource: patient.toJSON() });

            expect(bundle.total).toBe(1);
        });

        it('should add multiple entries', () => {
            const bundle = new Bundle('collection');
            const patient1 = new Patient().addName({ given: ['John'], family: 'Doe' });
            const patient2 = new Patient().addName({ given: ['Jane'], family: 'Smith' });

            bundle
                .addEntry({ resource: patient1.toJSON() })
                .addEntry({ resource: patient2.toJSON() });

            expect(bundle.entry).toHaveLength(2);
            expect(bundle.total).toBe(2);
        });

        it('should return this for method chaining', () => {
            const bundle = new Bundle('collection');
            const patient = new Patient().addName({ given: ['John'], family: 'Doe' });
            
            const result = bundle.addEntry({ resource: patient.toJSON() });
            expect(result).toBe(bundle);
        });
    });

    describe('addLink', () => {
        it('should add a link to the bundle', () => {
            const bundle = new Bundle('searchset');
            bundle.addLink({ relation: 'next', url: 'http://example.org/fhir?page=2' });

            expect(bundle.link).toHaveLength(1);
            expect(bundle.link?.[0]).toEqual({
                relation: 'next',
                url: 'http://example.org/fhir?page=2'
            });
        });

        it('should add multiple links', () => {
            const bundle = new Bundle('searchset');
            bundle
                .addLink({ relation: 'self', url: 'http://example.org/fhir' })
                .addLink({ relation: 'next', url: 'http://example.org/fhir?page=2' });

            expect(bundle.link).toHaveLength(2);
        });

        it('should return this for method chaining', () => {
            const bundle = new Bundle('searchset');
            const result = bundle.addLink({ relation: 'self', url: 'http://example.org/fhir' });
            expect(result).toBe(bundle);
        });
    });

    describe('setTimestamp', () => {
        it('should set the timestamp', () => {
            const bundle = new Bundle('collection');
            bundle.setTimestamp('2024-01-01T12:00:00Z');

            expect(bundle.timestamp).toBe('2024-01-01T12:00:00Z');
        });

        it('should return this for method chaining', () => {
            const bundle = new Bundle('collection');
            const result = bundle.setTimestamp('2024-01-01T12:00:00Z');
            expect(result).toBe(bundle);
        });
    });

    describe('validate', () => {
        it('should return true for valid bundle with type', () => {
            const bundle = new Bundle('collection');
            expect(bundle.validate()).toBe(true);
        });

        it('should validate bundle with different types', () => {
            const collectionBundle = new Bundle('collection');
            expect(collectionBundle.validate()).toBe(true);

            const searchsetBundle = new Bundle('searchset');
            expect(searchsetBundle.validate()).toBe(true);
        });
    });

    describe('toJSON', () => {
        it('should convert bundle to plain object', () => {
            const bundle = new Bundle('collection');
            bundle.setId('bundle-123');

            const json = bundle.toJSON();
            expect(json).toEqual({
                resourceType: EResourceType.BUNDLE,
                id: 'bundle-123',
                type: 'collection'
            });
        });

        it('should include entries if present', () => {
            const bundle = new Bundle('collection');
            const patient = new Patient().addName({ given: ['John'], family: 'Doe' });
            bundle.addEntry({ resource: patient.toJSON() });

            const json = bundle.toJSON();
            expect(json.entry).toHaveLength(1);
            expect(json.total).toBe(1);
        });

        it('should include timestamp if set', () => {
            const bundle = new Bundle('collection');
            bundle.setTimestamp('2024-01-01T12:00:00Z');

            const json = bundle.toJSON();
            expect(json.timestamp).toBe('2024-01-01T12:00:00Z');
        });
    });

    describe('serialize', () => {
        it('should return cleaned JSON object', () => {
            const bundle = new Bundle('collection');
            bundle.setId('bundle-123');

            const serialized = bundle.serialize();
            expect(serialized).toEqual({
                resourceType: EResourceType.BUNDLE,
                id: 'bundle-123',
                type: 'collection'
            });
        });

        it('should remove undefined fields', () => {
            const bundle = new Bundle('collection');
            
            const serialized = bundle.serialize();
            expect(serialized).not.toHaveProperty('timestamp');
            expect(serialized).not.toHaveProperty('identifier');
        });
    });

    describe('method chaining', () => {
        it('should support complete method chaining', () => {
            const patient1 = new Patient().addName({ given: ['John'], family: 'Doe' });
            const patient2 = new Patient().addName({ given: ['Jane'], family: 'Smith' });

            const bundle = new Bundle('collection')
                .setId('bundle-123')
                .setTimestamp('2024-01-01T12:00:00Z')
                .addEntry({ resource: patient1.toJSON() })
                .addEntry({ resource: patient2.toJSON() })
                .addLink({ relation: 'self', url: 'http://example.org/fhir' });

            expect(bundle.id).toBe('bundle-123');
            expect(bundle.timestamp).toBe('2024-01-01T12:00:00Z');
            expect(bundle.entry).toHaveLength(2);
            expect(bundle.total).toBe(2);
            expect(bundle.link).toHaveLength(1);
        });
    });
});
