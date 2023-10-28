import Workspace from "../../entities/Workspace";

export interface IWorkspaceRepository {

    get(id: string): Promise<Workspace>;
    getAll(userId: string): Promise<Workspace[]>;
    update(Workspace: Workspace): Promise<void>;
    delete(id: string): Promise<void>;
    create(Workspace: Workspace): Promise<void>;
}