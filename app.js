// 1.Array Filter: Create a function that filters an array of numbers to return only even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(evenNumber(numbers));

// Array Flattening: Create a function that flattens a nested array of any depth.

const array = [1, [2, [3, [4]], 5]];

const flatArray = (arr)=>{
    return arr.reduce((x , y) =>
        Array.isArray(y) ? x.concat(flatArray(y)) : x.concat(y) , [] );
}

console.log(flatArray(array))

