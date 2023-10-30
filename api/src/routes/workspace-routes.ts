import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { FastifyHttpAdapter } from "../external/fastify/FastifyHttpAdapter";
import { CreateWorkspaceContainer } from "../useCases/workspace/createWorkspaceUseCase/CreateWorkspaceContainer";
import { GetAllWorkspacesContainer } from "../useCases/workspace/getAllWorkspacesUseCase/GetAllWorkspacesContainer";

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/workspaces', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const createWorkspaceController = CreateWorkspaceContainer.getInstance().getControllerInstance();
        await createWorkspaceController.handle(fastifyHttpAdapter);
    });

    fastify.get('/workspaces/:userId', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const getAllWorkspaceController = GetAllWorkspacesContainer.getInstance().getControllerInstance();
        await getAllWorkspaceController.handle(fastifyHttpAdapter);
    })
}