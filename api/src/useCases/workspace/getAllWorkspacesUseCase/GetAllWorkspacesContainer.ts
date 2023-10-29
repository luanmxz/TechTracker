import { PrismaClient } from "@prisma/client";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IWorkspaceRepository } from "../../../interfaces/repositories/IWorkspaceRepository";
import { WorkspaceRepositoryImpl } from "../../../implementations/WorkspaceRepositoryImpl";
import { GetAllWorkspacesUseCase } from "./GetAllWorkspacesUseCase";
import { GetAllWorkspacesController } from "./GetAllWorkspacesController";


export class GetAllWorkspacesContainer implements IDependencyContainer {
    private static instance: GetAllWorkspacesContainer;
    private prismaClient: PrismaClient;
    private workspaceRepository: IWorkspaceRepository;
    private getAllWorkspacesUseCase: GetAllWorkspacesUseCase;
    private getAllWorkspacesController: GetAllWorkspacesController;

    private constructor() {
        this.prismaClient = new PrismaClient();
        this.workspaceRepository = new WorkspaceRepositoryImpl(this.prismaClient);
        this.getAllWorkspacesUseCase = new GetAllWorkspacesUseCase(this.workspaceRepository);
        this.getAllWorkspacesController = new GetAllWorkspacesController(this.getAllWorkspacesUseCase);
    }

    public static getInstance(): GetAllWorkspacesContainer {
        if (!GetAllWorkspacesContainer.instance) {
            GetAllWorkspacesContainer.instance = new GetAllWorkspacesContainer();
        }
        return GetAllWorkspacesContainer.instance;
    }

    getRepositoryInstance(): IWorkspaceRepository {
        return this.workspaceRepository;
    }

    getUseCaseInstance(): GetAllWorkspacesUseCase {
        return this.getAllWorkspacesUseCase;
    }

    getControllerInstance(): GetAllWorkspacesController {
        return this.getAllWorkspacesController;
    }

}