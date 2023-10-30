import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { CreateCardUseCase } from "./CreateCardUseCase";


export class CreateCardController {
    constructor(private createCardUseCase: CreateCardUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {

    }
}