import Workspace from "../../../entities/Workspace";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { GetAllWorkspacesUseCase } from "./GetAllWorkspacesUseCase";

export class GetAllWorkspacesController {
    constructor(private getAllWorkspacesUseCase: GetAllWorkspacesUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {

        const userId: string = await httpContextAdapter.getRequestBody();

        try {
            const workspaces: Workspace[] = await this.getAllWorkspacesUseCase.execute(userId);
            httpContextAdapter.send(workspaces);
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }
}