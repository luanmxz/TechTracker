import User from "../../../entities/User";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { ISignUpDTO } from "./ISignUpDTO";

export class SignUpUseCase {
    constructor(private authRepository: IAuthRepository) { }


    execute = async (user: ISignUpDTO) => {
        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepository.signUp({ email: newUser.getEmail, name: newUser.getName, password: newUser.getPassword });
    };

}