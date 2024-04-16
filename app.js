const name = "Tin";
const age = 2;
let addS = "";

if (age > 1) {
  let addS = "s";
  console.log(`my name is ${name}, I'm ${age} year${addS} old`);
} else {
  let addS = "";
  console.log(`my name is ${name}, I'm ${age} year${addS} old`);
}

// output: my name is Tin, I'm 2 years old

const s = "hello world";
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());

const a = "hello, hi, hey, what'sup";
console.log(a.split(","));

// arrays

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apple", "orange", "banana", "oil"];
console.log(fruits[0]);

const person = {
  name: "Tin",
  lastName: "Nguyen",
  age: 22,
  hobbies: ["games", "code", "music", "travel"],
  address: {
    street: "123/23 st",
    city: "HCM",
    state: "SG",
  },
};

console.log(person.address.city);

// pull things out
const {
  name: Nam,
  lastName,
  address: { city, state },
} = person;
console.log(state);

//arrays storing data
const todos = [
  {
    id: 1,
    text: "hihi",
    iscompleted: true,
  },
  {
    id: 2,
    text: "sg",
    iscompleted: true,
  },
  {
    id: 3,
    text: "blabla",
    iscompleted: false,
  },
];

console.log(todos[2].text);

// // for loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`10 * i = ${i * 10}`);
// }

// // while loop
// let q = 1;
// while (q <= 10) {
//   console.log(`10 * q = ${q * 10}`);
//   q++;
// }
