export class SignInUseCase {

    signIn = async (logingUser: ILogingUser) => {
        await this.authRepository.signIn(logingUser);
    }
}