import { FastifyInstance, RouteOptions } from 'fastify';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';
import { SignUpContainer } from '../useCases/auth/signUpUseCase/SignUpContainer';
import { SignInContainer } from '../useCases/auth/signInUseCase/SignInContainer';
import { SignOutContainer } from '../useCases/auth/signOutUseCase/SignOutContainer';


export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/auth/signUp', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signUpController = SignUpContainer.getInstance().getControllerInstance();
        await signUpController.handler(fastifyHttpAdapter);
    });

    fastify.get('/auth/signIn', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signInController = SignInContainer.getInstance().getControllerInstance();
        await signInController.handler(fastifyHttpAdapter);
    });

    fastify.get('/auth/signOut', async (request, response) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signOutController = SignOutContainer.getInstance().getControllerInstance();
        await signOutController.handler(fastifyHttpAdapter);
    })
}