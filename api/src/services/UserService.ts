import { UserRepository } from "../repositories/UserRepository";
import { User } from "../types/User";

export class UserService implements UserRepository {

    create(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    get(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }



}