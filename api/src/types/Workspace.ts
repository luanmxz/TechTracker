import { Card } from "./Card";
import { Column } from "./Column";

export interface Workspace {
    id?: String;
    title: String;
    description: String | null;
    createdAt?: Date;
    updatedAt?: Date;
    userId: String;
    columns?: Column[];
    cards?: Card[];
}