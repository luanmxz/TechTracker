import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../../repositories/UserRepository";
import { User } from "../../../types/User";

export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) { }


    async create(user: User): Promise<void> {
        await this.prisma.user.create({
            data: {
                email: user.email,
                name: user.name
            }
        })
    };

    async get(): Promise<User[]> {

        return await this.prisma.user.findMany({
            select: {
                email: true,
                name: true
            }
        });
    };

    async getById(id: string): Promise<User> {

        return await this.prisma.user.findUniqueOrThrow({
            select: { email: true, name: true },
            where: { id }
        });
    };


    async delete(id: string): Promise<void> {

        await this.prisma.user.delete({ where: { id } })
    };


}