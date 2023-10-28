import Workspace from "../../../entities/Workspace";
import { IWorkspaceRepository } from "../../../interfaces/repositories/IWorkspaceRepository";
import GetUserLoggedUseCase from "../../auth/getUserLoggedUseCase/GetUserLoggedUseCase";
import { GetAllUsersContainer } from "../../users/getAllUsersUseCase/GetAllUsersContainer";
import { CreateWorkspaceDTO } from "./CreateWorkspaceDTO";

export class CreateWorkspaceUseCase {
    constructor(private workspaceRepository: IWorkspaceRepository) { }

    execute = async (createWorkspaceDTO: CreateWorkspaceDTO) => {
        
        const newWorkspace = Workspace.createWorkspace(createWorkspaceDTO);

        await this.workspaceRepository.create(newWorkspace);
    }
}