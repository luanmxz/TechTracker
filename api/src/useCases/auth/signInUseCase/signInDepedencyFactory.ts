import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import { IDependencyFactory } from "../../../interfaces/IDependencyFactory";
import { SignInController } from "./SignInController";
import { SignInUseCase } from "./SignInUseCase";

const authRepository = new AuthRepositoryImpl();
const signInUseCase = new SignInUseCase(authRepository);
const signInController = new SignInController(signInUseCase);

export class SignInDependencyFactory implements IDependencyFactory {

    getInstance() {
        return signInController;
    }
}