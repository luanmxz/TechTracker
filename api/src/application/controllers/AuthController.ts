import { FastifyReply, FastifyRequest } from "fastify";
import { ICreateUser } from "../../domain/interfaces/ICreateUser";
import { injectable, inject } from "tsyringe";
import { AuthService } from "../services/AuthService";
import { ILogingUser } from "../../domain/interfaces/ILogingUser";


@injectable()
export class AuthController {
    private authService: AuthService;

    constructor(@inject(AuthService) authService: AuthService) {
        this.authService = authService;
    }

    signUp = async (request: FastifyRequest, response: FastifyReply) => {

        const { email, password, name } = request.body as ICreateUser;

        try {
            await this.authService.signUp({ email, password, name });
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    };

    signOut = async (request: FastifyRequest, response: FastifyReply) => {

        try {
            await this.authService.signOut();
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    }


    signIn = async (request: FastifyRequest, response: FastifyReply) => {

        const logingUser = request.body as ILogingUser;

        try {
            await this.authService.signIn(logingUser);
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    }

}