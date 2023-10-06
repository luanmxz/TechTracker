import User from "../entities/User";
import { ICreateUser } from "../interfaces/ICreateUser";
import { ILogingUser } from "../interfaces/ILogingUser";

export default interface AuthRepository {

    signUp: (user: ICreateUser) => Promise<void>;
    signIn: (user: ILogingUser) => Promise<ILogingUser>;
    signOut: () => Promise<void>;

}