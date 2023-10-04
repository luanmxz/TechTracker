import { FastifyInstance, RouteOptions } from 'fastify';
import { UserController } from '../controllers/UserController';
import { container } from 'tsyringe';


const userController = container.resolve(UserController);

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/users/signUp', userController.signUp);

};