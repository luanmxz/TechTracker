import { DeleteAccountUseCase } from "./DeleteAccountUseCase";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";

export class DeleteAccountController {

    constructor(private deleteAccountUseCase: DeleteAccountUseCase) { }

    handler = async (httpContextAdapter: IHttpContextAdapter) => {
        //getLoggedUser;
        const uuid = 'fakeId'; // loggedUser.id;

        try {
            this.deleteAccountUseCase.execute(uuid);
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        };
    };
}