import 'reflect-metadata';
import { container } from 'tsyringe';
import { UserController } from '../../controllers/UserController';
import { UserService } from '../../services/UserService';
import AuthRepositoryImpl from '../supabase/supabase-repositories/AuthRepositoryImpl';



container.register<UserController>('UserController', {
    useClass: UserController,
});

container.register<UserService>('UserService', {
    useClass: UserService,
});

container.register<AuthRepositoryImpl>('AuthRepository', {
    useClass: AuthRepositoryImpl,
});