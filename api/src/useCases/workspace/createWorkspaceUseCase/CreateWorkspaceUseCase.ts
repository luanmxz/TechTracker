import Workspace from "../../../entities/Workspace";
import { IWorkspaceRepository } from "../../../interfaces/repositories/IWorkspaceRepository";
import { CreateWorkspaceDTO } from "./CreateWorkspaceDTO";

export class CreateWorkspaceUseCase {
    constructor(private workspaceRepository: IWorkspaceRepository) { }

    execute = async (createWorkspaceDTO: CreateWorkspaceDTO) => {

        if (createWorkspaceDTO.description === undefined) createWorkspaceDTO.description = '';

        const newWorkspace = Workspace.createWorkspace(createWorkspaceDTO);

        await this.workspaceRepository.create(newWorkspace);
    }
}