import { IReference } from "./reference";
import { IPeriod } from "./period";

interface IAccountCoverage {
    coverage: IReference;
    priority?: number;
}

export type { IAccountCoverage };


