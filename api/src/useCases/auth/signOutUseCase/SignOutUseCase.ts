export class SignOutUseCase {

    signOut = async () => {
        await this.authRepository.signOut();
    }
}