import "reflect-metadata";
import { container } from 'tsyringe';
import { AuthController } from '../../useCases/auth/AuthController';
import { AuthService } from '../../useCases/auth/AuthService';
import AuthRepositoryImpl from "../repository-implementations/AuthRepositoryImpl";
import UserController from "../../application/controllers/UserController";
import UserService from "../../useCases/users/UserService";
import UserRepositoryImpl from "../repository-implementations/UserRepositoryImpl";
import { PrismaClient } from "@prisma/client";


//AUTH
container.register<AuthController>(AuthController, {
    useClass: AuthController,
});

container.register<AuthService>(AuthService, {
    useClass: AuthService,
});

container.register<AuthRepositoryImpl>(AuthRepositoryImpl, {
    useClass: AuthRepositoryImpl
});

//USER
container.register<UserController>(UserController, {
    useClass: UserController,
});

container.register<UserService>(UserService, {
    useClass: UserService,
});

container.register<UserRepositoryImpl>(UserRepositoryImpl, {
    useClass: UserRepositoryImpl
});


container.register<PrismaClient>(PrismaClient, {
    useValue: new PrismaClient()
});