enum ESearchMode {
    MATCH = "match",
    INCLUDE = "include",
    OUTCOME = "outcome"
}

type TSearchMode = `${ESearchMode}`;

interface IBundleSearch {
    mode?: TSearchMode;
    score?: number;
}

export { ESearchMode };
export type { TSearchMode };
export type { IBundleSearch };

