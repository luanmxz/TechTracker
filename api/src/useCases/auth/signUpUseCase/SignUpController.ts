import { FastifyReply, FastifyRequest } from "fastify";
import { ISignUpDTO } from "./ISignUpDTO";
import { SignUpUseCase } from "./SignUpUseCase";
import { handleErrorResponse } from "../../../utils/helpers/HandleErrorResponse";

export class SignUpController {
    constructor(private signUpUseCase: SignUpUseCase) { }


    async handler(request: FastifyRequest, response: FastifyReply) {

        const { email, password, name } = request.body as ISignUpDTO;

        try {
            await this.signUpUseCase.execute({ email, password, name });
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    };
}