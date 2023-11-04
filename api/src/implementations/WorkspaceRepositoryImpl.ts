import { PrismaClient } from "@prisma/client";
import { IWorkspaceRepository } from "../interfaces/repositories/IWorkspaceRepository";
import Workspace from "../entities/Workspace";
import Column from "../entities/Column";
import Card from "../entities/Card";

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

                const columns: Column[] = workspaceData.columns.map((columnData) => {
                    const cards: Card[] = columnData.cards.map((cardData) => {
                        return new Card(cardData.id, cardData.title, cardData.description ?? "", cardData.columnId, cardData.userId, cardData.createdAt, cardData.updatedAt, cardData.active, cardData.order)
                    })

                    return new Column(columnData.id, columnData.title, columnData.workspaceId, columnData.userId, cards, columnData.createdAt, columnData.updatedAt, columnData.active, columnData.order)
                });

                const workspace = new Workspace(
                    workspaceData.id,
                    workspaceData.title,
                    workspaceData.description ?? "",
                    workspaceData.User.id,
                    workspaceData.createdAt,
                    workspaceData.updatedAt,
                    false,//column ISLOCKED, TODO: ADD COLUM TO DB
                    columns,
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