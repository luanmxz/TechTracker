import IUserRepository from "../../../interfaces/repositories/IUserRepository";
import { SignOutUseCase } from "../../auth/signOutUseCase/SignOutUseCase";

export class DeleteAccountUseCase {

    constructor(
        private userRepository: IUserRepository,
        private signOutUseCase: SignOutUseCase
    ) { }

    async execute(id: string) {
        await this.signOutUseCase.execute().then(() => {
            this.userRepository.deleteAccount(id);
        });
    };
}