import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { TDateTime } from "./dateTime";

interface IListEntry {
    flag?: ICodeableConcept;
    deleted?: boolean;
    date?: TDateTime;
    item: IReference;
}

export type { IListEntry };


