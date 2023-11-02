import Column from "../../../entities/Column";
import { IColumnRepository } from "../../../interfaces/repositories/IColumnRepository";

export default class GetAllColumnUseCase {

    constructor(private columnRepository: IColumnRepository) { }

    execute = async (workspaceId: string): Promise<Column[]> => {
        return await this.columnRepository.getAll(workspaceId);
    }
}