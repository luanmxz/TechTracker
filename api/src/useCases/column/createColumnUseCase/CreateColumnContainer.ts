import { PrismaClient } from "@prisma/client";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IColumnRepository } from "../../../interfaces/repositories/IColumnRepository";
import { CreateColumnController } from "./CreateColumnController";
import { CreateColumnUseCase } from "./CreateColumnUseCase";
import { ColumnRepositoryImpl } from "../../../implementations/ColumnRepositoryImpl";

export class CreateColumnContainer implements IDependencyContainer {
    private static instance: CreateColumnContainer;
    private prismaClient: PrismaClient;
    private columnRepository: IColumnRepository;
    private createColumnUseCase: CreateColumnUseCase;
    private createColumnController: CreateColumnController;

    private constructor() {
        this.prismaClient = new PrismaClient();
        this.columnRepository = new ColumnRepositoryImpl(this.prismaClient);
        this.createColumnUseCase = new CreateColumnUseCase(this.columnRepository);
        this.createColumnController = new CreateColumnController(this.createColumnUseCase);
    }

    public static getInstance(): CreateColumnContainer {
        if (!CreateColumnContainer.instance) {
            CreateColumnContainer.instance = new CreateColumnContainer();
        }
        return CreateColumnContainer.instance;
    }

    getRepositoryInstance(): IColumnRepository {
        return this.columnRepository;
    }

    getUseCaseInstance(): CreateColumnUseCase {
        return this.createColumnUseCase;
    }

    getControllerInstance(): CreateColumnController {
        return this.createColumnController;
    }

}