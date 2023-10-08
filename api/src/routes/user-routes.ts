import { FastifyInstance, RouteOptions } from 'fastify';
import { DeleteAccountDependencyFactory } from '../useCases/users/deleteAccountUseCase/DeleteAccountDependencyFactory';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';

const deleteAccountController = new DeleteAccountDependencyFactory().getInstance();

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/users/deleteAccount', async (req, res) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(req, res);
        await deleteAccountController.handler(fastifyHttpAdapter);
    });

};