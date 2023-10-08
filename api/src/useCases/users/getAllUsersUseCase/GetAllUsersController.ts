import { handleErrorResponse } from "../../../helpers/handleErrorResponse";
import { IHttpContextAdapter } from "../../../interfaces/IHttpContextAdapter";
import { IUserDTO } from "../IUserDTO";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
    constructor(private getAllUsersUseCase: GetAllUsersUseCase){}

    async handle(httpContextAdapter: IHttpContextAdapter) {
        try{
            return  await this.getAllUsersUseCase.execute();
        } catch(error: any){
            handleErrorResponse(httpContextAdapter, error);
        }
    }

}