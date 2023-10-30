import { IHttpContextAdapter } from "../../interfaces/IHttpContextAdapter";
import { FastifyRequest, FastifyReply } from "fastify";

export class FastifyHttpAdapter implements IHttpContextAdapter {
    constructor(private request: FastifyRequest, private response: FastifyReply) { }

    send(data: any, statusCode?: number | undefined): void {
        this.response.send(data);
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

    //Response
    getResponse(): FastifyReply {
        return this.response;
    }

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


    //Request
    getRequest(): FastifyRequest {
        return this.request;
    }

    getRequestBody(): FastifyRequest["body"] {
        return this.request.body;
    };

    getRequestParams(): FastifyRequest["params"] {
        return this.request.params
    }

    getRequestQuery(): FastifyRequest["query"] {
        return this.request.query;
    }

    getRequestHeader(name: string): string | undefined | string[] {
        const headerValue = this.request.headers[name];

        if (Array.isArray(headerValue)) {
            // Se o header tiver múltiplos valores, retorne todos em um array
            const valuesArray = headerValue.map((value) => `${name}: ${value}`);
            return valuesArray;
        }

        return headerValue ? `${name}: ${headerValue}` : undefined;
    }


    getAllRequestHeaders(): { name: string; value: string | undefined }[] {
        const headers: { name: string; value: string | undefined }[] = [];

        for (const headerName in this.request.headers) {
            const headerValue = this.request.headers[headerName];

            if (Array.isArray(headerValue)) {
                // Se o header tiver múltiplos valores, adiciona cada valor ao array
                for (const value of headerValue) {
                    headers.push({ name: headerName, value: value });
                }
            } else {
                headers.push({ name: headerName, value: headerValue });
            }
        }

        return headers;
    }

    json(data: any, statusCode?: number | undefined): void {
        // fastify docs says that fastify SEND method already uses fast-json-stringify to serialize the data object passed as parameter
        throw new Error("Not implemented yet, sorry!");
    };

    onError(error: Error): void {
        throw new Error("Method not implemented, sorry!");
    };



}