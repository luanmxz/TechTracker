import { FastifyInstance, RouteOptions } from 'fastify';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';
import { SignUpContainer } from '../useCases/auth/signUpUseCase/SignUpContainer';
import { SignInContainer } from '../useCases/auth/signInUseCase/SignInContainer';


export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/api/auth/signUp', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signUpController = SignUpContainer.getInstance().getControllerInstance();
        await signUpController.handler(fastifyHttpAdapter);
    });

    fastify.get('/teste', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signInController = SignInContainer.getInstance().getControllerInstance();
        await signInController.handler(fastifyHttpAdapter);
    });

}