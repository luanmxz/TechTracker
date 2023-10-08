import { ISignUpDTO } from "./ISignUpDTO";
import { SignUpUseCase } from "./SignUpUseCase";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";

export class SignUpController {
    constructor(private signUpUseCase: SignUpUseCase) { }

    async handler(httpContextAdapter: IHttpContextAdapter) {

        const { email, password, name } = httpContextAdapter.getRequestBody() as ISignUpDTO;

        try {
            await this.signUpUseCase.execute({ email, password, name });
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    };
}