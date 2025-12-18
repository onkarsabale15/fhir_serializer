import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IRatio } from "./ratio";
import { ISampledData } from "./sampledData";
import { IAttachment } from "./attachment";
import { TDateTime } from "./dateTime";
import { IPeriod } from "./period";
import { IReference } from "./reference";
import { IAddress } from "./address";
import { IContactPoint } from "./contactPoint";

interface ITaskOutput {
    type: ICodeableConcept;
    valueBase64Binary?: string;
    valueBoolean?: boolean;
    valueCanonical?: string;
    valueCode?: string;
    valueDate?: string;
    valueDateTime?: TDateTime;
    valueDecimal?: number;
    valueId?: string;
    valueInstant?: string;
    valueInteger?: number;
    valueMarkdown?: string;
    valueOid?: string;
    valuePositiveInt?: number;
    valueString?: string;
    valueTime?: string;
    valueUnsignedInt?: number;
    valueUri?: string;
    valueUrl?: string;
    valueUuid?: string;
    valueAddress?: IAddress;
    valueAge?: any;
    valueAnnotation?: any;
    valueAttachment?: IAttachment;
    valueCodeableConcept?: ICodeableConcept;
    valueCoding?: any;
    valueContactPoint?: IContactPoint;
    valueCount?: IQuantity;
    valueDistance?: IQuantity;
    valueDuration?: any;
    valueHumanName?: any;
    valueIdentifier?: any;
    valueMoney?: any;
    valuePeriod?: IPeriod;
    valueQuantity?: IQuantity;
    valueRange?: IRange;
    valueRatio?: IRatio;
    valueReference?: IReference;
    valueSampledData?: ISampledData;
    valueSignature?: any;
    valueTiming?: any;
    valueContactDetail?: any;
    valueContributor?: any;
    valueDataRequirement?: any;
    valueExpression?: any;
    valueParameterDefinition?: any;
    valueRelatedArtifact?: any;
    valueTriggerDefinition?: any;
    valueUsageContext?: any;
    valueDosage?: any;
    valueMeta?: any;
}

export type { ITaskOutput };


