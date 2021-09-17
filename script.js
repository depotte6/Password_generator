// Assignment Code
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specicals = ['!', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '_', '`', '{', '}', '|', '~', '@', '#'];
var generateBtn = document.querySelector("#generate");


function passChoices() {
    var hasNumbers = confirm('Would you like to include numbers?');
    var hasLetters = confirm('Would you like to include lowercase letters?');
    var hasCapitals = confirm('Would you like to include capital letters?');
    var hasSpecials = confirm('Would you like to include special characters?');
    var passwordLength =prompt('How many characters would you like your password to be?');

    if(hasNumbers, hasLetters, hasCapitals, hasSpecials === false) {
        alert ('Please include at least one of the options');
        return null;
    }
    var passwordChoices = {
        passwordLength: length,
        hasNumbers: hasNumbers,
        hasLetters: hasLetters,
        hasCapitals: hasCapitals,
        hasSpecials: hasSpecials
    }      
    return passwordChoices;
    )
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
