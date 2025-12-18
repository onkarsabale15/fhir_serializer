import { ICoding } from "./coding";
import { IReference } from "./reference";
import { TDateTime } from "./dateTime";

interface ISignature {
    type: ICoding[];
    when: TDateTime;
    who: IReference;
    onBehalfOf?: IReference;
    targetFormat?: string;
    sigFormat?: string;
    data?: string;
}

export type { ISignature };

