import { MindAppError } from "./MindAppError";

export class InvalidPassword extends Error implements MindAppError {

    readonly name: string = 'InvalidPasswordError';
    readonly statusCode: number = 400;
    readonly message: string;

    constructor(message: string){
        super(message);
        this.message = message;
    }

    toJSON(): { name: string; message: string; } {
        return {
            name: this.name,
            message: this.message
        }
    }
}