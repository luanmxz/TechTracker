import { InvalidNameError } from "../../errors/InvalidNameError";
import { atLeastThreeChar, exceedNameMaxLenght, nameCannotContainEspecialChar } from "../../utils/regex/RegexName";



export function validateName(name: string): void {

    if (!atLeastThreeChar.test(name)) throw new InvalidNameError('The name must have at least 3 characters.');
    if (exceedNameMaxLenght.test(name)) throw new InvalidNameError('Name too long. The name must have a maximum of 40 characters.');
    if (!nameCannotContainEspecialChar.test(name)) throw new InvalidNameError('The name cannot contain special characters or numbers.');
}