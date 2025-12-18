enum EFlagStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TFlagStatus = `${EFlagStatus}`;

export { EFlagStatus };
export type { TFlagStatus };


