// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

function generatePassword() {

  var passwordLength = prompt("What password length would you like?");
  passwordLength = parseInt(passwordLength);

  if ((passwordLength < 8 || passwordLength > 128) || (!passwordLength)) {
    window.alert("You have to select between 8 and 128 characters");
    generatePassword();
  }   

  var hasSpecialChars = confirm("Click ok to have special characters");
  
  var hasUpperCase = confirm("Click ok to have upper case characters");

  var hasLowerCase = confirm("Click ok to have lower case characters");

  var hasNumbers = confirm("Click ok to have numbers");

  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialChars: hasSpecialChars,
    hasNumbers: hasNumbers,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
  };

  function selectRandChar(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  var result = [];
  var possiblePasswordChars = [];

  if (passwordOptions.hasSpecialChars) { 
   
    possiblePasswordChars = specialChars.concat();
    result.push(selectRandChar(specialChars)); 
          
  }

  if (passwordOptions.hasNumbers) {

    possiblePasswordChars = numbers.concat(possiblePasswordChars);
    result.push(selectRandChar(numbers));
    
  }
  if (passwordOptions.hasLowerCase) {
  
    possiblePasswordChars = lowerCaseLetters.concat(possiblePasswordChars);
    result.push(selectRandChar(lowerCaseLetters));
    
  }
  if (passwordOptions.hasUpperCase) {

    possiblePasswordChars = upperCaseChars.concat(possiblePasswordChars);
    result.push(selectRandChar(upperCaseChars));
  }

  for (var i = 0; i = passwordOptions.passwordLength - result.length; i++) {
    result.push(selectRandChar(possiblePasswordChars));
  }  


  result = result.join('');
  
  return result;

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

