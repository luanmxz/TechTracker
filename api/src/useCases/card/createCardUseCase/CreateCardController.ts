import Card from "../../../entities/Card";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { CreateCardDTO } from "./CreateCardDTO";
import { CreateCardUseCase } from "./CreateCardUseCase";


export class CreateCardController {
    constructor(private createCardUseCase: CreateCardUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {

        const createCardDTO: CreateCardDTO = {
            title: httpContextAdapter.getRequestBody().title,
            description: httpContextAdapter.getRequestBody().description,
            columnId: httpContextAdapter.getRequestQuery().columnId,
            userId: httpContextAdapter.getRequestQuery().userId
        };

        const card: Card = new Card("", createCardDTO.title, createCardDTO.description, createCardDTO.columnId, createCardDTO.userId);

        try {
            await this.createCardUseCase.execute(card);
        } catch (error: any) {
            throw new Error(error);
        }

    }
}