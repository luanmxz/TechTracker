import { AuthRepositoryImpl } from "../../../implementations/AuthRepositoryImpl";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { GetUserLoggedController } from "./GetUserLoggedController";
import GetUserLoggedUseCase from "./GetUserLoggedUseCase";


export class GetUserLoggedContainer implements IDependencyContainer {

    private static instance: GetUserLoggedContainer;
    private readonly authRepository: IAuthRepository;
    private readonly getUserLoggedUseCase: GetUserLoggedUseCase;
    private readonly getUserLoggedController: GetUserLoggedController;

    private constructor() {
        this.authRepository = new AuthRepositoryImpl();
        this.getUserLoggedUseCase = new GetUserLoggedUseCase(this.authRepository);
        this.getUserLoggedController = new GetUserLoggedController(this.getUserLoggedUseCase);
    }

    public static getInstance(): GetUserLoggedContainer {
        if (!GetUserLoggedContainer.instance) {
            GetUserLoggedContainer.instance = new GetUserLoggedContainer();
        }
        return GetUserLoggedContainer.instance;
    }

    getRepositoryInstance(): IAuthRepository {
        return this.authRepository;
    }
    getUseCaseInstance(): GetUserLoggedUseCase {
        return this.getUserLoggedUseCase;
    }
    getControllerInstance(): GetUserLoggedController {
        return this.getUserLoggedController;
    }

}