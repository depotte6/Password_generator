// Assignment Code
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specicals = ['!', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '_', '`', '{', '}', '|', '~', '@', '#'];
var generateBtn = document.querySelector("#generate");


function getUserPasswordOptions() {
    var length = parseInt(
        prompt('How many characters would you like your password to be?'));
        console.log(length);
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
    var userPasswordOptions = {
        length: length,
        hasNumbers: hasNumbers,
        hasLetters: hasLetters,
        hasCapitals: hasCapitals,
        hasSpecials: hasSpecials
    }      
    console.log(userPasswordOptions);
    return userPasswordOptions;
    
}
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  

  function generatePassword() {
      var passwordOptions = getUserPasswordOptions();

      var result = [];
      var userOptions = [];
      var passwordChoices = [];

      if (passwordOptions.hasNumbers) {
          userOptions = userOptions.concat(numbers);
          passwordChoices.push(getRandom(numbers));
          console.log(passwordChoices);
      }
      if (passwordOptions.hasLetters) {
          userOptions = userOptions.concat(letters);
          passwordChoices.push(getRandom(letters));
          console.log(passwordChoices);
      }
      if (passwordOptions.hasCapitals) {
          userOptions = userOptions.concat(capitals);
          passwordChoices.push(getRandom(capitals));
          console.log(passwordChoices);
      }
      if (passwordOptions.hasSpecials) {
          userOptions = userOptions.concat(specicals);
          passwordChoices.push(getRandom(specicals));
          console.log(passwordChoices);
      }

      for (var i = 0; i < passwordOptions.length; i++) {
        var userOption = getRandom(userOptions);
    
        result.push(userOption);
        console.log(userOption);
      }
    
      for (var i = 0; i < passwordChoices.length; i++) {
        result[i] = passwordChoices[i];
      }
      console.log(result);
      return result.join(''); 
    }

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }
// Add event listener to generate button
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener("click", writePassword);
