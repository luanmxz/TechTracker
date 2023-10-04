import User from "../entities/User";
import AuthRepositoryImpl from "../external/supabase/supabase-repositories/AuthRepositoryImpl";
import ICreateUser from "../types/ICreateUser";
import { injectable, inject } from "tsyringe";

@injectable()
export class UserService {
    private authRepositoryImpl: AuthRepositoryImpl;

    constructor(@inject('AuthRepositoryImpl') authRepositoryImpl: AuthRepositoryImpl) {
        this.authRepositoryImpl = authRepositoryImpl;
    }

    signUp = async (user: ICreateUser) => {

        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepositoryImpl.signUp(newUser);

    };

}
