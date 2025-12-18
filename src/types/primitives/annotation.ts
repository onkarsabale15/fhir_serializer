import { IReference } from "./reference";
import { TDateTime } from "./dateTime";

interface IAnnotation {
    authorReference?: IReference;
    authorString?: string;
    time?: TDateTime;
    text: string;
}

export type { IAnnotation };

