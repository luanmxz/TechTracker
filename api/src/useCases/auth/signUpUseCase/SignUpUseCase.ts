import { ISignUpDTO } from "./ISignUpDTO";

export class SignUpUseCase {


    signUp = async (user: ISignUpDTO) => {
        const newUser = User.createUser(user.email, user.name, user.password);

        await this.authRepository.signUp({ email: newUser.getEmail, name: newUser.getName, password: newUser.getPassword });
    };

}