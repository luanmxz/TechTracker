import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import GetAllColumnUseCase from "./GetAllColumnUseCase";

export default class GetAllColumnController {
    constructor(private getAllColumnUseCase: GetAllColumnUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {

        try {
            this.getAllColumnUseCase.execute("test");
        } catch (error: any) {
            throw new Error(error);
        }
    }
}