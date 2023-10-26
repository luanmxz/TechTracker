import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { ISignInDTO } from "./ISignInDTO";

export class SignInUseCase {
    constructor(private authRepository: IAuthRepository) { }

    execute = async (logingUser: ISignInDTO) => {
        return await this.authRepository.signIn(logingUser);
    }
}