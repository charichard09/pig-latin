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

Test: "It will test a word that begins with 'qu' for uppercase 'Qu'"
Code:
const textPassage = "Quack";
pigLatin(textPassage);
Expected Output: "ackQuay"

Test: "It will test a word that begins with 'qu' for uppercase 'Qu', move 'Qu', lowercase the 'Q',
then uppercase the first letter 'A'."
Code:
const textPassage = "Quack";
pigLatin(textPassage);
Expected Output: "Ackquay"

Test: "It will add 'way' to the end of words that begin with a [a, e, i, o, u]."
Code: 
const textPassage = "a";
pigLatin(textPassage);
Expected Output: "away"

Test: "It will test a word that doesn't begin with [a, e, i, o, u] or 'qu', then move that
consonant to the end and add 'ay'."
Code:
const textPassage = "code";
pigLatin(textPassage);
Expected Output: "odecay"

Test: "It will test a word that doesn't begin with [a, e, i, o, u] or 'qu' and has multiple consonants, 
then move those consonants to the end and add 'ay'."
Code:
const textPassage = "clap";
pigLatin(textPassage);
Expected Output: "apclay"

Test: "It should test a whole passage and return all words as pig latin"
Code:
const textPassage = "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort."
pigLatin(textPassage);
Expected Output:
"Inyay ayay olehay inyay ethay oundgray erethay ivedlay ayay obbithay. Otnay ayay astynay, irtyday, etway olehay, illedfay ithway ethay endsyay ofyay ormsway andyay anyay oozyyay ellsmay, ornay etyay ayay ydray, arebay, andysay olehay ithway othingnay inyay ityay otay itsay ownday onyay oryay otay eat: ityay asway ayay obbit-holehay, andyay atthay eansmay omfortcay."