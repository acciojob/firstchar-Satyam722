function firstChar(text) {
  // Loop through each character of the input string
  for (let i = 0; i < text.length; i++) {
    // Check if the current character is not a space
    if (text[i] !== ' ') {
      return text[i]; // Return the first non-space character
    }
  }
  // If no non-space character is found, return an empty string
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
