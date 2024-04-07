/*
Tìm kiếm:
    Tìm kiếm phần tử lớn nhất/nhỏ nhất trong mảng.
    Tìm kiếm phần tử có giá trị xác định trong mảng.
    Tìm kiếm số lần xuất hiện của một phần tử trong mảng.
*/

const findMin = (arr) =>
  arr.reduce((acc, cur) => (acc < cur ? acc : cur), arr[0]);

console.log(findMin([7, 4, 7, 9, 6, 8, 4, 2]));

const findValue = (arr, target) => {
  for (const number of arr) {
    if (number === target) return true;
  }
  return false;
};

console.log(findValue([6, 4, 8, 9, 0, 3, 2], 3));
