import { User } from "@supabase/supabase-js";
import { IAuthRepository } from "../../../interfaces/repositories/IAuthRepository";

export default class GetUserLoggedUseCase {
    constructor(private authRepository: IAuthRepository) { }

    async execute(): Promise<User | null> {
        return await this.authRepository.getUserLogged();
    }

}