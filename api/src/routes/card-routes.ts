import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { FastifyHttpAdapter } from "../external/fastify/FastifyHttpAdapter";
import { CreateCardContainer } from "../useCases/card/createCardUseCase/CreateCardContainer";

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/card/:columnId-:userId', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const createCardController = CreateCardContainer.getInstance().getControllerInstance();
        await createCardController.handle(fastifyHttpAdapter);
    });

}