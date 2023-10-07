import { InvalidPassword } from "../errors/InvalidPassword";
import { atLeastEightChar, atLeastOneEspecialChar, atLeastOneMinnorCase, atLeastOneNumber, atLeastOneUpperCase } from '../helpers/RegexPassword';

export function validatePassword(password: string) {

    if (!atLeastOneMinnorCase.test(password)) throw new InvalidPassword('Password must contain at least one lowercase letter.');
    if (!atLeastOneUpperCase.test(password)) throw new InvalidPassword('Password must contain at least one uppercase letter.');
    if (!atLeastOneNumber.test(password)) throw new InvalidPassword('Password must contain at least one number.');
    if (!atLeastOneEspecialChar.test(password)) throw new InvalidPassword('Password must contain at least one special character.');
    if (!atLeastEightChar.test(password)) throw new InvalidPassword('Password must contain at least eight characters.');
}