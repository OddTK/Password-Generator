// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

// assigning userLength to number and the prompt
let length = Number(prompt("How long would you like your password? (8-128)"));
// while the length is not-a-number or length is less than 8 or greater than 128 - prompt
if (isNaN(length) || length < 8 || length > 128) length= Number(prompt("Password must be between 8 and 128 characters. How long would you like it to be?"));

  // 1. Prompt user for the password criteria
  //  a. password length must be 8 - 128
  //  b. lowercase, uppercase, numbers, special character

  // instruct browser to display dialog, and wait until the user either confirms or cancels the dialog
  let letterCap = confirm("Would you like to include uppercase characters?");
  let letterLow = confirm("Would you like to include lowercase characters?");
  let numbers = confirm("Would you like to include numbers?");
  let symbols = confirm("Would you like to include special characters?");

  // if the user does not select any option the following alert will display
  if (!letterCap && !letterLow && !numbers && !symbols) {
    alert("Please select at least one option!");
    letterCap = confirm("Would you like to include uppercase characters?");
    letterLow = confirm("Would you like to include lowercase characters?");
    numbers = confirm("Would you like to include numbers?");
    symbols = confirm("Would you like to include special characters?");
  }

  let password = "";
  // assigning variables allowed items
  // using outside random function generator to generate random with rando
  // if the variable is true to the randomized allowed variable with is set to its given value
  let allowed = {};
  if (letterCap) password += rando(allowed.letterCap = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (letterLow) password += rando(allowed.letterLow = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "0123456789");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*()-{}[]=<>/,.");

  // for password length selected by user add the random number of characters that are allowed and choosen
  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  // grabs the password Id from the HTML, the value is set and equaled to the random sequence and joins the items
  document.getElementById("password").value = randoSequence(password).join("");

  return password;
}
