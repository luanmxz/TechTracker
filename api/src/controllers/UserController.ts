import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UserService";
import { CreateUser } from "../types/CreateUser";




export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }



    signUp = async (request: FastifyRequest, reply: FastifyReply) => {
        console.log(this.userService);
        const { email, password, name } = request.body as any;

        console.log({ email, password, name });

        try {
            await this.userService.create({ email, password, name });
        } catch (error: any) {
            reply.status(500).send(error);
        }
    };


}