import { InvalidEmailError } from "../errors/InvalidEmailError";
import { emailRegex } from "../helpers/RegexEmail";

export default function validateEmail(email: string): void {
    if (!emailRegex.test(email)) throw new InvalidEmailError('Invalid email');
}