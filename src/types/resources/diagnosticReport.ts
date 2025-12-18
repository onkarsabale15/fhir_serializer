import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TDiagnosticReportStatus } from "../primitives/diagnosticReportStatus";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IAttachment } from "../primitives/attachment";
import { IDiagnosticReportMedia } from "../primitives/diagnosticReportMedia";

interface IDiagnosticReport extends IResource<EResourceType.DIAGNOSTIC_REPORT> {
    identifier?: IIdentifier[];
    basedOn?: IReference<EResourceType.CARE_PLAN | EResourceType.IMMUNIZATION_RECOMMENDATION | EResourceType.MEDICATION_REQUEST | EResourceType.NUTRITION_ORDER | EResourceType.SERVICE_REQUEST>[];
    status: TDiagnosticReportStatus;
    category?: ICodeableConcept[];
    code: ICodeableConcept;
    subject?: IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.DEVICE | EResourceType.LOCATION>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    effectiveDateTime?: TDateTime;
    effectivePeriod?: IPeriod;
    issued?: string;
    performer?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM>[];
    resultsInterpreter?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM>[];
    specimen?: IReference<EResourceType.SPECIMEN>[];
    result?: IReference<EResourceType.OBSERVATION>[];
    imagingStudy?: IReference<EResourceType.IMAGING_STUDY>[];
    media?: IDiagnosticReportMedia[];
    conclusion?: string;
    conclusionCode?: ICodeableConcept[];
    presentedForm?: IAttachment[];
}

export type { IDiagnosticReport };

