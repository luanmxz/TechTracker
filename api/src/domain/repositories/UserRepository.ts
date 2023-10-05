import { IUser } from "../types/IUser";

export default interface UserRepository {

    get: () => Promise<IUser[]>;
    getById: (id: string) => Promise<IUser>;
    delete: (id: string) => Promise<void>;
    //TODO: update: (user: User) => Promise<User>;
}