import User from "../../domain/entities/User";
import AuthRepository from "../../domain/repositories/AuthRepository";
import { ICreateUser } from "../../domain/interfaces/ICreateUser";
import supabase from "../supabase/supabase";
import { ILogingUser } from "../../domain/interfaces/ILogingUser";

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


    async signIn(user: ILogingUser) {
        const { data, error } = await supabase.auth.signInWithPassword(user);

        if (error) throw error;

        return user;
    };


    async signOut() {
        const { error } = await supabase.auth.signOut({ scope: 'global' });

        if (error) throw error;
    };


}