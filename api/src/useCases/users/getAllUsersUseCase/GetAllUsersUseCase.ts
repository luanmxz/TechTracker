import { IUserRepository } from "../../../interfaces/repositories/IUserRepository";
import { IUserDTO } from "../IUserDTO";

export class GetAllUsersUseCase {
    constructor(private usersRepository: IUserRepository) { }

    execute(): Promise<IUserDTO[]> {
        return this.usersRepository.get();
    }
}