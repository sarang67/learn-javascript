import "./style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;

// Object shorthand and dynamic key

const drink = {
  name: "coca-cola",
  id: "🍾",
  price: {
    sale: 99,
    regular: 200,
  },
};

const dName = "coca-cola";
const dId = "🍾";

const drink2 = {
  name: dName,
  id: dId,
  price: {
    sale: 99,
    regular: 200,
  },
};

const name = "coca-cola";
const id = "🍾";
const brand = "soft drink";
const keyPrice = "kk";

const drink3 = {
  name, // name:name
  id, // id: id
  brand: brand,
  [keyPrice]: {
    sale: 99,
    regular: 200,
  },
};

console.log(drink3);

=================================
// Object  destructuring

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

/*
const drinkName = drink.name;
const drinkId = drink.id;
const drinkBrand = drink.brand;
const drinkSale = drink.price.sale;
const drinkPrice = drink.price.regular;

console.log(drink);
console.log(drinkName, drinkId, drinkBrand, drinkSale, drinkPrice);
*/

/*

const brand = "hard drink";
//destructuring (LHS) = object (RHS)
// {} = {}

const {
  name,
  id,
  brand: mysoftdrinkBrand,
  price: { sale, regular },
} = drink;

//const { sale, regular } = price;

console.log(name, id, mysoftdrinkBrand, sale, regular);
*/

/*
  LHS = RHS
  ...rest  = {}

  const ...rest = 1,2,3
  function anyfn(...rest){

  }

  anyfn(1,2,3)

*/

const { brand, ...restObj } = drink;

console.log(brand, restObj);
console.log(drink);

==============================

// Object  property exitince check

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

if (drink.id) {
  console.log("// do something with this id drink");
}

const myBrand = "softdrink";

if (drink.brand === myBrand) {
  console.log("do something");
}

for (const prop in drink) {
  console.log(prop);
  if (drink[prop] === myBrand) {
    console.log("yes property value found here");
  }
}


console.log(drink);
// property existance
console.log(Object.keys(drink));
console.log(Object.keys(drink).includes("id"));

// value existance
console.log(Object.values(drink));
console.log(Object.values(drink).includes("🍾"));


====================================
// Object  property add and update

const drink = {
  // name: "coca-cola",
  // id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};


// way 1 add and update property
// addigng property
// drink.name = "coca-cola";
// drink.id = "🍾";

// console.log(drink);

// // updating
// drink.name = "pepsi";
// drink.id = "🍷";


// way 2 add and update property
function addUpdateObj(prop, value) {
  drink[prop] = value;
}

addUpdateObj("name", "coca-cola");
addUpdateObj("id", "🍾");

addUpdateObj("name", "pepsi");
addUpdateObj("id", "🍷");

console.log(drink);

=======================================
// Object  property remove

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

// slow proces
delete drink.brand;
console.log(drink);

// way 2
const { brand, ...drinkWithoutBrand } = drink;
console.log(drinkWithoutBrand);



/*
 we have always two type of method in Parent Function constructor

 1) static properties // we can use directly via parent name (function constructor name)
 2) prototype properties // instance can use prototype method or properties

  var str = new String(){}  str.slice() / str.trim()

  var myFrind = [1,2,3]
  myFrind.isArray()  // Array.isArray()
 
 */
