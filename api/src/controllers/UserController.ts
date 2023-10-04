import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UserService";
import ICreateUser from "../types/ICreateUser";
import { injectable, inject } from "tsyringe";

@injectable()
export class UserController {
    private userService: UserService;

    constructor(@inject('userService') userService: UserService) {
        this.userService = userService;
    }

    signUp = async (request: FastifyRequest, reply: FastifyReply) => {

        const { email, password, name } = request.body as ICreateUser;

        try {
            await this.userService.signUp({ email, password, name });
        } catch (error: any) {
            reply.status(500).send(error);
        }
    };


}