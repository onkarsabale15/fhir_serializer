import { EResourceType } from "./allowedResourceTypes";
import { ICodeableConcept } from "./codeableConceps";
import { TDietType } from "./dietType";
import { TDischargeDisposition } from "./disahargeDisposition";
import { IIdentifier } from "./identifier";
import { IReference } from "./reference";
import { TSpecialArrangement } from "./specialArangements";
import { TSpecialCourtesy } from "./specialCourtesy";

interface IHositalization{
    preAdmissionIdentifier?:IIdentifier
    origin?:IReference<EResourceType.LOCATION | EResourceType.ORGANIZATION>
    admitSource?: ICodeableConcept
    reAdmission? : ICodeableConcept<"R">
    dietPreference?:ICodeableConcept<TDietType>[]
    specialCourtesy?: ICodeableConcept<TSpecialCourtesy>[]
    specialArrangement?: ICodeableConcept<TSpecialArrangement>
    destination?: IReference<EResourceType.LOCATION | EResourceType.ORGANIZATION>
    dischargeDisposition?: ICodeableConcept<TDischargeDisposition>
}

export type { IHositalization }