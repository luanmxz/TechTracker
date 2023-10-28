import { PrismaClient } from "@prisma/client";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IWorkspaceRepository } from "../../../interfaces/repositories/IWorkspaceRepository";
import { WorkspaceRepositoryImpl } from "../../../implementations/WorkspaceRepositoryImpl";
import { CreateWorkspaceUseCase } from "./createWorkspaceUseCase";
import { CreateWorkspaceController } from "./createWorkspaceController";

export class CreateWorkspaceContainer implements IDependencyContainer {
    private static instance: CreateWorkspaceContainer;
    private prismaClient: PrismaClient;
    private workspaceRepository: IWorkspaceRepository;
    private createWorkspaceUseCase: CreateWorkspaceUseCase;
    private createWorkspaceController: CreateWorkspaceController;

    private constructor() {
        this.prismaClient = new PrismaClient();
        this.workspaceRepository = new WorkspaceRepositoryImpl(this.prismaClient);
        this.createWorkspaceUseCase = new CreateWorkspaceUseCase(this.workspaceRepository);
        this.createWorkspaceController = new CreateWorkspaceController(this.createWorkspaceUseCase);
    }

    public static getInstance(): CreateWorkspaceContainer {
        if (!CreateWorkspaceContainer.instance) {
            CreateWorkspaceContainer.instance = new CreateWorkspaceContainer();
        }
        return CreateWorkspaceContainer.instance;
    }

    getRepositoryInstance(): IWorkspaceRepository {
        return this.workspaceRepository;
    }

    getUseCaseInstance(): CreateWorkspaceUseCase {
        return this.createWorkspaceUseCase;
    }

    getControllerInstance(): CreateWorkspaceController {
        return this.createWorkspaceController;
    }

}