import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import { IDependencyFactory } from "../../IDependencyFactory";
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