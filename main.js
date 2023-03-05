import "./style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;

// 1) how to create array
// array literal way --preferred way

const drink = ["coke", "pepsi", "thumbsup"];
console.log(drink);

const drink2 = new Array("coke", "pepsi", "thumbsup");
console.log(drink2);

const drink3 = Array("coke", "pepsi", "thumbsup"); // new Array("coke", "pepsi", "thumbsup");
console.log(drink3);

// js array --> collection of anything

const collection = [
  "sarang",
  34,
  true,
  ["kk", "abhishek", "sonu"],
  { city: "gwalior", colony: "vinaynagar" },
  function () {
    console.log("test");
  },
];

console.log(collection);

----------------

// 2 array --> mutable data structure , pass by refrence(address)

const drink = ["coke", "pepsi", "thumbsup"];

const drink2 = drink;

drink2.push("water");
drink.push("soda-water");

console.log(drink);
console.log(drink2);

-------------------------------

// 2 array , indexes and properties

let drink = ["coke", "pepsi", "thumbsup", "water"];

console.log(drink[0]);
console.log(drink["1"]);
console.log(drink["2"]);

drink[0] = "cocacola";

//drink["favDrink"] = "limca";

// access element --> first emelemt
console.log(drink[0]);

// access element --> last emelemt
console.log(drink[drink.length - 1]);

// need to make empty array
// --> not recommended
//drink = [];

//recommended
drink.length = 0;
console.log(drink);
==============================
// 2 multi dimenssional array :- array inside array
//[[], [], []];
//[[[]] , [[]] , [[]]]

const drink = [["coke", 99], ["pepsi, 90"], ["thumbsup", 50]];

const drinkName = drink[0][0];
const drinkCost = drink[0][1];

console.log(drinkName, drinkCost);

====================================
// 4 array destructure

const drink = [
  ["coke", 99],
  ["pepsi", 90],
  ["thumbsup", 50],
];

// const drinkOne = drink[0];
// const drinkTwo = drink[1];
// const drionkTwoName = drink[1][0];
// const drionkTwoPrice = drink[1][1];
// const drinkThree = drink[2];

//const [drinkOne, drinkTwo, drinkThree] = drink;
//console.log(drinkOne, drinkTwo, drinkThree);

//const [drinkOne, [drinkTwoName, drinkTwoPrice], drinkThree] = drink;
//console.log(drinkOne, drinkTwoName, drinkTwoPrice, drinkThree);

// const [drinkOne, , drinkThree] = drink;
// console.log(drinkOne, drinkThree);

const drinks = ["coke", "pepsi", "thumbsup", "mirinda"];
const [drink1, d2, ...restDrink] = drinks;
console.log(drink1, d2, restDrink);


// 4 array destructure

const drink = [
  ["coke", 99],
  ["pepsi", 90],
  ["thumbsup", 50],
];

// const drinkOne = drink[0];
// const drinkTwo = drink[1];
// const drionkTwoName = drink[1][0];
// const drionkTwoPrice = drink[1][1];
// const drinkThree = drink[2];

//const [drinkOne, drinkTwo, drinkThree] = drink;
//console.log(drinkOne, drinkTwo, drinkThree);

//const [drinkOne, [drinkTwoName, drinkTwoPrice], drinkThree] = drink;
//console.log(drinkOne, drinkTwoName, drinkTwoPrice, drinkThree);

// const [drinkOne, , drinkThree] = drink;
// console.log(drinkOne, drinkThree);

// const drinks = ["coke", "pepsi", "thumbsup", "mirinda"];
// const [drink1, d2, ...restDrink] = drinks;
// console.log(drink1, d2, restDrink);

const [d1, ...restDrinks] = drink;
console.log(d1, restDrinks);


// 5 array spread parameter

const drinkOne = ["coke", "pespsi", "limca"];
const drionkTwo = ["tea", "cofee", "soup"];

const allDrinks = ["maza", ...drionkTwo, "slice", ...drinkOne, "hot water"];
console.log(allDrinks);



