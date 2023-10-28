import { PrismaClient } from "@prisma/client";
import Workspace from "../entities/Workspace";
import { supabase } from "../external/supabase/supabase";
import { IWorkspaceRepository } from "../interfaces/repositories/IWorkspaceRepository";
import { ErrorResponseHandler } from "../helpers/handleErrorResponse";

export class WorkspaceRepositoryImpl implements IWorkspaceRepository {
    constructor(private prismaClient: PrismaClient) { }

    get(id: string): Promise<Workspace> {
        throw new Error("Method not implemented.");
    }
    getAll(userId: string): Promise<Workspace[]> {
        throw new Error("Method not implemented.");
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
                    title: workspace.getName,
                    description: workspace.getDescription,
                    createdAt: workspace.getCreatedAt,
                    userId: workspace.getUserId,
                }
            })
        } catch (error: any) {
            throw new Error(error);
        }
    }

}