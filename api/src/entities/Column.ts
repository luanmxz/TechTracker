import Card from "./Card";

export default class Column {

    private id: string;
    private title: string;
    private cards: Card[];
    private createdAt: Date;
    private updatedAt: Date;

    constructor(id: string = "", title: string = "", cards: Card[] = [], createdAt: Date = new Date(), updatedAt: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.cards = cards;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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

}