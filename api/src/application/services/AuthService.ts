import User from "../../domain/entities/User";
import AuthRepositoryImpl from "../../external/supabase/supabase-repositories/AuthRepositoryImpl";
import { CreateUserType } from "../../domain/interfaces/CreateUserType";
import { injectable, inject } from "tsyringe";

@injectable()
export class AuthService {
    private authRepository: AuthRepositoryImpl;

    constructor(@inject(AuthRepositoryImpl) authRepository: AuthRepositoryImpl) {
        this.authRepository = authRepository;
    }

    signUp = async (user: CreateUserType) => {

        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepository.signUp(newUser);

    };

}
