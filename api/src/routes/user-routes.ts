import { FastifyInstance } from 'fastify';
import supabase from '../external/supabase/supabase';
import { UserController } from '../controllers/UserController';



export default async function routes(fastify: FastifyInstance, options: any) {

    const userController = new UserController(fastify);

    fastify.get('/api/users/create', userController.createUser);

}