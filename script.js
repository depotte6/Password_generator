// Assignment Code
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specicals = ['!', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '_', '`', '{', '}', '|', '~', '@', '#'];
var generateBtn = document.querySelector("#generate");


function getpasswordOptions() {
    var passwordLength = prompt('How many characters would you like your password to be?');
        console.log(passwordLength);
    var hasNumbers = confirm('Would you like to include numbers?');
        console.log(hasNumbers);
    var hasLetters = confirm('Would you like to include lowercase letters?');
        console.log(hasLetters);
    var hasCapitals = confirm('Would you like to include capital letters?');
        console.log(hasCapitals);
    var hasSpecials = confirm('Would you like to include special characters?');
        console.log(hasSpecials);
    

    if(hasNumbers, hasLetters, hasCapitals, hasSpecials === false) {
        alert ('Please include at least one of the options');
        return null;
    }
    var passwordOptions = {
        passwordLength: passwordLength,
        hasNumbers: hasNumbers,
        hasLetters: hasLetters,
        hasCapitals: hasCapitals,
        hasSpecials: hasSpecials
    }      
    console.log(passwordOptions);
    return passwordOptions;
    
}
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  

// Write password to the #password input

  function generatePassword() {
      var passwordOptions = getpasswordOptions();

      var result = [];
      var userNumbers = [];
      var userLetters = [];
      var userCapitals = [];
      var userSpecials = [];
      var userLength = [];
      var userOptions = [];
      var passwordChoices = [];

 
      if (passwordOptions.hasNumbers) {
          userNumbers = userNumbers.concat(numbers);
          userOptions.push(getRandom(numbers));
          console.log(userOptions);
      }
      if (passwordOptions.hasLetters) {
          userLetters = userLetters.concat(letters);
          userOptions.push(getRandom(letters));
          console.log(userOptions);
      }
      if (passwordOptions.hasCapitals) {
          userCapitals = userCapitals.concat(capitals);
          userOptions.push(getRandom(capitals));
          console.log(userOptions);
      }
      if (passwordOptions.hasSpecials) {
          userSpecials = userSpecials.concat(specicals);
          userOptions.push(getRandom(specicals));
          console.log(userOptions);
      }
     
      for (var i = 0; i < passwordOptions.passwordLength; i++) {
        var userLength = getRandom(passwordOptions);
        result.push(userLength);       
    }

      for (var i = 0; i < userOptions.length; i++) {
        var userChoice = getRandom(userOptions);
    
        result.push(userChoice);
      }
    
      for (var i = 0; i < passwordChoices.length; i++) {
        result[i] = passwordChoices[i];
      }
      console.log(result);
      return result; 
    }

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }
// Add event listener to generate button
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener("click", writePassword);
