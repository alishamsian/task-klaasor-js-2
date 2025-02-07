// 1.Array Filter: Create a function that filters an array of numbers to return only even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(evenNumber(numbers));

// 2.Array Flattening: Create a function that flattens a nested array of any depth.

const array = [1, [2, [3, [4]], 5]];

const flatArray = (arr) => {
  return arr.reduce(
    (x, y) => (Array.isArray(y) ? x.concat(flatArray(y)) : x.concat(y)),
    []
  );
};

console.log(flatArray(array));

// 3.Random Joke Generator: Create a button that fetches a random joke from Chuck Norris API and shows a loading state while fetching.

const jokeText = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const fetchJoke = async () => {
  try {
    jokeText.textContent = "Loading...";
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokeText.textContent = data.value;
  } catch (error) {
    jokeText.textContent = "failed , try again";
  }
};

jokeBtn.addEventListener("click", fetchJoke);

// 4.Create a function to sort an array of numbers and display the sorted list.

const sorts = (numbers) => {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  console.log("sort list:", sortedNumbers);
};

const nums = [10, 88, 56, 75, 21, 2, 5];

sorts(nums);

// 5.Object Property Counter: Write a function that counts how many properties an object has, including nested objects

const test = {
  name: "ali",
  age: 23,
  address: {
    city: "ramsar",
  },
  skills: {
    programming: ["JavaScript", "html"],
    design: ["Photoshop", "Figma"],
  },
};

const countProperties = (obj) => {
  let count = 0;

  Object.keys(obj).forEach((key) => {
    count++;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countProperties(obj[key]);
    }
  });

  return count;
};

console.log(countProperties(test));

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

// 8.Card Generator: Create a function that generates a card element with a title, content, and a delete button.

const addCardBtn = document.getElementById("addCardBtn");

addCardBtn.addEventListener("click", () => {
  createCard(
    "Card Title",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, qui!"
  );
});

const createCard = (title, content) => {
  const cardContainer = document.querySelector(".card-container");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;

  const cardContent = document.createElement("p");
  cardContent.textContent = content;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => card.remove());

  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  card.appendChild(deleteBtn);
  cardContainer.appendChild(card);
};

// 9.Email Validator: Create a function that checks if a string contains a valid email pattern using string methods (no regex).

const isValidEmail = (email) => {
  if (!email.includes("@")) return false;

  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const localPart = parts[0];
  const domainPart = parts[1];

  if (!domainPart.includes(".")) return false;

  const domainSections = domainPart.split(".");
  if (domainSections.some((section) => section.length === 0)) return false;

  return localPart.length > 0 && domainPart.length > 1;
};

console.log(isValidEmail("alishamsian504@gmail.com"));
console.log(isValidEmail("alishamsian504.com"));

// 10.Array Transformation: Create a function that transforms an array of strings into an array of objects with a length property.

const users = ["ali", "kasra", "mani", "ali"];

const transformArray = (arr) => {
  return arr.map((str) => ({
    value: str,
    length: str.length,
  }));
};

console.log(transformArray(users));

// 11.Element Frequency Counter: Create a function that counts the frequency of elements in an array and returns an object with the counts. Example Input: ['a', 'b', 'a', 'c', 'b', ‘a'] Expected Output: { a: 3, b: 2, c: 1 }

const test2 = ["a", "b", "a", "c", "b", "a"];

const countFrequencies = (arr) => {
  let frequency = {};

  arr.forEach((item) => {
    frequency[item] = (frequency[item] || 0) + 1;
  });

  return frequency;
};

console.log(countFrequencies(test2));

// 12.User Data Display: Create a webpage that fetches and displays user data from JSONPlaceholder. Display each user's name and email in a card layout.

const fetchUsers = async ()=> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const container = document.getElementById("user-container");

    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card2");
      card.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error :", error);
  }
}

fetchUsers();
