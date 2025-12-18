import { TDateTime } from "./dateTime";

interface IAttachment {
    contentType?: string;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: TDateTime;
}

export type { IAttachment };
