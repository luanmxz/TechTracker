import { injectable, inject } from "tsyringe";
import UserRepositoryImpl from "../../external/repository-implementations/UserRepositoryImpl";
import { AuthService } from "../auth/AuthService";

@injectable()
export default class UserService {

    constructor(@inject(UserRepositoryImpl) private userRepositoryImpl: UserRepositoryImpl, private authService: AuthService) { }

    async deleteAccount(id: string) {
        await this.authService.signOut().then(() => {
            this.userRepositoryImpl.deleteAccount(id);
        });
    };


}
