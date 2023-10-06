import { InvalidNameError } from "../errors/InvalidNameError";

export default function validateName(name: string): void {
    if (name.length === 0) throw new InvalidNameError('Você deve inserir um nome!');
    if (name.length < 3) throw new InvalidNameError('O nome deve possuir no mínimo 3 caracteres!');
}