import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TSpecimenStatus } from "../primitives/specimenStatus";
import { IPeriod } from "../primitives/period";
import { IAnnotation } from "../primitives/annotation";
import { ISpecimenCollection } from "../primitives/specimenCollection";
import { ISpecimenProcessing } from "../primitives/specimenProcessing";
import { ISpecimenContainer } from "../primitives/specimenContainer";

interface ISpecimen extends IResource<EResourceType.SPECIMEN> {
    identifier?: IIdentifier[];
    accessionIdentifier?: IIdentifier;
    status?: TSpecimenStatus;
    type?: ICodeableConcept;
    subject?: IReference;
    receivedTime?: string;
    parent?: IReference<EResourceType.SPECIMEN>[];
    request?: IReference[];
    collection?: ISpecimenCollection;
    processing?: ISpecimenProcessing[];
    container?: ISpecimenContainer[];
    condition?: ICodeableConcept[];
    note?: IAnnotation[];
}

export type { ISpecimen };

