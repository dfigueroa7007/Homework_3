// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// These are the generators.

function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLower());


function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUpper());


function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumber());


function randomSpecial(){
  const specialChar = "~!@#$%^&*()-<>?{}\.,[]";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}
console.log(randomSpecial());



