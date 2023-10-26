import { Session, User } from "@supabase/supabase-js";
import { ISignInDTO } from "../../useCases/auth/signInUseCase/ISignInDTO";
import { ISignUpDTO } from "../../useCases/auth/signUpUseCase/ISignUpDTO";


export interface IAuthRepository {

    getUserLogged: (jwt?: string) => Promise<User | null>;
    signUp: (user: ISignUpDTO) => Promise<void>;
    signIn: (user: ISignInDTO) => Promise<{ user: User, session: Session }>;
    signOut: () => Promise<void>;

}