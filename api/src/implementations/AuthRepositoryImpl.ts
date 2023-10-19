import { supabase } from "../external/supabase/supabase";
import { ISignInDTO } from "../useCases/auth/signInUseCase/ISignInDTO";
import { ISignUpDTO } from "../useCases/auth/signUpUseCase/ISignUpDTO";
import { IAuthRepository } from "../interfaces/repositories/IAuthRepository";
import { User } from "@supabase/supabase-js";


export class AuthRepositoryImpl implements IAuthRepository {

    constructor() { }

    async signUp(newUser: ISignUpDTO) {
        const { error } = await supabase.auth.signUp({
            email: newUser.email,
            password: newUser.password,
            options: {
                data: {
                    name: newUser.name
                }
            }
        });

        if (error) throw error;
    };


    async signIn(user: ISignInDTO) {
        const { data, error } = await supabase.auth.signInWithPassword(user);

        if (error) throw error;

        return user;
    };


    async signOut() {
        const { error } = await supabase.auth.signOut({ scope: 'global' });

        if (error) throw error;
    };

    async getUserLogged(): Promise<User | null> {

        const { data } = await supabase.auth.getUser();

        return data.user;
    }
}