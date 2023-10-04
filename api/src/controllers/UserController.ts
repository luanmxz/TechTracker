import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UserService";
import { CreateUser } from "../types/CreateUser";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    signUp = async (request: FastifyRequest, reply: FastifyReply) => {

        const user = request.body as CreateUser;

        try {
            await this.userService.create(user);
        } catch (error: any) {
            reply.status(500).send(error);
        }
    };


}