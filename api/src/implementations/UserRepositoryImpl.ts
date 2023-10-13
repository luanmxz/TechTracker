import { PrismaClient } from "@prisma/client";
import { IUserDTO } from "../useCases/users/IUserDTO";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";

export class UserRepositoryImpl implements IUserRepository {

    constructor(private readonly prisma: PrismaClient) { }

    async get(): Promise<IUserDTO[]> {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true
            }
        }).catch(error => {
            throw new Error(error.message);
        });
    };

    async getById(id: string): Promise<IUserDTO> {
        return await this.prisma.user.findUniqueOrThrow({
            select: { id: true, email: true, name: true },
            where: { id }
        });
    };

    async deleteAccount(uuid: string): Promise<void> {
        await this.prisma.user.delete({ where: { id: uuid } })
    };

}