import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { FastifyHttpAdapter } from "../external/fastify/FastifyHttpAdapter";
import { CreateColumnContainer } from "../useCases/column/createColumnUseCase/CreateColumnContainer";


export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/column/:workspaceId-:userId', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const createColumnController = CreateColumnContainer.getInstance().getControllerInstance();
        await createColumnController.handle(fastifyHttpAdapter);
    });

    fastify.get('/column/:workspaceId', async (request: FastifyRequest, response: FastifyReply) => {

    })
}