import { ISignInDTO } from "./ISignInDTO";
import { SignInUseCase } from "./SignInUseCase";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";


export class SignInController {
    constructor(private signInUseCase: SignInUseCase) { }


    handler = async (httpContextAdapter: IHttpContextAdapter) => {

        const logingUser = httpContextAdapter.getRequestBody() as ISignInDTO;

        try {
            const data = await this.signInUseCase.execute(logingUser);

            await httpContextAdapter.send(data);

        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }
}