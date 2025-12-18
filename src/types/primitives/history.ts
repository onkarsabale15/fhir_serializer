import { IPeriod } from "./period"

interface IHistory <C extends string = string>{
    status?: C | string,
    period?: IPeriod
}

export type { IHistory }