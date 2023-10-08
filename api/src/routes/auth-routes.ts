import { FastifyInstance, RouteOptions } from 'fastify';
import { SignInDependencyFactory } from '../useCases/auth/signInUseCase/SignInDepedencyFactory';
import { SignUpDependencyFactory } from '../useCases/auth/signUpUseCase/SignUpDependencyFactory';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';

const signUpController = new SignUpDependencyFactory().getInstance();
const signInController = new SignInDependencyFactory().getInstance();

export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/auth/signUp', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        await signUpController.handler(fastifyHttpAdapter);
    });

    fastify.get('/teste', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        await signInController.handler(fastifyHttpAdapter);
    });

}