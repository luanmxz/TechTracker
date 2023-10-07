import AuthRepositoryImpl from "../../../external/repository-implementations/AuthRepositoryImpl";
import { SignOutController } from "./SignOutController";
import { SignOutUseCase } from "./SignOutUseCase";

const authRepository = new AuthRepositoryImpl();
const signOutUseCase = new SignOutUseCase(authRepository);
const signOutController = new SignOutController(signOutUseCase);

export { signOutController };
