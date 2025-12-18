import { TResourceType } from "./allowedResourceTypes";
import { TLanguage } from "./languageCodes";
import { IMeta } from "./meta";

interface IResource <T extends TResourceType = TResourceType> {
    resourceType: T;
    id?: string;
    meta?: IMeta;
    language?: TLanguage;
}

export type { IResource };