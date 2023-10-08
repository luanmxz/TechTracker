import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { handleErrorResponse } from "../../../utils/helpers/handleErrorResponse";

export class DeleteAccountController {

    constructor(private deleteAccountUseCase: DeleteAccountUseCase) { }

    handler = async (httpContextAdapter: IHttpContextAdapter) => {
        //getLoggedUser;
        const id = 'fakeId'; // loggedUser.id;

        try {
            this.deleteAccountUseCase.execute(id);
        } catch (error: any) {
            handleErrorResponse(httpContextAdapter.getResponse(), error);
        };
    };
}