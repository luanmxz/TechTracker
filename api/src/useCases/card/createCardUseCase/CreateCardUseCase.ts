import Card from "../../../entities/Card";
import { ICardRepository } from "../../../interfaces/repositories/ICardRepository";

export class CreateCardUseCase {
    constructor(private cardRepository: ICardRepository) { }

    execute = async (card: Card) => {

        await this.cardRepository.create(card);
    }
}