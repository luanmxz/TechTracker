import { injectable, inject } from "tsyringe";
import UserRepositoryImpl from "../../external/prisma/prisma-repositories/UserRepositoryImpl";

@injectable()
export default class UserService {

    private userRepository: UserRepositoryImpl;

    constructor(@inject(UserRepositoryImpl) userRepositoryImpl: UserRepositoryImpl) {
        this.userRepository = userRepositoryImpl;
    }


}
