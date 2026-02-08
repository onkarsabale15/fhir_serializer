import { IIdentifier } from "../../types/primitives/identifier";

/**
 * Type for constructor
 */
type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Interface for classes that have identifiers
 */
export interface IHasIdentifiers {
    identifier?: IIdentifier[];
    addIdentifier(identifier: IIdentifier): this;
}

/**
 * Mixin to add identifier functionality to a class
 * 
 * @template T - The base class type
 * @param {Constructor<T>} Base - The base class to extend
 * @returns {Constructor<T & IHasIdentifiers>} The extended class with identifier functionality
 * 
 * @example
 * ```typescript
 * class MyResource extends IdentifierMixin(Resource) {
 *   // This class now has addIdentifier() method
 * }
 * 
 * const resource = new MyResource()
 *   .addIdentifier({ system: 'http://example.org', value: '123' });
 * ```
 */
export function IdentifierMixin<T extends Constructor>(Base: T): Constructor<IHasIdentifiers> & T {
    return class extends Base implements IHasIdentifiers {
        identifier?: IIdentifier[];

        /**
         * Adds an identifier to the resource
         * @param {IIdentifier} identifier - The identifier to add
         * @returns {this} Returns this instance for method chaining
         */
        addIdentifier(identifier: IIdentifier): this {
            if (!this.identifier) {
                this.identifier = [];
            }
            this.identifier.push(identifier);
            return this;
        }
    };
}
