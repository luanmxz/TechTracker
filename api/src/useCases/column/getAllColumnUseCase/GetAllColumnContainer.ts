import { PrismaClient } from "@prisma/client";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { IColumnRepository } from "../../../interfaces/repositories/IColumnRepository";
import GetAllColumnUseCase from "./GetAllColumnUseCase";
import GetAllColumnController from "./GetAllColumnController";
import { ColumnRepositoryImpl } from "../../../implementations/ColumnRepositoryImpl";

export class GetAllColumnContainer implements IDependencyContainer {
    private static instance: GetAllColumnContainer;
    private prismaClient: PrismaClient;
    private columnRepository: IColumnRepository;
    private getAllColumnUseCase: GetAllColumnUseCase;
    private getAllColumnController: GetAllColumnController;

    constructor() {
        this.prismaClient = new PrismaClient();
        this.columnRepository = new ColumnRepositoryImpl(this.prismaClient);
        this.getAllColumnUseCase = new GetAllColumnUseCase(this.columnRepository);
        this.getAllColumnController = new GetAllColumnController(this.getAllColumnUseCase);
    }

    getRepositoryInstance(): GetAllColumnContainer {
        if (!GetAllColumnContainer.instance) {
            GetAllColumnContainer.instance = new GetAllColumnContainer();
        }

        return GetAllColumnContainer.instance;
    }
    getUseCaseInstance(): GetAllColumnUseCase {
        return this.getAllColumnUseCase;
    }
    getControllerInstance(): GetAllColumnController {
        return this.getAllColumnController;
    }
}