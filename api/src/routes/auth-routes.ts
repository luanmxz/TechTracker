import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { FastifyHttpAdapter } from '../external/fastify/FastifyHttpAdapter';
import { SignUpContainer } from '../useCases/auth/signUpUseCase/SignUpContainer';
import { SignInContainer } from '../useCases/auth/signInUseCase/SignInContainer';
import { SignOutContainer } from '../useCases/auth/signOutUseCase/SignOutContainer';
import { GetUserLoggedContainer } from '../useCases/auth/getUserLoggedUseCase/GetUserLoggedContainer';


export default async function routes(fastify: FastifyInstance, options: RouteOptions) {

    fastify.post('/auth/signUp', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signUpController = SignUpContainer.getInstance().getControllerInstance();
        await signUpController.handler(fastifyHttpAdapter);
    });

    fastify.post('/auth/signIn', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signInController = SignInContainer.getInstance().getControllerInstance();
        await signInController.handler(fastifyHttpAdapter);
    });

    fastify.get('/auth/signOut', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const signOutController = SignOutContainer.getInstance().getControllerInstance();
        await signOutController.handler(fastifyHttpAdapter);
    });

    fastify.get('/auth/get', async (request: FastifyRequest, response: FastifyReply) => {
        const fastifyHttpAdapter = new FastifyHttpAdapter(request, response);
        const getUserLoggedController = GetUserLoggedContainer.getInstance().getControllerInstance();
        await getUserLoggedController.handler(fastifyHttpAdapter);
    })


}