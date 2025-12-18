enum EDeviceStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}

type TDeviceStatus = `${EDeviceStatus}`;

export { EDeviceStatus };
export type { TDeviceStatus };


