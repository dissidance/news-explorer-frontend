import './style.css';

const numbers = [2, 3, 5];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);
console.log('hello');


const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i <= arr.length; i ++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

const selectionSort = (arr) => {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr.pop.smallest);
  };
  return newArr;
}

selectionSort([5, 3, 6, 2, 10]);