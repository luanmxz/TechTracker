import { IUserDTO } from "../../useCases/users/IUserDTO";


export interface IUserRepository {

    get: () => Promise<IUserDTO[]>;
    getById: (id: string) => Promise<IUserDTO>;
    deleteAccount: (id: string) => Promise<void>;
    //TODO: update: (user: User) => Promise<User>;
}