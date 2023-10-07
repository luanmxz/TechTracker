import { InvalidPassword } from "../errors/InvalidPassword";
import { atLeastEightChar, atLeastOneEspecialChar, atLeastOneMinnorCase, atLeastOneNumber, atLeastOneUpperCase, validateAllFactors } from "../helpers/regexPassword";

export function validatePassword(password: string){

    switch(false){
        case(atLeastOneMinnorCase.test(password)):
            throw new InvalidPassword('Sua senha deve possuir no mínimo uma letra minúscula.');
        case(atLeastOneUpperCase.test(password)):
            throw new InvalidPassword('Sua senha deve possuir no mínimo uma letra maiúscula.');
        case(atLeastOneNumber.test(password)):
            throw new InvalidPassword('Sua senha deve possuir no mínimo um número.');
        case(atLeastOneEspecialChar.test(password)):
            throw new InvalidPassword('Sua senha deve possuir no mínimo um caracter especial.');
        case(atLeastEightChar.test(password)):
            throw new InvalidPassword('Sua senha deve possuir no mínimo 8 caracteres.');
        case(validateAllFactors.test(password)):
            throw new InvalidPassword('Senha inválida!');
        default:
            break;   
    }
}