import { AuthRepositoryImpl } from "../../../implementations/AuthRepositoryImpl";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { SignUpController } from "./SignUpController";
import { SignUpUseCase } from "./SignUpUseCase";

export class SignUpContainer implements IDependencyContainer {

    private static instance: SignUpContainer;
    private readonly authRepository: IAuthRepository;
    private readonly signUpUseCase: SignUpUseCase;
    private readonly signUpController: SignUpController;

    constructor() {
        this.authRepository = new AuthRepositoryImpl();
        this.signUpUseCase = new SignUpUseCase(this.authRepository);
        this.signUpController = new SignUpController(this.signUpUseCase);
    }

    public static getInstance(): SignUpContainer {
        if (!SignUpContainer.instance) {
            SignUpContainer.instance = new SignUpContainer();
        }
        return SignUpContainer.instance;
    }

    public getRepositoryInstance(): IAuthRepository {
        return this.authRepository;
    }

    public getUseCaseInstance(): SignUpUseCase {
        return this.signUpUseCase;
    }

    public getControllerInstance(): SignUpController {
        return this.signUpController;
    }
}