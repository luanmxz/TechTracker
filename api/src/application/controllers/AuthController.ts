import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserType } from "../../domain/interfaces/CreateUserType";
import { injectable, inject } from "tsyringe";
import { AuthService } from "../services/AuthService";


@injectable()
export class AuthController {
    private authService: AuthService;

    constructor(@inject(AuthService) authService: AuthService) {
        this.authService = authService;
    }

    signUp = async (request: FastifyRequest, reply: FastifyReply) => {

        const { email, password, name } = request.body as CreateUserType;

        try {
            await this.authService.signUp({ email, password, name });
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    };


}