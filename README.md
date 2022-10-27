<!-- Pig Latin rules:
- for words that begin with "qu", move "qu" to the end and add "ay" i.e. "quick" becomes "ickquay"
- for words that begins with vowels [a, e, i, o, u], add "way" to the end i.e. "away" becomes "awayway"
- for words beginning with consonants (any other letter(s)), move all consecutive consonants to the end
    and add "ay" i.e. "code" becomes "odecay"
-->

Describe: pigLatin()

Test: "It will test a word that begins with 'qu', if true move 'qu' to back and add 'ay'."
Code:
const textPassage = "quack";
pigLatin(textPassage);
Expected Output: "ackquay"

Test: "It will test multiple words where 1 begins with 'qu', if true move 'qu' to back and add 'ay'."
Code:
const textPassage = "The duck goes quack";
pigLatin(textPassage);
Expected Output: "The duck goes ackquay"

Test: "It will test multiple words where 1 begins with 'qu' and has a period punctuation. if true, 
remove punctuation, move 'qu' to back and add 'ay', then re-add punctuation."
Code:
const textPassage = "The duck goes quack.";
pigLatin(textPassage);
Expected Output: "The duck goes ackquay."

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Expected Output: 

Test: ""
Code:

Expected Output: 