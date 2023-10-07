export class SignInController {
    constructor(@inject(AuthService) authService: AuthService) {
        this.authService = authService;
    }


    signIn = async (request: FastifyRequest, response: FastifyReply) => {

        const logingUser = request.body as ILogingUser;

        try {
            await this.authService.signIn(logingUser);
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    }
}