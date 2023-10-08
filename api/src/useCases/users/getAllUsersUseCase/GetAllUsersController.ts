import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { IUserDTO } from "../IUserDTO";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
    constructor(private getAllUsersUseCase: GetAllUsersUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {
        try {
            const users: IUserDTO[] = await this.getAllUsersUseCase.execute();
            httpContextAdapter.send(users);
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }

}