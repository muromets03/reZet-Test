// task 2

const fromOneToTenNumbersString = [1, 2, 3, 4, 5, 6, 7, 8, 9].join();

const check3x3matrices = (matrix) => {
  const result = [];

  if (!Array.isArray(matrix)) {
    console.error(
      'В качестве входного параметра должен быть передан массив массивов'
    );
    return result;
  }

  if (matrix.length !== 3) {
    console.error('Количество строк матрицы должно быть === 3');
    return result;
  }

  const matrixFirstRowLength = matrix[0].length;

  if (matrixFirstRowLength < 3) {
    console.log('Длина строки матрицы должна быть равна >= 3');
    return result;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (!Array.isArray(matrix[i])) {
      console.error('Все строки матрицы должны являться массивом');
      return result;
    }

    if (matrix[i].length !== matrixFirstRowLength) {
      console.error('Длины строк матрицы должны совпадать');
      return result;
    }
  }



  const areasCount = matrixFirstRowLength - 2;

  for (let i = 0; i < areasCount; i++) {
    const areaNumbers = [];
    for (let j = 0; j < 3; j++) {
      areaNumbers.push(matrix[j][i]);
      areaNumbers.push(matrix[j][i + 1]);
      areaNumbers.push(matrix[j][i + 2]);
    }
    const sortedAreaNumbers = areaNumbers.sort((a, b) => {
      return a - b;
    });

    result.push(sortedAreaNumbers.join() === fromOneToTenNumbersString);
  }

  return result;
};

// примеры использования
console.log(
  check3x3matrices([
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5]
  ])
);
console.log('=======================');
console.log(
  check3x3matrices([
    [1, 2, 3, 2, 7, 9],
    [4, 5, 6, 8, 1, 0],
    [7, 8, 9, 4, 5, 1]
  ])
);
console.log('=======================');
console.log(
  check3x3matrices([
    [1, 2, 3, 2, 7, 9, 0, 3, 4, 7],
    [4, 5, 6, 8, 1, 0, 1, 2, 5, 8],
    [7, 8, 9, 4, 5, 1, 5, 1, 6, 9]
  ])
);
console.log('=======================');
console.log(
  check3x3matrices([
    [1, 2, 3, 2, 7, 9, 0, 3, 4, 7],
    [4, 5, 6, 8, 1, 0, 1],
    [7, 8, 9, 4, 5, 1, 5, 1, 6, 9]
  ])
);
console.log('=======================');
console.log(
  check3x3matrices([
    [4, 5, 6, 8, 1, 0, 1],
    [7, 8, 9, 4, 5, 1, 5, 1, 6, 9]
  ])
);
console.log('=======================');
console.log(check3x3matrices(''));
console.log('=======================');
console.log(check3x3matrices([123, 456, 789]));
