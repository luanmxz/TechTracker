import { SignOutUseCase } from "./SignOutUseCase";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";


export class SignOutController {
    constructor(private signOutUseCase: SignOutUseCase) { }


    handler = async (httpContextAdapter: IHttpContextAdapter) => {

        try {
            await this.signOutUseCase.execute();
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }
}