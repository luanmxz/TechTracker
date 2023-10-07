import { DeleteAccountUseCase } from "./DeleteAccountUseCase";

export class DeleteAccountController {

    constructor(private deleteAccountUseCase: DeleteAccountUseCase) {}

    execute = async (request: FastifyRequest, response: FastifyReply) => {
        //getLoggedUser;
        const id = 'fakeId'; // loggedUser.id;

        try {
            this.deleteAccountUseCase.execute(id);
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        };
    };
}