import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

enum EDocumentRelationshipType {
    REPLACES = "replaces",
    TRANSFORMS = "transforms",
    SIGNS = "signs",
    APPENDS = "appends"
}

type TDocumentRelationshipType = `${EDocumentRelationshipType}`;

interface IDocumentReferenceRelatesTo {
    code: TDocumentRelationshipType;
    target: IReference<EResourceType.DOCUMENT_REFERENCE>;
}

export { EDocumentRelationshipType };
export type { TDocumentRelationshipType };
export type { IDocumentReferenceRelatesTo };

