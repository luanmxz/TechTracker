import { FastifyInstance, RouteOptions } from 'fastify';
import { container } from 'tsyringe';
import { AuthController } from '../../useCases/auth/AuthController';

const authController = container.resolve(AuthController);

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/auth/signUp', authController.signUp);

};