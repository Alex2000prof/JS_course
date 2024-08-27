let sentence = "The movie is not that bad, I like it";
let posNot = sentence.indexOf("not");
let posBad = sentence.indexOf("bad");

if (posNot !== -1 && posBad !== -1 && posBad > posNot) {
  sentence = sentence.slice(0, posNot) + "good" + sentence.slice(posBad + 3);
}

console.log(sentence);
