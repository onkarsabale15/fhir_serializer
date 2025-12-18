// "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other"
enum EContactSystem {
    PHONE = "phone",
    FAX = "fax",
    EMAIL = "email",
    PAGER = "pager",
    URL = "url",
    SMS = "sms",
    OTHER = "other"
}

type TContactSystem = `${EContactSystem}`;

export { EContactSystem };
export type { TContactSystem }