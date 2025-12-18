enum EDeviceNameType {
    UDI_LABEL_NAME = "udi-label-name",
    USER_FRIENDLY_NAME = "user-friendly-name",
    PATIENT_REPORTED_NAME = "patient-reported-name",
    MANUFACTURER_NAME = "manufacturer-name",
    MODEL_NAME = "model-name",
    OTHER = "other"
}

type TDeviceNameType = `${EDeviceNameType}`;

interface IDeviceDeviceName {
    name: string;
    type: TDeviceNameType;
}

export { EDeviceNameType };
export type { TDeviceNameType };
export type { IDeviceDeviceName };


