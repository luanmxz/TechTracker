import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { CreateWorkspaceDTO } from "./CreateWorkspaceDTO";
import { CreateWorkspaceUseCase } from "./CreateWorkspaceUseCase";

export class CreateWorkspaceController {
    constructor(private createWorkspaceUseCase: CreateWorkspaceUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {
        const { name, description, userId } = httpContextAdapter.getRequestBody() as CreateWorkspaceDTO;

        const newWorkspace: CreateWorkspaceDTO = { name, description, userId };

        try {
            await this.createWorkspaceUseCase.execute(newWorkspace);
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }
}