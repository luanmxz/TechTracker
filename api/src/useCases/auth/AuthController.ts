import { FastifyReply, FastifyRequest } from "fastify";
import { ICreateUser } from "./ICreateUserDTO";
import { injectable, inject } from "tsyringe";
import { AuthService } from "./AuthService";
import { ILogingUser } from "./ILogingUserDTO";


@injectable()
export class AuthController {
    private authService: AuthService;

    constructor(@inject(AuthService) authService: AuthService) {
        this.authService = authService;
    }

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