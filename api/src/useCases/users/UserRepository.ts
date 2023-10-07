import { IUser } from "./IUserDTO";

export default interface UserRepository {

    get: () => Promise<IUser[]>;
    getById: (id: string) => Promise<IUser>;
    deleteAccount: (id: string) => Promise<void>;
    //TODO: update: (user: User) => Promise<User>;
}