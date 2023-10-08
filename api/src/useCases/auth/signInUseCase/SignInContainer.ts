import { AuthRepositoryImpl } from "../../../implementations/AuthRepositoryImpl";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { SignInController } from "./SignInController";
import { SignInUseCase } from "./SignInUseCase";

export class SignInContainer implements IDependencyContainer {

    private static instance: SignInContainer;
    private readonly authRepository: IAuthRepository;
    private readonly signInUseCase: SignInUseCase;
    private readonly signInController: SignInController;

    constructor() {
        this.authRepository = new AuthRepositoryImpl();
        this.signInUseCase = new SignInUseCase(this.authRepository);
        this.signInController = new SignInController(this.signInUseCase);
    }

    public static getInstance(): SignInContainer {
        if (!SignInContainer.instance) {
            SignInContainer.instance = new SignInContainer();
        }
        return SignInContainer.instance;
    }

    getRepositoryInstance(): IAuthRepository {
        return this.authRepository
    }
    getUseCaseInstance(): SignInUseCase {
        return this.signInUseCase;
    }
    getControllerInstance(): SignInController {
        return this.signInController;
    }
}