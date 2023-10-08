import { AuthRepositoryImpl } from "../../../implementations/AuthRepositoryImpl";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { SignOutController } from "./SignOutController";
import { SignOutUseCase } from "./SignOutUseCase";

export class SignOutContainer implements IDependencyContainer {

    private static instance: SignOutContainer;
    private readonly authRepository: IAuthRepository;
    private readonly signOutUseCase: SignOutUseCase;
    private readonly signOutController: SignOutController;

    constructor() {
        this.authRepository = new AuthRepositoryImpl();
        this.signOutUseCase = new SignOutUseCase(this.authRepository);
        this.signOutController = new SignOutController(this.signOutUseCase);
    }


    public static getInstance(): SignOutContainer {
        if (!SignOutContainer.instance) {
            SignOutContainer.instance = new SignOutContainer();
        }
        return SignOutContainer.instance;
    }

    getRepositoryInstance(): IAuthRepository {
        return this.authRepository;
    }
    getUseCaseInstance(): SignOutUseCase {
        return this.signOutUseCase;
    }
    getControllerInstance(): SignOutController {
        return this.signOutController;
    }
}

