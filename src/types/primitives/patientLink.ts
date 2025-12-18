//"replaced-by" | "replaces" | "refer" | "seealso"
enum EPatientLink{
    REPLACED_BY = "replaced-by",
    REPLACES = "replaces",
    REFER = "refer",
    SEEALSO = "seealso"
}

type TPatientLink = `${EPatientLink}`;

export { EPatientLink };
export type { TPatientLink }