export default class Card {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: Date;
    private updatedAt: Date;
    private columnId: string;
    private userId: string;
    private active: boolean;

    constructor(id: string = "", title: string = "", description: string = "", columnId: string = "", userId: string = "", createdAt: Date = new Date(), updatedAt: Date = new Date(), active: boolean = true) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.columnId = columnId;
        this.userId = userId;
        this.active = active;
    };

    static createCard(title: string, description: string = "") {
        return new Card("", title, description);
    }

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

    public get getUserId(): string {
        return this.userId;
    }

    public get isActive(): boolean {
        return this.active;
    }
}