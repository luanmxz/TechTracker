import "reflect-metadata";
import { container } from 'tsyringe';
import { AuthController } from '../../controllers/AuthController';
import { AuthService } from '../../services/AuthService';
import AuthRepositoryImpl from "../supabase/supabase-repositories/AuthRepositoryImpl";
import UserController from "../../controllers/UserController";
import UserService from "../../services/UserService";
import UserRepositoryImpl from "../prisma/prisma-repositories/UserRepositoryImpl";
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