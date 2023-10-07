import { FastifyReply, FastifyRequest } from "fastify";
import { SignOutUseCase } from "./SignOutUseCase";

export class SignOutController {
    constructor(private signOutUseCase: SignOutUseCase) { }


    signOut = async (request: FastifyRequest, response: FastifyReply) => {

        try {
            await this.signOutUseCase.execute();
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    }
}