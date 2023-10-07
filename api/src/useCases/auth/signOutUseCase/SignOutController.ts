export class SignOutController {
    constructor(@inject(AuthService) authService: AuthService) {
        this.authService = authService;
    }


    signOut = async (request: FastifyRequest, response: FastifyReply) => {

        try {
            await this.authService.signOut();
        } catch (error: any) {
            response.status(error.statusCode ?? 500).send(error.statusCode ? error.toJSON() : error);
        }
    }
}