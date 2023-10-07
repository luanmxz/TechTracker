import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import UserRepositoryImpl from "../../../external/repository-implementations/UserRepositoryImpl";
import { SignOutUseCase } from "../../auth/signOutUseCase/SignOutUseCase";
import { DeleteAccountController } from "./DeleteAccountController";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";

const prismaClient = new PrismaClient();
const userRepository = new UserRepositoryImpl(prismaClient);
const authRepository = new AuthRepositoryImpl();
const signOutUseCase = new SignOutUseCase(authRepository);
const deleteAccountUseCase = new DeleteAccountUseCase(userRepository, signOutUseCase);
const deleteAccountController = new DeleteAccountController(deleteAccountUseCase);

export class DeleteAccountDependencyFactory {

    getInstance(){
        return deleteAccountController;
    }
}