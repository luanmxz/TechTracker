import AuthRepositoryImpl from "../../../implementations/AuthRepositoryImpl";
import { IDependencyFactory } from "../../../interfaces/IDependencyFactory";
import { SignOutController } from "./SignOutController";
import { SignOutUseCase } from "./SignOutUseCase";

const authRepository = new AuthRepositoryImpl();
const signOutUseCase = new SignOutUseCase(authRepository);
const signOutController = new SignOutController(signOutUseCase);


export class SignOutDependencyFactory implements IDependencyFactory {

    getInstance() {
        return signOutController;
    }
}

