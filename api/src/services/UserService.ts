import supabase from "../external/supabase/supabase";
import { CreateUser } from "../types/CreateUser";

export class UserService {

    async create(user: CreateUser) {

        const { error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
            options: {
                data: {
                    name: user.name
                }
            }
        });

        if (error) throw error;
    }

}
