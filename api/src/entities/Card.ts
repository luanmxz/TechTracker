export default class Card {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: Date;
    private updatedAt: Date;
    private columnId: string;

    constructor(id: string = "", title: string = "", description: string = "", columnId: string, createdAt: Date = new Date(), updatedAt: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.columnId = columnId;
    };

    public get getId(): string {
        return this.id;
    }

    public get getTitle(): string {
        return this.title;
    }

    public get getDescription(): string {
        return this.description;
    }

    public get getCreatedAt(): Date {
        return this.createdAt;
    }

    public get getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public get getColumnId(): string {
        return this.columnId;
    }
}