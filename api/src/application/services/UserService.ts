import { injectable, inject } from "tsyringe";
import UserRepositoryImpl from "../../external/repositories-implementations/UserRepositoryImpl";

@injectable()
export default class UserService {

    private userRepository: UserRepositoryImpl;

    constructor(@inject(UserRepositoryImpl) userRepositoryImpl: UserRepositoryImpl) {
        this.userRepository = userRepositoryImpl;
    }


}
