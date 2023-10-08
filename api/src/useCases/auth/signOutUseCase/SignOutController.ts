import { FastifyReply, FastifyRequest } from "fastify";
import { SignOutUseCase } from "./SignOutUseCase";
import { handleErrorResponse } from "../../../helpers/handleErrorResponse";


export class SignOutController {
    constructor(private signOutUseCase: SignOutUseCase) { }


    handler = async (request: FastifyRequest, response: FastifyReply) => {

        try {
            await this.signOutUseCase.execute();
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }
}