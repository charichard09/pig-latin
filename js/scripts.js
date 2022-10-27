// Business Logic
const textPassageGlobal = "The duck goes quack";

// Test: "It will test multiple words where 1 begins with 'qu', if true move 'qu' to back and add 'ay'."
// Code:
// const textPassage = "The duck goes quack";
// pigLatin(textPassage);
// Expected Output: "The duck goes ackquay"
function pigLatin(textPassage) {
  const textPassageArray = textPassage.split(" ");
  let pigLatin = [];

  textPassageArray.forEach(function(word) {
    const wordArray = word.split("");

    if (wordArray[0] === "q" && wordArray[1] === "u") {

      wordArray.push(wordArray.shift());
      wordArray.push(wordArray.shift()); 
    
      pigLatin.push(wordArray.join("") + "ay");
    } else {
      pigLatin.push(word);
    }
  });

  return pigLatin.join(" "); //should be: "The duck goes ackquay"
}


// UI Logic

