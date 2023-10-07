import { IUserDTO } from "./IUserDTO";

export default interface UserRepository {

    get: () => Promise<IUserDTO[]>;
    getById: (id: string) => Promise<IUserDTO>;
    deleteAccount: (id: string) => Promise<void>;
    //TODO: update: (user: User) => Promise<User>;
}