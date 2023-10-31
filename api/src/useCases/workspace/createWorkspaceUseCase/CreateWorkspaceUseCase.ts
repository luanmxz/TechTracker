import Workspace from "../../../entities/Workspace";
import { IWorkspaceRepository } from "../../../interfaces/repositories/IWorkspaceRepository";
import { CreateWorkspaceDTO } from "./CreateWorkspaceDTO";

export class CreateWorkspaceUseCase {
    constructor(private workspaceRepository: IWorkspaceRepository) { }

    execute = async (createWorkspaceDTO: CreateWorkspaceDTO) => {

        if (createWorkspaceDTO.description === undefined) createWorkspaceDTO.description = '';

        const { title, description, userId } = createWorkspaceDTO

        const workspace = Workspace.createWorkspace(title, userId, description);

        await this.workspaceRepository.create(workspace);
    }
}