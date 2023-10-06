import { MindAppError } from "./MindAppError";

export class InvalidNameError extends Error implements MindAppError {

    readonly name: string = 'InvalidNameError';
    readonly statusCode: number = 400;
    readonly message: string;

    constructor(message: string) {
        super(message);
        this.message = message;
    }

}