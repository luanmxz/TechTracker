
import Workspace from "../../../entities/Workspace";
import { IWorkspaceRepository } from "../../../interfaces/repositories/IWorkspaceRepository";

export class GetAllWorkspacesUseCase {
    constructor(private workspaceRepository: IWorkspaceRepository) { }

    execute = async (userId: string): Promise<Workspace[]> => {
        const workspaces: Workspace[] = await this.workspaceRepository.getAll(userId);
        return workspaces;
    }
}