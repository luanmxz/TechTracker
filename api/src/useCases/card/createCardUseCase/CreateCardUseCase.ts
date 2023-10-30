import Card from "../../../entities/Card";
import { ICardRepository } from "../../../interfaces/repositories/ICardRepository";

export class CreateCardUseCase {
    constructor(private cardRepository: ICardRepository) { }

    execute = async () => {

        await this.cardRepository.create(new Card());
    }
}