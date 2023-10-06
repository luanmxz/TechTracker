import { Role } from "../../utils/enums/Role";

export default class User {

    private readonly UUID: string;
    private email: string;
    private name: string;
    private password: string;
    private roles: Role[];
    private createdAt: Date;
    private updatedAt: Date;
    private active: boolean;
    private banned: boolean;

    constructor(UUID: string = "", email: string = "", name: string = "", password: string = "", roles: Role[] = [],
        createdAt: Date = new Date(), updatedAt: Date = new Date(), active: boolean = true, banned: boolean = false) {
        this.UUID = UUID;
        this.email = email;
        this.name = name;
        this.password = password;
        this.roles = roles;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.active = active;
        this.banned = banned;
    }

    static createUser(email: string = "", name: string = "", password: string = "") {
        this.validaEmail(email);
        return new User("", email, name, password);
    }

    private static validaEmail(email: string) {
        emailRegex.test(email) ? "" : new Error('Invalid email');
    }

    public get getUUID(): string {
        return this.UUID;
    }

    public get getEmail(): string {
        return this.email;
    }
    public get getName(): string {
        return this.name;
    }
    public get getCreatedAt(): Date {
        return this.createdAt;
    }
    public get getUpdatedAt(): Date {
        return this.updatedAt;
    }
    public get isActive(): boolean {
        return this.active;
    }
    public get isBanned(): boolean {
        return this.banned;
    }
}

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
