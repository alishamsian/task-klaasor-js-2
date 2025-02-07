// 1.Array Filter: Create a function that filters an array of numbers to return only even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(evenNumber(numbers));

// 2.Array Flattening: Create a function that flattens a nested array of any depth.

const array = [1, [2, [3, [4]], 5]];

const flatArray = (arr)=>{
    return arr.reduce((x , y) =>
        Array.isArray(y) ? x.concat(flatArray(y)) : x.concat(y) , [] );
}

console.log(flatArray(array))

// 3.Random Joke Generator: Create a button that fetches a random joke from Chuck Norris API and shows a loading state while fetching.

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


// 4.Create a function to sort an array of numbers and display the sorted list. 

const sorts = (numbers)=>{
    let sortedNumbers = numbers.sort((a , b)=> a - b);
    console.log("sort list:" , sortedNumbers);
}

const nums = [10, 88 , 56 , 75 , 21 , 2 , 5]

sorts(nums)


// 5.Object Property Counter: Write a function that counts how many properties an object has, including nested objects

const test = {
    name: "ali",
    age: 23,
    address: {
        city: "ramsar",
    },
    skills: {
        programming: ["JavaScript", "html"],
        design: ["Photoshop", "Figma"]
    }
};


const countProperties = (obj) => {
    let count = 0;
    
    Object.keys(obj).forEach(key => {
        count++; 
        
        if (typeof obj[key] === "object" && obj[key] !== null) {
            count += countProperties(obj[key]);
        }
    });

    return count;
};

console.log(countProperties(test))


// 6. Change the background color of the webpage when a button is clicked.

const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
};

const button = document.createElement("button");
button.textContent = "Change Background Color";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.margin = "20px";
button.addEventListener("click", changeBackgroundColor);

document.body.appendChild(button);

// 7.Create a simple countdown timer that counts down from a specified number of seconds.

const startCountdown = (seconds) => {
    const display = document.createElement("h1");
    display.textContent = seconds;
    document.body.appendChild(display);

    const interval = setInterval(() => {
        seconds--;
        display.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(interval);
            display.textContent = "End";
        }
    }, 1000);
};

const button2 = document.createElement("button");
button2.textContent = "Start Countdown";
button2.style.padding = "10px 20px";
button2.style.fontSize = "16px";
button2.style.cursor = "pointer";
button2.style.margin = "20px";

button2.addEventListener("click", () => startCountdown(10));

document.body.appendChild(button2);

