import { FastifyInstance, RouteOptions } from 'fastify';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';

const userService = new UserService();
const userController = new UserController(userService);

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/users/signUp', userController.signUp);

};