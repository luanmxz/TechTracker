import { IHttpContextAdapter } from "../interfaces/IHttpContextAdapter";

export function handleErrorResponse(httpContextAdapter: IHttpContextAdapter, error: any) {

    const statusCode = error.statusCode || 500;

    httpContextAdapter.status(statusCode).send(error.statusCode ? error.toJSON() : error);
}