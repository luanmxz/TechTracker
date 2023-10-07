import { SignOutUseCase } from "../../auth/signOutUseCase/SignOutUseCase";
import UserRepository from "../UserRepository";

export class DeleteAccountUseCase {

    constructor(
        private userRepository: UserRepository,
        private signOutUseCase: SignOutUseCase
    ){}

    async execute(id: string) {
        await this.signOutUseCase.execute().then(() => {
            this.userRepository.deleteAccount(id);
        });
    };
}