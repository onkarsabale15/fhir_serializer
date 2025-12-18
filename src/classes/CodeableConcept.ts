import { ICodeableConcept } from "../types/primitives/codeableConceps";
import { ICoding } from "../types/primitives/coding";

/**
 * Helper class to build CodeableConcept objects
 * 
 * @class CodeableConcept
 * 
 * @example
 * ```javascript
 * const concept = new CodeableConcept()
 *   .addCoding({ system: 'http://loinc.org', code: '85354-9' })
 *   .setText('Blood pressure');
 * ```
 */
export class CodeableConcept {
    private data: ICodeableConcept;

    constructor() {
        this.data = {
            coding: []
        };
    }

    /**
     * Adds a coding to the codeable concept
     * @param {ICoding} coding - The coding to add
     * @returns {this} Returns this instance for method chaining
     */
    addCoding(coding: ICoding): this {
        if (!this.data.coding) {
            this.data.coding = [];
        }
        this.data.coding.push(coding);
        return this;
    }

    /**
     * Sets the text representation
     * @param {string} text - The text to set
     * @returns {this} Returns this instance for method chaining
     */
    setText(text: string): this {
        this.data.text = text;
        return this;
    }

    /**
     * Converts to a plain object
     * @returns {ICodeableConcept} The codeable concept as a plain object
     */
    toJSON(): ICodeableConcept {
        return { ...this.data };
    }

    /**
     * Serializes by cleaning undefined/null values
     * @returns {ICodeableConcept} The cleaned codeable concept
     */
    serialize(): ICodeableConcept {
        const result: ICodeableConcept = {};
        if (this.data.coding && this.data.coding.length > 0) {
            result.coding = this.data.coding;
        }
        if (this.data.text) {
            result.text = this.data.text;
        }
        return result;
    }
}
