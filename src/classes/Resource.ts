import { IResource } from "../types/primitives/resource";
import { EResourceType, TResourceType } from "../types/primitives/allowedResourceTypes";
import { IMeta } from "../types/primitives/meta";
import { TLanguage } from "../types/primitives/languageCodes";

/**
 * Base class for all FHIR R4 Resources
 * 
 * @class Resource
 * @template T - The resource type (e.g., EResourceType.PATIENT)
 * 
 * @example
 * ```javascript
 * const patient = new Resource(EResourceType.PATIENT);
 * patient.id = "patient-123";
 * patient.resourceType = EResourceType.PATIENT;
 * ```
 */
export class Resource<T extends TResourceType = TResourceType> implements IResource<T> {
    /**
     * The type of resource this is (e.g., "Patient", "Observation")
     * @type {T}
     * @required
     */
    resourceType: T;

    /**
     * The logical id of the resource, used to reference it from elsewhere
     * @type {string | undefined}
     */
    id?: string;

    /**
     * Metadata about the resource
     * @type {IMeta | undefined}
     */
    meta?: IMeta;

    /**
     * The base language in which the resource is written
     * @type {TLanguage | undefined}
     */
    language?: TLanguage;

    /**
     * Creates an instance of Resource
     * 
     * @param {T} resourceType - The type of resource (e.g., EResourceType.PATIENT)
     * @param {Partial<IResource<T>>} [data] - Optional initial data
     */
    constructor(resourceType: T, data?: Partial<IResource<T>>) {
        this.resourceType = resourceType;
        if (data) {
            if (data.id) this.id = data.id;
            if (data.meta) this.meta = data.meta;
            if (data.language) this.language = data.language;
        }
    }

    /**
     * Sets the resource ID
     * @param {string} id - The logical id of the resource
     * @returns {this} Returns this instance for method chaining
     */
    setId(id: string): this {
        this.id = id;
        return this;
    }

    /**
     * Sets the resource metadata
     * @param {IMeta} meta - The metadata object
     * @returns {this} Returns this instance for method chaining
     */
    setMeta(meta: IMeta): this {
        this.meta = meta;
        return this;
    }

    /**
     * Sets the resource language
     * @param {TLanguage} language - The language code
     * @returns {this} Returns this instance for method chaining
     */
    setLanguage(language: TLanguage): this {
        this.language = language;
        return this;
    }

    /**
     * Converts the resource to a plain object
     * @returns {IResource<T>} The resource as a plain object
     */
    toJSON(): IResource<T> {
        const result: IResource<T> = {
            resourceType: this.resourceType
        };
        if (this.id) result.id = this.id;
        if (this.meta) result.meta = this.meta;
        if (this.language) result.language = this.language;
        return result;
    }

    /**
     * Serializes the resource by cleaning undefined/null values and empty objects/arrays
     * @returns {IResource<T>} The cleaned resource as a plain object
     */
    serialize(): IResource<T> {
        return Resource.clean(this.toJSON()) as IResource<T>;
    }

    /**
     * Validates that the resource has required fields
     * @returns {boolean} True if valid, false otherwise
     */
    validate(): boolean {
        return !!this.resourceType;
    }

    /**
     * Static method to clean data by removing undefined, null, empty objects, and empty arrays
     * @param {any} data - The data to clean
     * @returns {any} The cleaned data
     */
    static clean(data: any): any {
        if (Array.isArray(data)) {
            return data
                .map(item => Resource.clean(item))
                .filter(item => Resource.isValidValue(item));
        } else if (typeof data === 'object' && data !== null) {
            const cleanedObj: any = {};
            for (const [key, value] of Object.entries(data)) {
                const cleanedValue = Resource.clean(value);
                if (Resource.isValidValue(cleanedValue) && !Resource.isEmpty(cleanedValue)) {
                    cleanedObj[key] = cleanedValue;
                }
            }
            return Object.keys(cleanedObj).length ? cleanedObj : null;
        }
        return data;
    }

    /**
     * Helper method to check if a value is valid (not undefined or null)
     * @param {any} value - The value to check
     * @returns {boolean} True if the value is valid
     */
    private static isValidValue(value: any): boolean {
        return value !== undefined && value !== null;
    }

    /**
     * Helper method to check if a value is empty (empty object or array)
     * @param {any} value - The value to check
     * @returns {boolean} True if the value is empty
     */
    private static isEmpty(value: any): boolean {
        if (typeof value !== 'object') {
            return false;
        }
        if (Array.isArray(value)) {
            return value.length === 0;
        }
        return Object.keys(value).length === 0;
    }
}

