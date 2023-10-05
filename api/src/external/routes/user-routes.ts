import { FastifyInstance, RouteOptions } from 'fastify';
import { container } from 'tsyringe';
import UserController from '../../application/controllers/UserController';

const userController = container.resolve(UserController);

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/users/signUp', userController.do);

};