import { Role } from "../utils/enums/Role";

export class User {

    private readonly UUID: string;
    private email: string;
    private name: string;
    private roles: Role[];
    private createdAt: Date;
    private updatedAt: Date;
    private active: boolean;
    private banned: boolean;

    constructor(UUID: string, email: string, name: string, roles: Role[], createdAt: Date, updatedAt: Date, active: boolean, banned: boolean) {
        this.UUID = UUID;
        this.email = email;
        this.name = name;
        this.roles = roles;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.active = active;
        this.banned = banned;
    }



}