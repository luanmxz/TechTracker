import { FastifyInstance, RouteOptions } from 'fastify';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';
import { DeleteAccountContainer } from '../useCases/users/deleteAccountUseCase/DeleteAccountContainer';

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/users/deleteAccount', async (req, res) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(req, res);
        const deleteAccountController = DeleteAccountContainer.getInstance().getControllerInstance();
        await deleteAccountController.handler(fastifyHttpAdapter);
    });

};