import Column from "../../../entities/Column";
import { IColumnRepository } from "../../../interfaces/repositories/IColumnRepository";

export class CreateColumnUseCase {
    constructor(private columnRepository: IColumnRepository) { }

    execute = async (column: Column) => {
        await this.columnRepository.create(column);
    }
}