// FHIR instant: An instant in time - known at least to the second
// Format: YYYY-MM-DDThh:mm:ss.sss+zz:zz
export type TInstant = `${number}-${number}-${number}T${number}:${number}:${number}.${number}${'Z' | `+${number}:${number}` | `-${number}:${number}`}`;

