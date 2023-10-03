import { User } from "../types/User";

export interface UserRepository {
    create(user: User): Promise<void>;
    get(): Promise<User>;
    getById(id: string): Promise<User>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;

}