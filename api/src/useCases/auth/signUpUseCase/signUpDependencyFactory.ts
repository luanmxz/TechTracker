import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import { SignUpController } from "./SignUpController";
import { SignUpUseCase } from "./SignUpUseCase";

const authRepository = new AuthRepositoryImpl();
const signUpUseCase = new SignUpUseCase(authRepository);
const signUpController = new SignUpController(signUpUseCase);

export default class signUpDependencyFactory {

    getInstance(){
        return signUpController;
    }

}