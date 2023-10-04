import { Role } from "../utils/enums/Role";

export default class User {

    public readonly UUID: string;
    public email: string;
    public name: string;
    public password: string;
    public roles: Role[];
    public createdAt: Date;
    public updatedAt: Date;
    public active: boolean;
    public banned: boolean;




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

        return new User("", email, name, password);
    }

    private validaEmail() {
        //TODO: validar email
    }

}