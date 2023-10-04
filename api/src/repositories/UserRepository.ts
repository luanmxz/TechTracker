import User from "../entities/User";

export default interface UserRepository {

    get: () => Promise<User[]>;
    getById: (id: string) => Promise<User>;
    delete: (id: string) => Promise<void>;
    //TODO: update: (user: User) => Promise<User>;
}