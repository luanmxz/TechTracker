import User from "../../../entities/User";
import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import { ISignUpDTO } from "./ISignUpDTO";

export class SignUpUseCase {
    constructor(private authRepository: AuthRepositoryImpl) {}


    execute = async (user: ISignUpDTO) => {
        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepository.signUp({ email: newUser.getEmail, name: newUser.getName, password: newUser.getPassword });
    };

}