import { PrismaClient } from "@prisma/client";
import AuthRepositoryImpl from "../../../implementations/AuthRepositoryImpl";
import UserRepositoryImpl from "../../../implementations/UserRepositoryImpl";
import { SignOutUseCase } from "../../auth/signOutUseCase/SignOutUseCase";
import { DeleteAccountController } from "./DeleteAccountController";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";
import { IDependencyFactory } from "../../../interfaces/IDependencyFactory";

const prismaClient = new PrismaClient();
const userRepository = new UserRepositoryImpl(prismaClient);
const authRepository = new AuthRepositoryImpl();
const signOutUseCase = new SignOutUseCase(authRepository);
const deleteAccountUseCase = new DeleteAccountUseCase(userRepository, signOutUseCase);
const deleteAccountController = new DeleteAccountController(deleteAccountUseCase);

export class DeleteAccountDependencyFactory implements IDependencyFactory {

    getInstance() {
        return deleteAccountController;
    }
}