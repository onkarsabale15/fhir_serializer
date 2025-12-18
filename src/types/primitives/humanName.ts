import { TNameUse } from "./nameUse"
import { IPeriod } from "./period"
interface IHumanName {
  use?: TNameUse
  text?: string
  family?: string
  given?: string[]
  prefix?: string[]
  suffix?: string[]
  period?: IPeriod
}

export type { IHumanName };