import { MindAppError } from "./MindAppError";

export class InvalidEmailError extends Error implements MindAppError {

    readonly name: string = 'InvalidEmailError';
    readonly statusCode: number = 400;
    readonly message: string;

    constructor(message: string) {
        super(message);
        this.message = message;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message
        }
    }

}