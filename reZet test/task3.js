// task 3

const getFinalString = (string, formattingRule, characterLimit) => {
  let finalString = '';
  const stringLength = string.length;
  const spacesCount = characterLimit - stringLength ;

  switch (formattingRule) {
    case 'LEFT': {
      finalString += `*${string}${' '.repeat(spacesCount)}*`;
      break;
    }
    case 'RIGHT': {
      finalString += `*${' '.repeat(spacesCount)}${string}*`;
      break;
    }
    default: {
      break;
    }
  }

  return finalString;
};

const getSplitString = (wordsArray, characterLimit) => {
  const splitString = [];

  let tempString = '';
  wordsArray.forEach((word) => {
    if (tempString.length === 0) {
      tempString = word;
      return;
    }

    const concatenatedString = `${tempString} ${word}`;
    if (concatenatedString.length < characterLimit) {
      tempString = concatenatedString;
    } else {
      splitString.push(tempString);
      tempString = word;
    }
  });
  splitString.push(tempString);

  return splitString;
};

const getFinalText = (stringsArray, formattingConditions, characterLimit) => {
  const result = [];

  if (!Array.isArray(stringsArray) || !Array.isArray(formattingConditions)) {
    console.error(
      'В качестве первого и второго входных параметров должны быть переданы массивы'
    );
    return result;
  }

  if (stringsArray.length !== formattingConditions.length) {
    console.error(
      'Массивы stringsArray и formattingConditions должны быть одинаковыми по длине'
    );
    return result;
  }

  if (typeof characterLimit !== 'number') {
    console.error('Третий входной параметр должен являться числом');
    return result;
  }

  result.push('*'.repeat(characterLimit + 2));

  for (let i = 0; i < stringsArray.length; i++) {
    const wordsArray = stringsArray[i];
    const string = wordsArray.join(' ');
    const formattingRule = formattingConditions[i];

    if (string.length > characterLimit) {
      getSplitString(wordsArray, characterLimit).forEach((item) => {
        result.push(getFinalString(item, formattingRule, characterLimit));
      });
    } else {
      result.push(getFinalString(string, formattingRule, characterLimit));
    }
  }

  result.push('*'.repeat(characterLimit +2));

  return result;
};

// примеры использования


console.log(
  getFinalText(
    [
      ['Hello', 'world'],
      ['Brad', 'came', 'to'],
    ['dinner', 'with', 'us'],
      ['He', 'loves', 'tacos']
    ],
    ['LEFT', 'RIGHT', 'LEFT','RIGHT' ],
    16
  )
);


console.log('=======================');
console.log(
  getFinalText(
    [
      ['Hello', 'world', 'world', 'hello', 'world'],
      ['Brad', 'came', 'to', 'dinner', 'with', 'us', 'dinner', 'with', 'us'],
      ['He', 'loves', 'tacos']
    ],
    ['LEFT', 'RIGHT', 'LEFT'],
    16
  )
);
console.log('=======================');
console.log(
  getFinalText([['He', 'loves', 'tacos']], ['LEFT', 'RIGHT', 'LEFT'], 18)
);
console.log('=======================');
console.log(
  getFinalText(
    [
      ['He', 'loves', 'tacos'],
      ['He', 'he', 'tacos']
    ],
    ['LEFT', 'RIGHT'],
    19
  )
);
console.log('=======================');
console.log(
  getFinalText(
    [
      ['Hello', 'world'],
      ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
      ['He', 'loves', 'tacos']
    ],
    ['LEFT', 'RIGHT', 'LEFT'],
    10
  )
);
console.log('=======================');
console.log(getFinalText(123, null, 18));
console.log('=======================');
console.log(getFinalText([['test']], ['RIGHT'], 18));
console.log('=======================');
console.log(getFinalText([['test']], ['RIGHT'], '18'));

