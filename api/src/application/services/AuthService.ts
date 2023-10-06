import User from "../../domain/entities/User";
import AuthRepositoryImpl from "../../external/repositories-implementations/AuthRepositoryImpl";
import { ICreateUser } from "../../domain/interfaces/ICreateUser";
import { injectable, inject } from "tsyringe";
import { ILogingUser } from "../../domain/interfaces/ILogingUser";

@injectable()
export class AuthService {

    private authRepository: AuthRepositoryImpl;

    constructor(@inject(AuthRepositoryImpl) authRepository: AuthRepositoryImpl) {
        this.authRepository = authRepository;
    }

    signUp = async (user: ICreateUser) => {
        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepository.signUp({ email: newUser.getEmail, name: newUser.getName, password: newUser.getPassword });
    };

    signOut = async () => {
        await this.authRepository.signOut();
    }

    signIn = async (logingUser: ILogingUser) => {
        await this.authRepository.signIn(logingUser);
    }

}
