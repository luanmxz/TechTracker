import User from "../../entities/User";
import AuthRepositoryImpl from "../../external/repository-implementations/AuthRepositoryImpl";
import { ICreateUser } from "./ICreateUserDTO";
import { injectable, inject } from "tsyringe";
import { ILogingUser } from "./signInUseCase/ISignInDTO";

@injectable()
export class AuthService {

    private authRepository: AuthRepositoryImpl;

    constructor(@inject(AuthRepositoryImpl) authRepository: AuthRepositoryImpl) {
        this.authRepository = authRepository;
    }

}
