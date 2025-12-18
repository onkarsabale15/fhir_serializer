import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TDocumentReferenceStatus } from "../primitives/documentReferenceStatus";
import { TDateTime } from "../primitives/dateTime";
import { IDocumentReferenceRelatesTo } from "../primitives/documentReferenceRelatesTo";
import { IDocumentReferenceContent } from "../primitives/documentReferenceContent";
import { IDocumentReferenceContext } from "../primitives/documentReferenceContext";

interface IDocumentReference extends IResource<EResourceType.DOCUMENT_REFERENCE> {
    masterIdentifier?: IIdentifier;
    identifier?: IIdentifier[];
    status: TDocumentReferenceStatus;
    docStatus?: any;
    type?: ICodeableConcept;
    category?: ICodeableConcept[];
    subject?: IReference;
    date?: TDateTime;
    author?: IReference[];
    authenticator?: IReference;
    custodian?: IReference<EResourceType.ORGANIZATION>;
    relatesTo?: IDocumentReferenceRelatesTo[];
    description?: string;
    securityLabel?: ICodeableConcept[];
    content: IDocumentReferenceContent[];
    context?: IDocumentReferenceContext;
}

export type { IDocumentReference };

