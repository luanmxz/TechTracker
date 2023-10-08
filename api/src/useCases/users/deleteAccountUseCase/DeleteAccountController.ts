import { DeleteAccountUseCase } from "./DeleteAccountUseCase";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { handleErrorResponse } from "../../../helpers/handleErrorResponse";

export class DeleteAccountController {

    constructor(private deleteAccountUseCase: DeleteAccountUseCase) { }

    handler = async (httpContextAdapter: IHttpContextAdapter) => {
        //getLoggedUser;
        const uuid = 'fakeId'; // loggedUser.id;

        try {
            this.deleteAccountUseCase.execute(uuid);
        } catch (error: any) {
            handleErrorResponse(httpContextAdapter.getResponse(), error);
        };
    };
}