import { IIdentifier } from "./identifier";

interface IReference<T extends string = string> {
    reference?: `${T | string}/${string}` | string;
    type?: T;
    identifier?: IIdentifier;
    display?: string;
}

export type { IReference };