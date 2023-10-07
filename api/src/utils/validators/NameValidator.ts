import { InvalidNameError } from "../errors/InvalidNameError";
import { atLeastThreeChar, exceedNameMaxLenght, nameCannotContainEspecialChar, nameCannotContainNumber, validateAllFactors } from "../helpers/regexName";

export default function validateName(name: string): void {

    switch(false){
        case(atLeastThreeChar.test(name)):
            throw new InvalidNameError('O nome deve possuir no mínimo 3 caracteres.');
        case(exceedNameMaxLenght.test(name)):
            throw new InvalidNameError('Nome muito grande. O nome deve possuir no máximo 40 caracteres.');
        case(nameCannotContainEspecialChar.test(name)):
            throw new InvalidNameError('O nome não pode possuir caracteres especiais.');
        case(nameCannotContainNumber.test(name)):
            throw new InvalidNameError('O nome não pode conter números.');
        case(validateAllFactors.test(name)):
            throw new InvalidNameError('Nome inválido.');
        default:
            break;
    }
}