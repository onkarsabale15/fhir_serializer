import { Resource } from "./Resource";
import { IBundle } from "../types/resources/bundle";
import { EResourceType } from "../types/primitives/allowedResourceTypes";
import { TBundleType } from "../types/primitives/bundleType";
import { IIdentifier } from "../types/primitives/identifier";
import { IBundleLink } from "../types/primitives/bundleLink";
import { IBundleEntry } from "../types/primitives/bundleEntry";
import { TInstant } from "../types/primitives/instant";
import { ISignature } from "../types/primitives/signature";

/**
 * A container for a collection of resources.
 * 
 * @class Bundle
 * @extends {Resource<EResourceType.BUNDLE>}
 * 
 * @example
 * ```javascript
 * const bundle = new Bundle("collection");
 * bundle.addEntry({ resource: patientResource });
 * ```
 * 
 * @see {@link https://hl7.org/fhir/R4/bundle.html|FHIR R4 Bundle}
 */
export class Bundle extends Resource<EResourceType.BUNDLE> implements IBundle {
    /**
     * Persistent identifier for the bundle
     * @type {IIdentifier | undefined}
     */
    identifier?: IIdentifier;

    /**
     * Indicates the purpose of this bundle - how it was intended to be used
     * @type {TBundleType}
     * @required
     */
    type: TBundleType;

    /**
     * When the bundle was assembled
     * @type {TInstant | undefined}
     */
    timestamp?: TInstant;

    /**
     * If a set of search results, this is the total number of matching results
     * @type {number | undefined}
     */
    total?: number;

    /**
     * A series of links that provide context to this bundle
     * @type {IBundleLink[] | undefined}
     */
    link?: IBundleLink[];

    /**
     * An entry in the bundle - will have a resource or information
     * @type {IBundleEntry[] | undefined}
     */
    entry?: IBundleEntry[];

    /**
     * Digital Signature - base64 encoded signature XML
     * @type {ISignature | undefined}
     */
    signature?: ISignature;

    /**
     * Creates an instance of Bundle
     * 
     * @param {TBundleType} type - The bundle type (e.g., "collection", "searchset")
     * @param {Partial<IBundle>} [data] - Optional initial bundle data
     */
    constructor(type: TBundleType, data?: Partial<IBundle>) {
        super(EResourceType.BUNDLE, data);
        this.type = type;
        if (data?.entry) {
            this.entry = data.entry;
        }
    }

    /**
     * Adds an entry to the bundle
     * @param {IBundleEntry} entry - The bundle entry to add
     * @returns {this} Returns this instance for method chaining
     */
    addEntry(entry: IBundleEntry): this {
        if (!this.entry) {
            this.entry = [];
        }
        this.entry.push(entry);
        if (this.total === undefined) {
            this.total = 0;
        }
        this.total++;
        return this;
    }

    /**
     * Adds a link to the bundle
     * @param {IBundleLink} link - The link to add
     * @returns {this} Returns this instance for method chaining
     */
    addLink(link: IBundleLink): this {
        if (!this.link) {
            this.link = [];
        }
        this.link.push(link);
        return this;
    }

    /**
     * Sets the bundle timestamp
     * @param {TInstant} timestamp - The timestamp
     * @returns {this} Returns this instance for method chaining
     */
    setTimestamp(timestamp: TInstant): this {
        this.timestamp = timestamp;
        return this;
    }

    /**
     * Validates that the bundle has required fields
     * @returns {boolean} True if valid, false otherwise
     */
    validate(): boolean {
        return super.validate() && !!this.type;
    }

    /**
     * Converts the bundle to a plain object
     * @returns {IBundle} The bundle as a plain object
     */
    toJSON(): IBundle {
        return {
            ...super.toJSON(),
            type: this.type,
            ...(this.identifier && { identifier: this.identifier }),
            ...(this.timestamp && { timestamp: this.timestamp }),
            ...(this.total !== undefined && { total: this.total }),
            ...(this.link && { link: this.link }),
            ...(this.entry && { entry: this.entry }),
            ...(this.signature && { signature: this.signature })
        };
    }

    /**
     * Serializes the bundle by cleaning undefined/null values and empty objects/arrays
     * @returns {IBundle} The cleaned bundle as a plain object
     */
    serialize(): IBundle {
        return Resource.clean(this.toJSON()) as IBundle;
    }
}


