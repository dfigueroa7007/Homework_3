$(document).ready(function() {

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
    
    var charConfirm = prompt("How many characters (between 8-128) would you like the password to have?");
    var lowerConfirm = confirm("Would you like lower case letters?");
    var upperConfirm = confirm("would you like upper case letters?");
    var numberConfirm = confirm("Would you like numbers?");
    var specialConfirm = confirm("Would you like special characters?")

    


// Loop to generate random numbers
var typesArray = [randomLower, randomUpper, randomNumber, randomSpecial]

for (let i = 0; i <= 8 >= 128; i++) {


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
  return Math.floor(Math.random() * 10);
}
console.log(randomNumber());


function randomSpecial(){
  let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}
console.log(randomSpecial());
}





}