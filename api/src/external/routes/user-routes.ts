import { FastifyInstance, RouteOptions } from 'fastify';
import { DeleteAccountDependencyFactory } from '../../useCases/users/deleteAccountUseCase/DeleteAccountDependencyFactory';

const deleteAccountController = new DeleteAccountDependencyFactory().getInstance();

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {
    
    fastify.post('/api/users/deleteAccount', deleteAccountController.execute);

};