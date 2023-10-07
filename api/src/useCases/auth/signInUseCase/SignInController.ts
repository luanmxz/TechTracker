import { ISignInDTO } from "./ISignInDTO";
import { SignInUseCase } from "./SignInUseCase";

export class SignInController {
    constructor(private signInUseCase: SignInUseCase) {}


    signIn = async (request: FastifyRequest, response: FastifyReply) => {

        const logingUser = request.body as ISignInDTO;

        try {
            await this.signInUseCase.execute(logingUser);
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    }
}