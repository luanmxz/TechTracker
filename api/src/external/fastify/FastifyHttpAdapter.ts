import { IHttpContextAdapter } from "../../interfaces/IHttpContextAdapter";
import { FastifyRequest, FastifyReply } from "fastify";
import { handleErrorResponse } from "../../helpers/handleErrorResponse";

export class FastifyHttpAdapter implements IHttpContextAdapter {
    constructor(private request: FastifyRequest, private response: FastifyReply) { }

    send(data: any, statusCode?: number | undefined): void {
        this.response.send(data);
    };

    json(data: any, statusCode?: number | undefined): void {
        throw new Error("Not implemented yet, sorry");
    };

    status(statusCode: number): this {
        this.response.status(statusCode);
        return this;
    };

    redirect(url: string, statusCode?: number | undefined): void {
        if (typeof statusCode === "number") {
            this.response.redirect(statusCode, url);
        } else {
            this.response.redirect(url);
        }
    };

    onError(error: Error): void {
        handleErrorResponse(this.response, error);
    };

    getRequestHeader(name: string): string | undefined {
        throw new Error("Method not implemented.");
    };

    getRequestBody() {
        return this.request.body;
    };

    getResponseHeader(name: string): string | undefined {
        return this.response.getHeader(name)?.toString();
    };

    setResponseHeader(name: string, value: string): this {
        this.response.header(name, value);
        return this;
    };

    removeResponseHeader(name: string): this {
        this.response.removeHeader(name);
        return this;
    };

    getResponse(): FastifyReply {
        return this.response;
    }

    getRequest(): FastifyRequest {
        return this.request;
    }

}