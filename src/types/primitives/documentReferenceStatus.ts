enum EDocumentReferenceStatus {
    CURRENT = "current",
    SUPERSEDED = "superseded",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TDocumentReferenceStatus = `${EDocumentReferenceStatus}`;

export { EDocumentReferenceStatus };
export type { TDocumentReferenceStatus };

