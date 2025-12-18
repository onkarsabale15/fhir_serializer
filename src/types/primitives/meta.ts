import { ICoding } from "./coding"
interface IMeta {
    versionId : string,
    lastUpdated : string,
    source : string,
    security : ICoding[],
    tag : ICoding[]
}

export type { IMeta }