import User from "../../domain/entities/User";
import AuthRepositoryImpl from "../../external/supabase/supabase-repositories/AuthRepositoryImpl";
import ICreateUser from "../../domain/types/ICreateUser";
import { injectable, inject } from "tsyringe";

@injectable()
export class AuthService {
    private authRepository: AuthRepositoryImpl;

    constructor(@inject(AuthRepositoryImpl) authRepository: AuthRepositoryImpl) {
        this.authRepository = authRepository;
    }

    signUp = async (user: ICreateUser) => {

        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepository.signUp(newUser);

    };

}
