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

// Random Joke Generator: Create a button that fetches a random joke from Chuck Norris API and shows a loading state while fetching.

const jokeText = document.querySelector("#joke")
const jokeBtn = document.querySelector("#jokeBtn")

const fetchJoke = async () => {
    try{
        jokeText.textContent = "Loading..."
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        jokeText.textContent = data.value;
    } catch (error){
        jokeText.textContent = "failed , try again"
    }
}

jokeBtn.addEventListener("click" , fetchJoke)
