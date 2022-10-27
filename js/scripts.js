// Business Logic
const textPassageGlobal = "The duck goes quack.";

// Test: "It will test multiple words where 1 begins with 'qu' and has a period punctuation. if true, 
// remove punctuation, move 'qu' to back and add 'ay', then re-add punctuation."
// Code:
// const textPassage = "The duck goes quack.";
// pigLatin(textPassage);
// Expected Output: "The duck goes ackquay."
function pigLatin(textPassage) {
  const textPassageArray = textPassage.split(" ");
  let pigLatin = [];
  let punctuationHold = "";

  textPassageArray.forEach(function(word) {
    const wordArray = word.split("");
    const punctuationArray = ["!", ".", ",", ":", ";"];

    // if word has ending punctuation
    if (punctuationArray.includes(wordArray[wordArray.length-1])) {
      punctuationHold = wordArray.pop();
    } 
    
    // if word begins with 'qu'
    if (wordArray[0] === "q" && wordArray[1] === "u") {

      wordArray.push(wordArray.shift());
      wordArray.push(wordArray.shift()); 
    
      pigLatin.push(wordArray.join("") + "ay");
    } else {
      pigLatin.push(word);
    }
  });

  return pigLatin.join(" ") + punctuationHold; //should be: "The duck goes ackquay."
}


// UI Logic

