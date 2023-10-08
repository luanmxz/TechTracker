import { IHttpContextAdapter } from "../interfaces/IHttpContextAdapter";

export class ErrorResponseHandler {
    constructor(private httpContextAdapter: IHttpContextAdapter, private error: any) { }

    handle(): void {
        const statusCode = this.error.statusCode || 500;
        this.httpContextAdapter.status(statusCode).send(this.error.statusCode ? this.error.toJSON() : this.error);
    };

}