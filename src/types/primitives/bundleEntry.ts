import { IBundleLink } from "./bundleLink";
import { IBundleRequest } from "./bundleRequest";
import { IBundleResponse } from "./bundleResponse";
import { IBundleSearch } from "./bundleSearch";
import { IResource } from "./resource";

interface IBundleEntry {
    link?: IBundleLink[];
    fullUrl?: string;
    resource?: IResource;
    search?: IBundleSearch;
    request?: IBundleRequest;
    response?: IBundleResponse;
}

export type { IBundleEntry };

