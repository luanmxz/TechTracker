import { PrismaClient } from "@prisma/client";
import { IDependencyContainer } from "../../../interfaces/IDependencyContainer";
import { ICardRepository } from "../../../interfaces/repositories/ICardRepository";
import { CardRepositoryImpl } from "../../../implementations/CardRepositoryImpl";
import { CreateCardUseCase } from "./CreateCardUseCase";
import { CreateCardController } from "./CreateCardController";

export class CreateCardContainer implements IDependencyContainer {
    private static instance: CreateCardContainer;
    private prismaClient: PrismaClient;
    private cardRepository: ICardRepository;
    private createCardUseCase: CreateCardUseCase;
    private createCardController: CreateCardController;

    private constructor() {
        this.prismaClient = new PrismaClient();
        this.cardRepository = new CardRepositoryImpl(this.prismaClient);
        this.createCardUseCase = new CreateCardUseCase(this.cardRepository);
        this.createCardController = new CreateCardController(this.createCardUseCase);
    }

    public static getInstance(): CreateCardContainer {
        if (!CreateCardContainer.instance) {
            CreateCardContainer.instance = new CreateCardContainer();
        }
        return CreateCardContainer.instance;
    }

    getRepositoryInstance(): ICardRepository {
        return this.cardRepository;
    }

    getUseCaseInstance(): CreateCardUseCase {
        return this.createCardUseCase;
    }

    getControllerInstance(): CreateCardController {
        return this.createCardController;
    }

}