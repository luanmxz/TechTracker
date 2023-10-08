import { SignOutUseCase } from "../../auth/signOutUseCase/SignOutUseCase";
import { DeleteAccountController } from "./DeleteAccountController";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";
import { IUserRepository } from "../../../interfaces/repositories/IUserRepository";
import { UserRepositoryImpl } from "../../../implementations/UserRepositoryImpl";
import { PrismaClient } from "@prisma/client";
import { AuthRepositoryImpl } from "../../../implementations/AuthRepositoryImpl";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";

export class DeleteAccountContainer implements IDependencyContainer {

    private static instance: DeleteAccountContainer;
    private readonly prismaClient: PrismaClient;
    private readonly authRepository: IAuthRepository;
    private readonly signOutUseCase: SignOutUseCase;
    private readonly userRepository: IUserRepository;
    private readonly deleteAccountUseCase: DeleteAccountUseCase;
    private readonly deleteAccountController: DeleteAccountController;

    private constructor() {
        this.prismaClient = new PrismaClient();
        this.authRepository = new AuthRepositoryImpl();
        this.signOutUseCase = new SignOutUseCase(this.authRepository);
        this.userRepository = new UserRepositoryImpl(this.prismaClient);
        this.deleteAccountUseCase = new DeleteAccountUseCase(this.userRepository, this.signOutUseCase);
        this.deleteAccountController = new DeleteAccountController(this.deleteAccountUseCase);
    }

    public static getInstance(): DeleteAccountContainer {
        if (!DeleteAccountContainer.instance) {
            DeleteAccountContainer.instance = new DeleteAccountContainer();
        }
        return DeleteAccountContainer.instance;
    }

    getRepositoryInstance(): IUserRepository {
        return this.userRepository;
    }
    getUseCaseInstance(): DeleteAccountUseCase {
        return this.deleteAccountUseCase;
    }
    getControllerInstance(): DeleteAccountController {
        return this.deleteAccountController;
    }

}