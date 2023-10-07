import { injectable, inject } from "tsyringe";
import UserService from "../services/UserService";
import { FastifyReply, FastifyRequest } from "fastify";


@injectable()
export default class UserController {

    constructor(@inject(UserService) private userService: UserService) { }

    // TODO: user features
    deleteAccount = async (request: FastifyRequest, response: FastifyReply) => {
        //getLoggedUser;
        const id = 'fakeId'; // loggedUser.id;

        try {
            this.userService.deleteAccount(id);
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        };
    };

}