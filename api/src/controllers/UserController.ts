import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UserService";
import { CreateUser } from "../types/CreateUser";

export class UserController {

    userService: UserService = new UserService();

    constructor(private fastifyInstance: FastifyInstance) { }

    createUser(request: FastifyRequest, reply: FastifyReply) {

        const createUser = request.body as CreateUser;

        try {
            this.userService.create(createUser);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }


}