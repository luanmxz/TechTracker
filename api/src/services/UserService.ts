import { injectable, inject } from "tsyringe";
import { PrismaUserRepository } from "../external/prisma/prisma-repositories/prisma-user-repository";

@injectable()
export default class UserService {
    private prismaUserRepository: PrismaUserRepository;

    constructor(@inject('PrismaUserRepository') prismaUserRepository: PrismaUserRepository) {
        this.prismaUserRepository = prismaUserRepository;
    }


}
