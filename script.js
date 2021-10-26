// define variables
var numbers = "0123456789";
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase =  ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = "!@#$%^&*()_+[]|:<>?";
var allChoices= "";
var characters = "";

function writePassword(){
  // prompt for the length of the password
  var passwordLength = parseInt(prompt("How many characters would you like your password to be (between 8-128 characters)"));
  
  console.log("password length", passwordLength)
  if (passwordLength<8) {
    alert("Password length must have more than 8 characters");
    return;
  } 
  else if (passwordLength>128) {
    alert("Password length must have less than 128 characters");
    return;
  } else {
    var littleLetters = confirm("Would you like lowercase letters in your password?");
    console.log("little letters", littleLetters)

    var bigLetters = confirm("Would you like uppercase letters in your password?");

    var nums = confirm("Would you like numbers in your password?");

    var specialCharacters = confirm("Would you like special characters in your password?");

    if(littleLetters === true){
      allChoices += lowerCase;          
    } 

    if(bigLetters === true){
      allChoices += upperCase;          
    } 

    if(nums === true){
      allChoices += numbers;          
    } 

    if(specialCharacters === true){
      allChoices += specialChar;          
    } 

    console.log("all choices", allChoices)


    for(var i = 0; i < passwordLength; i++){
      
      var randomizer = Math.floor(allChoices.length * Math.random())
      console.log("random", randomizer)
      characters += allChoices.charAt(randomizer)
      console.log(characters)
    }
    passwordText.textContent = characters;
  }
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
