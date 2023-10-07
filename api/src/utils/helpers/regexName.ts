const atLeastThreeChar = /^.{0,2}$/;
const exceedNameMaxLenght = /^.{41,}$/;
const nameCannotContainNumber = /^[^0-9]*$/;
const nameCannotContainEspecialChar = /^[^!@#$%^&*()_+{}\[\]:;<>,.?~\\-=|\\/"'\u20AC\u2122\u00A3]*$/;
const validateAllFactors = /^(?!.*[0-9])(?!.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=|\\/"'\u20AC\u2122\u00A3])(?=.{3,40}$).*$/;

export { atLeastThreeChar, exceedNameMaxLenght, nameCannotContainEspecialChar, nameCannotContainNumber, validateAllFactors };
