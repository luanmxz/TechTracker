import Column from "../../../entities/Column";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { CreateColumnDTO } from "./CreateColumnDTO";
import { CreateColumnUseCase } from "./CreateColumnUseCase";


export class CreateColumnController {
    constructor(private createColumnUseCase: CreateColumnUseCase) { }

    async handle(httpContextAdapter: IHttpContextAdapter) {

        const createColumnDTO: CreateColumnDTO = {
            title: httpContextAdapter.getRequestBody().title,
            workspaceId: httpContextAdapter.getRequestQuery().workspaceId,
            userId: httpContextAdapter.getRequestQuery().userId

        };

        console.log(createColumnDTO);

        const column: Column = new Column("", createColumnDTO.title, createColumnDTO.workspaceId, createColumnDTO.userId);

        try {
            await this.createColumnUseCase.execute(column);
        } catch (error: any) {
            throw new Error(error);
        }

    }
}