import { User } from "@supabase/supabase-js";
import { ErrorResponseHandler } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import GetUserLoggedUseCase from "./GetUserLoggedUseCase";

export class GetUserLoggedController {
    constructor(private getUserLoggedUseCase: GetUserLoggedUseCase) { }

    handler = async (httpContextAdapter: IHttpContextAdapter) => {
        try {
            const user: User | null = await this.getUserLoggedUseCase.execute();

            httpContextAdapter.send(user);
        } catch (error: any) {
            new ErrorResponseHandler(httpContextAdapter, error).handle();
        }
    }
}