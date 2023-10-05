import { injectable, inject } from "tsyringe";
import UserService from "../services/UserService";


@injectable()
export default class UserController {
    private userService: UserService;

    constructor(@inject(UserService) userService: UserService) {
        this.userService = userService;
    }

    // TODO: user features
    do = async () => { }

}