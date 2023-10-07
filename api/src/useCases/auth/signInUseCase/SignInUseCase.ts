import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import { ISignInDTO } from "./ISignInDTO";

export class SignInUseCase {
    constructor(private authRepository: AuthRepositoryImpl) {}

    execute = async (logingUser: ISignInDTO) => {
        await this.authRepository.signIn(logingUser);
    }
}