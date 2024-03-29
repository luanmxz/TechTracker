import Card from "./Card";

export default class Column {

    private id: string;
    private title: string;
    private cards: Card[];
    private order: number;
    private workspaceId: string;
    private userId: string;
    private createdAt: Date;
    private updatedAt: Date;
    private active: boolean;

    constructor(id: string = "", title: string = "", workspaceId: string = "", userId: string = "", cards: Card[] = [], createdAt: Date = new Date(), updatedAt: Date = new Date(), active: boolean = true, order: number = 0) {
        this.id = id;
        this.title = title;
        this.workspaceId = workspaceId;
        this.userId = userId;
        this.cards = cards;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.active = active;
        this.order = order;
    }

    static createColumn(title: string) {
        return new Column("", title);
    }

    public get getId(): string {
        return this.id;
    };

    public get getTitle(): string {
        return this.title;
    };

    public get getCards(): Card[] {
        return this.cards;
    };

    public get getCreatedAt(): Date {
        return this.createdAt;
    };

    public get getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public get getWorkspaceId(): string {
        return this.workspaceId;
    }

    public get getUserId(): string {
        return this.userId;
    }

    public get isActive(): boolean {
        return this.active;
    }

    public get getOrder(): number {
        return this.order;
    }
}