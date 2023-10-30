import Column from "../../entities/Column";

export interface IColumnRepository {

    get(id: string): Promise<Column>;
    getAll(userId: string): Promise<Column[]>;
    update(column: Column): Promise<void>;
    delete(id: string): Promise<void>;
    create(column: Column): Promise<void>;
}