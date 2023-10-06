import "reflect-metadata";
import { container } from 'tsyringe';
import { AuthController } from '../../application/controllers/AuthController';
import { AuthService } from '../../application/services/AuthService';
import AuthRepositoryImpl from "../repositories-implementations/AuthRepositoryImpl";
import UserController from "../../application/controllers/UserController";
import UserService from "../../application/services/UserService";
import UserRepositoryImpl from "../repositories-implementations/UserRepositoryImpl";
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