import { PrismaClient } from "@prisma/client";
import { IColumnRepository } from "../interfaces/repositories/IColumnRepository";
import Column from "../entities/Column";

export class ColumnRepositoryImpl implements IColumnRepository {
    constructor(private prismaClient: PrismaClient) { }


    get(id: string): Promise<Column> {
        throw new Error("Method not implemented.");
    }
    getAll(userId: string): Promise<Column[]> {
        throw new Error("Method not implemented.");
    }
    update(column: Column): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async create(column: Column): Promise<void> {
        await this.prismaClient.column.create({
            data: {
                title: column.getTitle,
                order: 0,
                User: {
                    connect: { id: column.getUserId }
                },
                Workspace: {
                    connect: { id: column.getWorkspaceId }
                }
            }
        })
    }


}