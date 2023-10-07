import { ISignUpDTO } from "./ISignUpDTO";
import { SignUpUseCase } from "./SignUpUseCase";

export class SignUpController {
    constructor(private  signUpUseCase: SignUpUseCase) {}


    execute = async (request: FastifyRequest, response: FastifyReply) => {

        const { email, password, name } = request.body as ISignUpDTO;

        try {
            await this.signUpUseCase.execute({ email, password, name });
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    };
}