// task 1

const checkGroupsOfThreeNumbers = (initialArray) => {
  const result = [];

if (!Array.isArray(initialArray)) {
    console.error('В качестве входного параметра должен быть передан массив');
    return result;
  }

  if (initialArray.length < 3) {
    console.log('Длина переданного массива должна быть равна >= 3');
    return result;
  }



  // "условиями задания не было оговорено, но если все элементы массива должны быть
  // типа number, то можете раскомментировать данную итерацию:"
for (let i = 0; i < initialArray.length; i++) {
    if (typeof initialArray[i] !== 'number') {
      console.error('Все элементы массива должны быть типа number');
      return result;
    }
  }

  const iterationsCount = initialArray.length - 2;

  for (let i = 0; i < iterationsCount; i++) {
    const a = initialArray[i];
    const b = initialArray[i + 1];
    const c = initialArray[i + 2];

    if ((a > b && b < c) || (a < b && b > c)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
};

// примеры использования
console.log(checkGroupsOfThreeNumbers([1, 3, 5, 4,5,7 ]));
console.log('=======================');
console.log(checkGroupsOfThreeNumbers([7, 9, 11, 0, 3, 2, -890]));
console.log('=======================');
console.log(checkGroupsOfThreeNumbers([]));
console.log('=======================');
console.log(checkGroupsOfThreeNumbers([1, 2]));
console.log('=======================');
console.log(checkGroupsOfThreeNumbers([1, 'а', 'б']));
console.log('=======================');
console.log(checkGroupsOfThreeNumbers());
