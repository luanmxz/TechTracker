import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { FastifyHttpAdapter } from "../external/fastify/FastifyHttpAdapter";
import { CreateWorkspaceContainer } from "../useCases/workspace/createWorkspaceUseCase/createWorkspaceContainer";

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/workspaces', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const createWorkspaceController = CreateWorkspaceContainer.getInstance().getControllerInstance();
        await createWorkspaceController.handle(fastifyHttpAdapter);
    })
}