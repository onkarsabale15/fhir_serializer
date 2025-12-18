import { IReference } from "./reference";
import { IPeriod } from "./period";

interface IGroupMember {
    entity: IReference;
    period?: IPeriod;
    inactive?: boolean;
}

export type { IGroupMember };


