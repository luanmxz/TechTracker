import { ISignInDTO } from "../../useCases/auth/signInUseCase/ISignInDTO";
import { ISignUpDTO } from "../../useCases/auth/signUpUseCase/ISignUpDTO";


export interface IAuthRepository {

    signUp: (user: ISignUpDTO) => Promise<void>;
    signIn: (user: ISignInDTO) => Promise<ISignInDTO>;
    signOut: () => Promise<void>;

}