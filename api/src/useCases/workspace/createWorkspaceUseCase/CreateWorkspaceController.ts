import { User } from "@supabase/supabase-js";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { GetUserLoggedContainer } from "../../auth/getUserLoggedUseCase/GetUserLoggedContainer";
import { CreateWorkspaceDTO } from "./CreateWorkspaceDTO";
import { CreateWorkspaceUseCase } from "./createWorkspaceUseCase";

export class CreateWorkspaceController {
    constructor(private createWorkspaceUseCase: CreateWorkspaceUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {
        const { name, description } = httpContextAdapter.getRequestBody();

        const owner: User | null = await GetUserLoggedContainer.getInstance().getUseCaseInstance().execute();



        const newWorkspace: CreateWorkspaceDTO = { name, description, userId: owner!.id };

        try {
            await this.createWorkspaceUseCase.execute(newWorkspace);
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }
}