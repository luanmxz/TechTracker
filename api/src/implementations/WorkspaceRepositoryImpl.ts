import { PrismaClient } from "@prisma/client";
import { IWorkspaceRepository } from "../interfaces/repositories/IWorkspaceRepository";
import Workspace from "../entities/Workspace";

export class WorkspaceRepositoryImpl implements IWorkspaceRepository {
    constructor(private prismaClient: PrismaClient) { }

    get(id: string): Promise<Workspace> {
        throw new Error("Method not implemented.");
    }

    async getAll(userId: string): Promise<Workspace[]> {
        try {
            const workspacesData = await this.prismaClient.workspace.findMany({
                where: { userId: userId, active: true },
                include: {
                    columns: { include: { cards: true } },
                    User: { select: { id: true } }
                }
            });

            const workspaces: Workspace[] = workspacesData.map(workspaceData => {
                const workspace = new Workspace(
                    workspaceData.id,
                    workspaceData.title,
                    workspaceData.description ?? "",
                    workspaceData.User.id,
                    workspaceData.createdAt,
                    workspaceData.updatedAt,
                    false,//column ISLOCKED, TODO: ADD COLUM TO DB
                    workspaceData.columns,
                    workspaceData.active
                );
                return workspace;
            });
            return workspaces;
        } catch (error: any) {
            throw new error(error);
        }
    }

    update(Workspace: Workspace): Promise<void> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async create(workspace: Workspace): Promise<void> {
        console.log(workspace);
        try {
            await this.prismaClient.workspace.create({
                data: {
                    title: workspace.getTitle,
                    description: workspace.getDescription,
                    createdAt: workspace.getCreatedAt,
                    User: {
                        connect: { id: workspace.getUserId },
                    }
                }
            })
        } catch (error: any) {
            throw new Error(error);
        }
    }

}