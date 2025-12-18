import { TContactSystem } from "./contactSystem"
import { TContactUse } from "./contactUse"
import { IPeriod } from "./period"

interface IContactPoint {
    system? : TContactSystem
    value? : string,
    use : TContactUse
    rank : number
    period : IPeriod
}

export type { IContactPoint }