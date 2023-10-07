import User from "../../entities/User";
import { ICreateUser } from "./ICreateUserDTO";
import { ILogingUser } from "./signInUseCase/ISignInDTO";

export default interface AuthRepository {

    signUp: (user: ICreateUser) => Promise<void>;
    signIn: (user: ILogingUser) => Promise<ILogingUser>;
    signOut: () => Promise<void>;

}