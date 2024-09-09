//2

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
function toJs() {
  return new Promise((resolve, reject) => {
    const morse_new = JSON.parse(morse);
    if (Object.keys(morse_new).length === 0) {
      reject("Error");
    } else {
      resolve(morse_new);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const word = prompt("Enter a word or sentence: ").toLowerCase();
    let array = [];
    for (let i of word) {
      if (morseJS[i]) {
        array.push(morseJS[i]);
      } else {
        return reject("Error");
      }
    }
    resolve(array);
  });
}

function joinWords(morseTranslation) {
  const morse_str = morseTranslation.join("\n");
  document.body.innerText = morse_str;
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.error(error));
