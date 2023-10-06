export interface MindAppError {

    name: string;
    message: string;
    statusCode: number;

    toJSON(): MindAppErrorJson;

}

type MindAppErrorJson = {
    name: string;
    message: string;
}