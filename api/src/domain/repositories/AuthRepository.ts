import User from "../entities/User";
import ICreateUser from "../types/ICreateUser";

export default interface AuthRepository {

    signUp: (user: ICreateUser) => Promise<void>;
    signIn: (user: User) => Promise<User>;
    signOut: () => Promise<void>;

}