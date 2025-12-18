import { TDateTime } from "./dateTime";
import { IResource } from "./resource";

interface IBundleResponse {
    status: string;
    location?: string;
    etag?: string;
    lastModified?: TDateTime;
    outcome?: IResource;
}

export type { IBundleResponse };

