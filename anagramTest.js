const prompts = require("prompts");

const test = async () => {
  console.log("Anagram test");
  console.log();

  while (true) {

    let shouldContinue = (await prompts({
      type: 'confirm',
      name: 'value',
      message: 'Would you like to test text for anagram?'
    })).value;
    
    if (!shouldContinue) 
      break;

    let textA = await promt('Please enter original text:');
    let textB = await promt('Please enter target text:');

    console.log(
      isAnagram(textA, textB) ? 'Text is anagram.' : 'Text is not anagram.'
    );
    console.log();
  }
}; 

const isAnagram = (textA, textB) => {
  textA = textA.toLowerCase();
  textB = textB.toLowerCase();

  var dictA = getLatersUsed(textA);
  var dictB = getLatersUsed(textB);

  if (Object.keys(dictA).length !== Object.keys(dictB).length) return false;

  for (let key in dictA) {
    if (!dictB[key] || dictA[key] !== dictB[key]) return false;
  }

  return true;
};

const getLatersUsed = text => {
  let dict = {};

  for (let i = 0; i < text.length; i++) {
    let charactor = text[i];
    if (charactor === " ") continue;

    if (!dict[charactor]) dict[charactor] = 0;

    dict[charactor] = dict[charactor] + 1;
  }

  return dict;
};


const promt = async (question) => {
  let response = await prompts({
    type: 'text',
    name: 'value',
    message: question
  });

  return response.value;
} 

module.exports = test;
