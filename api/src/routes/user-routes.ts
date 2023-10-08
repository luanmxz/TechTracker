import { FastifyInstance, RouteOptions } from 'fastify';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';
import { DeleteAccountContainer } from '../useCases/users/deleteAccountUseCase/DeleteAccountContainer';

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.delete('/users', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const deleteAccountController = DeleteAccountContainer.getInstance().getControllerInstance();
        await deleteAccountController.handler(fastifyHttpAdapter);
    });

    fastify.put('/users/:uuid', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        //TODO: implement update user method
    });

    fastify.get('/users', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        //TODO: implement get all users method
    });

    fastify.get('/users/:uuid', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        //TODO: implement get user by id method
    })

};