import { FastifyReply } from "fastify";

export function handleErrorResponse(response: FastifyReply, error: any) {

    const statusCode = error.statusCode || 500;

    response.status(statusCode).send(error.statusCode ? error.toJSON() : error);

}