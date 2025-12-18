enum EBundleType {
    DOCUMENT = "document",
    MESSAGE = "message",
    TRANSACTION = "transaction",
    TRANSACTION_RESPONSE = "transaction-response",
    BATCH = "batch",
    BATCH_RESPONSE = "batch-response",
    HISTORY = "history",
    SEARCHSET = "searchset",
    COLLECTION = "collection"
}

type TBundleType = `${EBundleType}`;

export { EBundleType };
export type { TBundleType };

