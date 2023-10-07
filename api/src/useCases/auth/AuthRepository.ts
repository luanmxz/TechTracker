import { ISignInDTO } from "./signInUseCase/ISignInDTO";
import { ISignUpDTO } from "./signUpUseCase/ISignUpDTO";

export default interface AuthRepository {

    signUp: (user: ISignUpDTO) => Promise<void>;
    signIn: (user: ISignInDTO) => Promise<ISignInDTO>;
    signOut: () => Promise<void>;

}