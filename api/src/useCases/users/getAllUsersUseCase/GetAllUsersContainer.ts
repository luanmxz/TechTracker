import { PrismaClient } from "@prisma/client";
import { UserRepositoryImpl } from "../../../implementations/UserRepositoryImpl";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IUserRepository } from "../../../interfaces/repositories/IUserRepository";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersContainer implements IDependencyContainer {
    private static instance: GetAllUsersContainer;
    private prismaClient: PrismaClient;
    private usersRepository: IUserRepository;
    private getAllUsersUseCase: GetAllUsersUseCase;
    private getAllUsersController: GetAllUsersController;

    private constructor() {
        this.prismaClient = new PrismaClient();
        this.usersRepository = new UserRepositoryImpl(this.prismaClient);
        this.getAllUsersUseCase = new GetAllUsersUseCase(this.usersRepository);
        this.getAllUsersController = new GetAllUsersController(this.getAllUsersUseCase);
    }

    public static getInstance(): GetAllUsersContainer {
        if (!GetAllUsersContainer.instance) {
            GetAllUsersContainer.instance = new GetAllUsersContainer();
        }
        return GetAllUsersContainer.instance;
    }

    getRepositoryInstance(): IUserRepository {
        return this.usersRepository;
    }
    getUseCaseInstance(): GetAllUsersUseCase {
        return this.getAllUsersUseCase;
    }
    getControllerInstance(): GetAllUsersController {
        return this.getAllUsersController;
    }
}