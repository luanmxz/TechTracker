import { InvalidEmailError } from "../../errors/InvalidEmailError";
import { emailRegex } from "../../utils/regex/regexEmail";


export function validateEmail(email: string): void {
    if (!emailRegex.test(email)) throw new InvalidEmailError('Invalid email');
}