import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';
import { DeleteAccountContainer } from '../useCases/users/deleteAccountUseCase/DeleteAccountContainer';
import { GetAllUsersContainer } from '../useCases/users/getAllUsersUseCase/GetAllUsersContainer';

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.delete('/users', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const deleteAccountController = DeleteAccountContainer.getInstance().getControllerInstance();
        await deleteAccountController.handler(fastifyHttpAdapter);
    });

    fastify.put('/users/:uuid', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        //TODO: implement update user method
    });

    fastify.get('/users', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const getAllUsersController = GetAllUsersContainer.getInstance().getControllerInstance();
        await getAllUsersController.handle(fastifyHttpAdapter);
    });

    fastify.get('/users/:uuid', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        //TODO: implement get user by id method
    });
};