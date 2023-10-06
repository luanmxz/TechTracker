import { Role } from "../../utils/enums/Role";
import validateEmail from "../../utils/validators/EmailValidator";
import validateName from "../../utils/validators/NameValidator";

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
        validateEmail(email);
        validateName(name);
        return new User("", email, name, password);
    }

    public updateEmail(email: string): void {
        validateEmail(email);
        this.email = email;
    }

    public updateName(name: string): void {
        validateName(name);
        this.name = name;
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
    public get getRoles(): Role[] {
        return this.roles;
    }
}