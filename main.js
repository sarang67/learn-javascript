import "./style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;


// add element in the array

// const drink = ["coke", "pepsi", "thumbsup", "mirinda"];

// on first place ,  mutable way
//drink.unshift("water");

// on last place ,  mutable way
//drink.push("mirinda");

// on first place ,  immutable way
//const drink1 = ["water", ...drink];
// on last place ,  immutable way
//const drink2 = [...drink, "mirinda"];

// console.log(drink1);
// console.log(drink2);
// console.log(drink);

// add element on anywhere mutable way
//const drink = ["coke", "pepsi", "thumbsup", "mirinda"];
//const index = 2; // water
//drink.splice(index, 0, "water");
//console.log(drink);

/*
//splice(startIndex , deletecount , newelement) and return a deleted item's array, and its a mutable method

// console.log(["coke", "pepsi", "thumbsup", "mirinda"].splice(0));
// console.log(["coke", "pepsi", "thumbsup", "mirinda"].splice(0, 2));
// console.log(["coke", "pepsi", "thumbsup", "mirinda"].splice(2, 3));
// console.log(["coke", "pepsi", "thumbsup", "mirinda"].splice(2, 0));
//console.log(drink.splice(0, 0, "one"));
*/

// add element in anywhere immutable way , but mutation will happen
// add element on anywhere mutable way
const drink = ["coke", "pepsi", "thumbsup", "mirinda", "limca"];
const index = 2;

const newArr = [...drink.splice(0, index), "water", ...drink.splice(0)];

console.log(newArr);
console.log(drink);


======================
// remove element in the array

const drink = ["coke", "pepsi", "thumbsup", "mirinda"];

// // from first place, mutable
// console.log(drink.shift());

// // from last place, mutable
// console.log(drink.pop());

// console.log(drink);
// console.log("---------------");

// remove from anywhere immutable way
const drink2 = ["coke", "pepsi", "thumbsup", "mirinda"];
const index = 0;

// remove from first place
console.log([...drink2.slice(1)]);

// remove from last place
console.log([...drink2.slice(0, drink2.length - 1)]);

console.log([...drink2.slice(0, index), ...drink2.slice(index + 1)]);


================================


// searching in array , finding

const drink = ["coke", "pepsi", "thumbsup", "mirinda"];
const index = drink.indexOf("mirinda");

if (index !== -1) {
  console.log("drink is available", drink[index]);
} else {
  console.log("drink is not available");
}

console.log(["coke", "pepsi", "thumbsup", "mirinda"].includes("pepsi"));

console.log("---------------------------------");

const drink2 = [
  { id: 1, name: "coke" },
  { id: 2, name: "pepsi" },
  { id: 3, name: "thumbsup" },
  { id: 4, name: "mirinda" },
];

// findIndex , find

// const cb = (element) => {
//   console.log(element);
//   if (element.name === "thumbsup") {
//     return true;
//   }
// };

const indexofArr = drink2.findIndex((elem) => elem.name === "mirinda");
console.log(indexofArr);

if (indexofArr !== -1) {
  console.log("drink obj is available", drink2[index]);
} else {
  console.log("drink is not available");
}

const elementOfArry = drink2.find((elem) => elem.name === "mirinda");
console.log(elementOfArry);

const findMirinda = drink.find((elem) => elem === "mirinda");
console.log(findMirinda);

===========================================

// array shallow and deep cloning

let courses = [
  "angular",
  ["v9", 5000],
  "react",
  ["v16", 5000],
  "javascript",
  ["V6", 5000],
  "typescript",
  ["V3", 5000],
];

//const clone1 = [...courses];
//const clone1 = courses.slice();
//const clone1 = Array.from(courses);

const clone1 = JSON.parse(JSON.stringify(courses));

clone1[0] = "angularupdated";
clone1[1][0] = "v16";

console.log(clone1);
console.log(courses);

=================================
//merging array

let courses = [
  ["angular", 5000],
  ["react", 5000],
  ["javascript", 5000],
  ["typescript", 5000],
];

let courseVue = [["vue", 5000]];
let courseNode = ["node", 5000];

let allCourses = [...courseVue, ...[courseNode], ...courses];

console.log(allCourses);

let allCourses2 = courses.concat(courseVue, [courseNode]);
console.log(allCourses2);
console.log(courses);


===================================

