const specialChars = "!@#$%^&*()_+{}\\[\\]:;<>,.?~\\-=|/'\"\\u20AC\\u2122\\u00A3";

const atLeastOneEspecialChar = new RegExp(`[${specialChars}]`);
const atLeastEightChar = /^.{8,}$/;
const atLeastOneUpperCase = /[A-Z]/;
const atLeastOneMinnorCase = /[a-z]/;
const atLeastOneNumber = /\d/;

export { atLeastEightChar, atLeastOneEspecialChar, atLeastOneUpperCase, atLeastOneMinnorCase, atLeastOneNumber };