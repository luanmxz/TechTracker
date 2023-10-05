import "reflect-metadata";
import { container } from 'tsyringe';
import { AuthController } from '../../controllers/AuthController';
import { AuthService } from '../../services/AuthService';
import AuthRepositoryImpl from "../supabase/supabase-repositories/AuthRepositoryImpl";


//AUTH
container.register<AuthController>(AuthController, {
    useClass: AuthController,
});

container.register<AuthService>(AuthService, {
    useClass: AuthService,
});

container.register<AuthRepositoryImpl>(AuthRepositoryImpl, {
    useClass: AuthRepositoryImpl
})
