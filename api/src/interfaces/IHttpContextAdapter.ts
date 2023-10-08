export interface IHttpContextAdapter {

    // Responses HTTP
    send(data: any, statusCode?: number): void;
    json(data: any, statusCode?: number): void;
    status(statusCode: number): this;

    // Headers HTTP
    //setHeader(name: string, value: string): this;
    //getHeader(name: string): string | undefined;
    //removeHeader(name: string): this;

    // Redirect
    redirect(url: string, statusCode?: number): void;

    // Catching errors
    onError(error: Error): void;

    // Props of request
    getAllRequestHeaders(): { name: string; value: string | undefined }[];
    getRequestHeader(name: string): string | undefined | string[];
    getRequestBody(): any;

    // Props of response
    getResponseHeader(name: string): string | undefined;
    setResponseHeader(name: string, value: string): this;
    removeResponseHeader(name: string): this;

    getResponse(): any;
    getRequest(): any;
}

