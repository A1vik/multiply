module.exports = function multiply(first, second) {
  const firstArr = [...first].reverse();
  const secondArr = [...second].reverse();

  let multArr = [];

  // [1, 2] * [3, 4] => [(1 * 3), (1 * 4) + (2 * 3), (2 * 4)] => [3, 10, 8]

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      const mult = firstArr[i] * secondArr[j];
      multArr[i + j] = (multArr[i + j] ? multArr[i + j] + mult : mult);
    }
  }
  // console.log(multArr);

  // [3, 10, 8] => [(3 % 10 = 3), (10 % 10 = 0), ((8 + 1) % 10 = 9)]
  //  rev [9, 0, 3]

  const reduced = multArr.reduce((acc, num, i) => {
    acc.push(num % 10);

    const moveTen = Math.floor(num / 10);

    (i + 1 < multArr.length ? multArr[i + 1] += moveTen : acc.push(moveTen));

    return acc;
  }, []);
  // console.log(reduced);

  const result = reduced.reverse();

  let resultClone = result.slice();

  // 001100 => 1100

  for (let i = 0; i < resultClone.length; i++) {
    if (resultClone[i] === 0) {
      resultClone = resultClone.slice(1);
    }
    break;
  }
  // console.log(result1);
  return resultClone.join('');
};
