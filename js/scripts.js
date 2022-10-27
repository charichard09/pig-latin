// Business Logic
const textPassageGlobal = "quack";

function pigLatin(word) {
  const wordArray = word.split("");

  wordArray.push(wordArray.shift());
  wordArray.push(wordArray.shift()); 
  
  output = wordArray.join("") + "ay";

  return output //should be: "ackquay"
}


// UI Logic

