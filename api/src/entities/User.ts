import { canUpdateUserValidate } from "../helpers/validators/CanUpdateUserValidator";
import { validateEmail } from "../helpers/validators/EmailValidator";
import { validateName } from "../helpers/validators/NameValidator";
import { validatePassword } from "../helpers/validators/PasswordValidator";
import { Role } from "./Role.enum";

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

    static createUser(email: string, name: string, password: string): User {
        validateEmail(email);
        validateName(name);
        validatePassword(password);
        return new User("", email, name, password);
    }

    public updateEmail(email: string): void {
        canUpdateUserValidate(this.isBanned, this.isActive);
        validateEmail(email);
        this.email = email;
    }

    public updateName(name: string): void {
        canUpdateUserValidate(this.isBanned, this.isActive);
        validateName(name);
        this.name = name;
    }

    public updatePassword(password: string): void {
        canUpdateUserValidate(this.isBanned, this.isActive);
        validatePassword(password);
        this.password = password;
    }

    public addRole(role: Role) {
        canUpdateUserValidate(this.isBanned, this.isActive);
        this.roles.push(role);
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
    public get getPassword(): string {
        return this.password;
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