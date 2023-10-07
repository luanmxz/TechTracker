import { FastifyReply, FastifyRequest } from "fastify";
import { ISignInDTO } from "./ISignInDTO";
import { SignInUseCase } from "./SignInUseCase";
import { handleErrorResponse } from "../../../utils/helpers/HandleErrorResponse";

export class SignInController {
    constructor(private signInUseCase: SignInUseCase) { }


    handler = async (request: FastifyRequest, response: FastifyReply) => {

        const logingUser = request.body as ISignInDTO;

        try {
            await this.signInUseCase.execute(logingUser);
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }
}