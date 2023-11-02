import { PrismaClient } from "@prisma/client";
import { IColumnRepository } from "../interfaces/repositories/IColumnRepository";
import Column from "../entities/Column";
import { Column as ColumnPrisma } from "@prisma/client";
import Card from "../entities/Card";

export class ColumnRepositoryImpl implements IColumnRepository {
    constructor(private prismaClient: PrismaClient) { }


    get(id: string): Promise<Column> {
        throw new Error("Method not implemented.");
    }

    async getAll(userId: string): Promise<Column[]> {
        try {
            const columnData = await this.prismaClient.column.findMany({
                include: {
                    cards: true,
                },
                where: {
                    active: true,
                    AND: { userId: userId },
                },
            });

            const columns: Column[] = columnData.map((column) => {
                const cards: Card[] = column.cards.map((card) => {
                    return new Card(
                        card.id,
                        card.title,
                        card.description ?? "",
                        card.columnId,
                        card.userId,
                        card.createdAt,
                        card.updatedAt,
                        card.active,
                        card.order
                    );
                });

                return new Column(
                    column.id,
                    column.title,
                    column.workspaceId,
                    column.userId,
                    cards,
                    column.createdAt,
                    column.updatedAt,
                    column.active,
                    column.order
                );
            });

            return columns;

        } catch (error: any) {
            throw new Error(error);
        }
    };

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