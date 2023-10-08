import { FastifyReply, FastifyRequest } from "fastify";
import { ISignInDTO } from "./ISignInDTO";
import { SignInUseCase } from "./SignInUseCase";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { handleErrorResponse } from "../../../utils/helpers/handleErrorResponse";


export class SignInController {
    constructor(private signInUseCase: SignInUseCase) { }


    handler = async (httpContextAdapter: IHttpContextAdapter) => {

        const logingUser = httpContextAdapter.getRequestBody() as ISignInDTO;

        try {
            await this.signInUseCase.execute(logingUser);
        } catch (error: any) {
            handleErrorResponse(httpContextAdapter.getResponse(), error);
        }
    }
}