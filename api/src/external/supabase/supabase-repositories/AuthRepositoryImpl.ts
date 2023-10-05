import User from "../../../entities/User";
import AuthRepository from "../../../repositories/AuthRepository";
import ICreateUser from "../../../types/ICreateUser";
import supabase from "../supabase";

export default class AuthRepositoryImpl implements AuthRepository {

    constructor() { }

    async signUp(newUser: ICreateUser) {
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


    async signIn(user: User) {

        return user;
    };


    async signOut() {

    };


}