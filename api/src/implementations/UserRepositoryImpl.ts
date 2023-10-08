import { PrismaClient } from "@prisma/client";
import { IUserDTO } from "../useCases/users/IUserDTO";
import IUserRepository from "../interfaces/repositories/IUserRepository";

export default class UserRepositoryImpl implements IUserRepository {

    constructor(private readonly prisma: PrismaClient) { }

    async get(): Promise<IUserDTO[]> {
        return await this.prisma.user.findMany({
            select: {
                email: true,
                name: true
            }
        });
    };

    async getById(id: string): Promise<IUserDTO> {
        return await this.prisma.user.findUniqueOrThrow({
            select: { email: true, name: true },
            where: { id }
        });
    };

    async deleteAccount(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } })
    };

}