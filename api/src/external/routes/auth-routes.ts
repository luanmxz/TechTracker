import { FastifyInstance, RouteOptions } from 'fastify';
import signUpDependencyFactory from '../../useCases/auth/signUpUseCase/signUpDependencyFactory';

const signUpController = new signUpDependencyFactory().getInstance();

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/auth/signUp', signUpController.execute);

};