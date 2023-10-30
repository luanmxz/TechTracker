import Card from "../../entities/Card";


export interface ICardRepository {

    get(id: string): Promise<Card>;
    getAll(userId: string): Promise<Card[]>;
    update(card: Card): Promise<void>;
    delete(id: string): Promise<void>;
    create(card: Card): Promise<void>;
}