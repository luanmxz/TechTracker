import { Role } from "../../utils/enums/Role";
import { emailRegex } from "../../utils/helpers/regexEmail";

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
        this.validateEmail(email);
        this.validateName(name);
        return new User("", email, name, password);
    }

    public updateEmail(email: string): void {
        User.validateEmail(email);
        this.email = email;
    }

    private static validateEmail(email: string): void {
        if (!emailRegex.test(email)) throw new Error('Invalid email');
    }

    private static validateName(name: string): void {
        if (name.length === 0) throw new Error('Você deve inserir um nome!');
        if (name.length < 3) throw new Error('O nome deve possuir no mínimo 3 caracteres!');
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