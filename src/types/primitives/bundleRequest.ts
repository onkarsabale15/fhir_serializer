enum EHTTPVerb {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

type THTTPVerb = `${EHTTPVerb}`;

interface IBundleRequest {
    method: THTTPVerb;
    url: string;
    ifNoneMatch?: string;
    ifModifiedSince?: string;
    ifMatch?: string;
    ifNoneExist?: string;
}

export { EHTTPVerb };
export type { THTTPVerb };
export type { IBundleRequest };

