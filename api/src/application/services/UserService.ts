import { injectable, inject } from "tsyringe";
import UserRepositoryImpl from "../../external/repositories-implementations/UserRepositoryImpl";
import { AuthService } from "./AuthService";

@injectable()
export default class UserService {

    constructor(@inject(UserRepositoryImpl) private userRepositoryImpl: UserRepositoryImpl, private authService: AuthService) { }

    async deleteAccount(id: string) {
        await this.authService.signOut().then(() => {
            this.userRepositoryImpl.deleteAccount(id);
        });
    };


}
