import AuthRepositoryImpl from "../../../implementations/AuthRepositoryImpl";
import { IDependencyFactory } from "../../../interfaces/IDependencyFactory";
import { SignUpController } from "./SignUpController";
import { SignUpUseCase } from "./SignUpUseCase";

const authRepository = new AuthRepositoryImpl();
const signUpUseCase = new SignUpUseCase(authRepository);
const signUpController = new SignUpController(signUpUseCase);

export class SignUpDependencyFactory implements IDependencyFactory {

    getInstance() {
        return signUpController;
    }

}