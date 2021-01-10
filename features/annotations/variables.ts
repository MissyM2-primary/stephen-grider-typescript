let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();

//Arrays
let colors: string[] = ['red', 'green', 'blue'];
let nyNumbers: number[] = [5, 11, 1978];
let myBools: boolean[] = [true, false];

//Classes
class Car {}

let car: Car = new Car();

//Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) Functions that return 'any' type
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

// 2) when we declare a var on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) have a variable whose type can't be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
