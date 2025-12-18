import { IAttachment } from "./attachment";
import { ICoding } from "./coding";

interface IDocumentReferenceContent {
    attachment: IAttachment;
    format?: ICoding;
}

export type { IDocumentReferenceContent };

