enum EQuantityComparator {
    LESS_THAN = "<",
    LESS_THAN_OR_EQUAL = "<=",
    GREATER_THAN_OR_EQUAL = ">=",
    GREATER_THAN = ">"
}

type TQuantityComparator = `${EQuantityComparator}`;

export { EQuantityComparator };
export type { TQuantityComparator };

