import { PrismaClient } from "@prisma/client";
import { ICardRepository } from "../interfaces/repositories/ICardRepository";
import Card from "../entities/Card";

export class CardRepositoryImpl implements ICardRepository {
    constructor(private prismaClient: PrismaClient) { }


    get(id: string): Promise<Card> {
        throw new Error("Method not implemented.");
    }
    getAll(userId: string): Promise<Card[]> {
        throw new Error("Method not implemented.");
    }
    update(card: Card): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    create(card: Card): Promise<void> {
        throw new Error("Method not implemented.");
    }


}