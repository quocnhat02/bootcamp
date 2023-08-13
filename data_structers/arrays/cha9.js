// Challenge 9: Rearrange Positive & Negative Values

function reArrange1(arr) {
  const posNum = [],
    nevNum = [];

  for (const number of arr) {
    if (number < 0) {
      nevNum.push(number);
    } else {
      posNum.push(number);
    }
  }

  return nevNum.concat(posNum);
}

function reArrange2(arr) {
  let leftMostPosEle = 0,
    tmp;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== leftMostPosEle) {
        tmp = arr[i];
        arr[i] = arr[leftMostPosEle];
        arr[leftMostPosEle] = tmp;
      }

      leftMostPosEle++;
    }
  }

  return arr;
}

const arr = [10, -1, 20, 4, 5, -9, -6];

console.log(reArrange1(arr));
console.log(reArrange2(arr));
