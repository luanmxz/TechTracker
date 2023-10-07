import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";

export class SignOutUseCase {
    constructor(private authRepository: AuthRepositoryImpl) {}

    execute = async () => {
        await this.authRepository.signOut();
    }
}