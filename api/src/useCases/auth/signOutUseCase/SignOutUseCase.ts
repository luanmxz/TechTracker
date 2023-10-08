import IAuthRepository from "../../../interfaces/repositories/IAuthRepository";

export class SignOutUseCase {
    constructor(private authRepository: IAuthRepository) { }

    execute = async () => {
        await this.authRepository.signOut();
    }
}