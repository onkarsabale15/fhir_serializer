import { describe, it, expect } from 'vitest';
import { CodeableConcept } from '../CodeableConcept';

describe('CodeableConcept', () => {
    describe('constructor', () => {
        it('should create an empty CodeableConcept', () => {
            const concept = new CodeableConcept();
            const json = concept.toJSON();
            expect(json.coding).toEqual([]);
        });
    });

    describe('addCoding', () => {
        it('should add a coding', () => {
            const concept = new CodeableConcept();
            concept.addCoding({ 
                system: 'http://loinc.org', 
                code: '85354-9',
                display: 'Blood pressure'
            });

            const json = concept.toJSON();
            expect(json.coding).toEqual([{
                system: 'http://loinc.org',
                code: '85354-9',
                display: 'Blood pressure'
            }]);
        });

        it('should add multiple codings', () => {
            const concept = new CodeableConcept();
            concept
                .addCoding({ system: 'http://loinc.org', code: '85354-9' })
                .addCoding({ system: 'http://snomed.info/sct', code: '75367002' });

            const json = concept.toJSON();
            expect(json.coding).toHaveLength(2);
        });

        it('should return this for method chaining', () => {
            const concept = new CodeableConcept();
            const result = concept.addCoding({ system: 'http://loinc.org', code: '85354-9' });
            expect(result).toBe(concept);
        });
    });

    describe('setText', () => {
        it('should set the text', () => {
            const concept = new CodeableConcept();
            concept.setText('Blood pressure');

            const json = concept.toJSON();
            expect(json.text).toBe('Blood pressure');
        });

        it('should return this for method chaining', () => {
            const concept = new CodeableConcept();
            const result = concept.setText('Blood pressure');
            expect(result).toBe(concept);
        });
    });

    describe('toJSON', () => {
        it('should convert to plain object', () => {
            const concept = new CodeableConcept();
            concept
                .addCoding({ system: 'http://loinc.org', code: '85354-9' })
                .setText('Blood pressure');

            const json = concept.toJSON();
            expect(json).toEqual({
                coding: [{ system: 'http://loinc.org', code: '85354-9' }],
                text: 'Blood pressure'
            });
        });
    });

    describe('serialize', () => {
        it('should return object with coding if present', () => {
            const concept = new CodeableConcept();
            concept.addCoding({ system: 'http://loinc.org', code: '85354-9' });

            const serialized = concept.serialize();
            expect(serialized).toEqual({
                coding: [{ system: 'http://loinc.org', code: '85354-9' }]
            });
        });

        it('should return object with text if present', () => {
            const concept = new CodeableConcept();
            concept.setText('Blood pressure');

            const serialized = concept.serialize();
            expect(serialized).toEqual({
                text: 'Blood pressure'
            });
        });

        it('should return object with both coding and text', () => {
            const concept = new CodeableConcept();
            concept
                .addCoding({ system: 'http://loinc.org', code: '85354-9' })
                .setText('Blood pressure');

            const serialized = concept.serialize();
            expect(serialized).toEqual({
                coding: [{ system: 'http://loinc.org', code: '85354-9' }],
                text: 'Blood pressure'
            });
        });

        it('should not include empty coding array', () => {
            const concept = new CodeableConcept();
            concept.setText('Blood pressure');

            const serialized = concept.serialize();
            expect(serialized).not.toHaveProperty('coding');
        });
    });

    describe('method chaining', () => {
        it('should support complete method chaining', () => {
            const concept = new CodeableConcept()
                .addCoding({ 
                    system: 'http://loinc.org', 
                    code: '85354-9',
                    display: 'Blood pressure panel'
                })
                .addCoding({ 
                    system: 'http://snomed.info/sct', 
                    code: '75367002',
                    display: 'Blood pressure'
                })
                .setText('Blood pressure');

            const json = concept.toJSON();
            expect(json.coding).toHaveLength(2);
            expect(json.text).toBe('Blood pressure');
        });
    });
});
