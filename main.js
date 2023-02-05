import "./style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;

// OBJECT iteration
// rest operator(...) / spread operator (...)

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

const drink2 = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
};

const price2 = {
  sale: 99,
  regular: 200,
};

/*
  LHS (rest) = RHS (spread)
*/

const spreadObj = { ...drink2, age: 44, ...price2 };

console.log(spreadObj);

-------------------------------------------------

// property exstance

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },

  hasOwnProperty() {
    return false;
  },
};

console.log(drink.hasOwnProperty("brand"));
console.log(Object.prototype.hasOwnProperty.call(drink, ["brand"]));

console.log(drink);

---------------------
// pobject cloning and problem // shallow copy and deep copy

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

// Object.assign() and spread dont work when its come to the deep copy

// way 1
//const anotherDrink = drink;
//const anotherDrink = Object.assign({}, drink); // cloning ref break

// way 2 spread
//const anotherDrink = { ...drink };
console.log(drink);

//anotherDrink.brand = "hard drink";

const drinkString = JSON.stringify(drink);
const anotherDrink = JSON.parse(drinkString);

anotherDrink.price.sale = 200;
console.log(anotherDrink);
====================================
// oBJECT MERGING

const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

const drink2 = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
};

const price = {
  sale: 99,
  regular: 200,
};

const mergeObj = { ...drink2, ...price };
const mergeObj2 = Object.assign({}, drink2, price);

const mergeObj3 = { ...drink2, price };
const mergeObj4 = Object.assign({}, drink2, { price });

console.log(mergeObj);
console.log(mergeObj2);
console.log("-----------------------");
console.log(mergeObj3);
console.log(mergeObj4);


==================================================
// OBJECT type checking
const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

const arr = [1, 2, 3];
const num = 5;

const http = new XMLHttpRequest();

console.log(typeof drink);
console.log(typeof []);
console.log(typeof null); // javascript bug

console.log({} instanceof Object);
console.log(new Object() instanceof Object);
console.log([] instanceof Object);
console.log(new Array() instanceof Object);

console.log(getType(drink));
console.log(getType(arr));
console.log(getType(num));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(false));
console.log(getType(http));
console.log(getType(() => {}));

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

==============================================

// OBJECT iteration
const drink = {
  frindName: [1, 2, 3],
  name: "coca-cola",
  id: "🍾",
  //brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

// for in

for (let prop in drink) {
  console.log(prop); // name
  console.log(drink[prop]); // "coca-cola"

  if (Object.prototype.toString.call(drink[prop]).slice(8, -1) === "Object") {
    for (let key in drink[prop]) {
      console.log(key);
      console.log(drink[prop][key]);
    }
  }
}

=================================
// OBJECT iteration
const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

// for in

for (let prop in drink) {
  console.log(prop); // name
  console.log(drink[prop]); // "coca-cola"

  if (Object.prototype.toString.call(drink[prop]).slice(8, -1) === "Object") {
    for (let key in drink[prop]) {
      console.log(key);
      console.log(drink[prop][key]);
    }
  }
}

==============================
// OBJECT iteration
const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

const keys = Object.keys(drink);
keys.forEach((key) => {
  console.log(drink[key]);
});

console.log(Object.entries(drink));

const entries = Object.entries(drink);

console.log(Object.fromEntries(entries));

Object.freeze(drink);
console.log(Object.isExtensible(drink));

//drink.test = "check";
//console.log(drink);

======================
// OBJECT iteration
const drink = {
  name: "coca-cola",
  id: "🍾",
  brand: "softdrink",
  price: {
    sale: 99,
    regular: 200,
  },
};

const keys = Object.keys(drink);
keys.forEach((key) => {
  console.log(drink[key]);
});

console.log(Object.entries(drink));

const entries = Object.entries(drink);

console.log(Object.fromEntries(entries));

Object.freeze(drink);
console.log(Object.isExtensible(drink));

//drink.test = "check";
//console.log(drink);


