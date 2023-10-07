export class SignUpController {
    constructor(@inject(AuthService) authService: AuthService) {
        this.authService = authService;
    }


    signUp = async (request: FastifyRequest, response: FastifyReply) => {

        const { email, password, name } = request.body as ISignUpDTO;

        try {
            await this.authService.signUp({ email, password, name });
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    };
}