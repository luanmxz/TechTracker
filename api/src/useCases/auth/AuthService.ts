import User from "../../entities/User";
import AuthRepositoryImpl from "../../external/repository-implementations/AuthRepositoryImpl";
import { ICreateUser } from "./ICreateUserDTO";
import { injectable, inject } from "tsyringe";
import { ILogingUser } from "./ILogingUserDTO";

@injectable()
export class AuthService {

    private authRepository: AuthRepositoryImpl;

    constructor(@inject(AuthRepositoryImpl) authRepository: AuthRepositoryImpl) {
        this.authRepository = authRepository;
    }

    signOut = async () => {
        await this.authRepository.signOut();
    }

    signIn = async (logingUser: ILogingUser) => {
        await this.authRepository.signIn(logingUser);
    }

}
