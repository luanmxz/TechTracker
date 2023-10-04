import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UserService";
import { CreateUser } from "../types/CreateUser";
import { User } from "../entities/User";


export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    signUp = async (request: FastifyRequest, reply: FastifyReply) => {

        const { email, password, name } = request.body as CreateUser
            ;
        const newUser = User.createUser(email, password, name);

        try {
            await this.userService.create(newUser);
        } catch (error: any) {
            reply.status(500).send(error);
        }
    };


}