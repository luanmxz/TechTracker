import { PrismaClient } from "@prisma/client";
import UserRepository from "../../useCases/users/UserRepository";
import { injectable, inject } from "tsyringe";
import { IUser } from "../../useCases/users/IUserDTO";

@injectable()
export default class UserRepositoryImpl implements UserRepository {


    constructor(@inject(PrismaClient) private readonly prisma: PrismaClient) { }

    async get(): Promise<IUser[]> {
        return await this.prisma.user.findMany({
            select: {
                email: true,
                name: true
            }
        });
    };

    async getById(id: string): Promise<IUser> {
        return await this.prisma.user.findUniqueOrThrow({
            select: { email: true, name: true },
            where: { id }
        });
    };

    async deleteAccount(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } })
    };

}