import "./style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;

// object properties and method value

// // function in Depth

// console.dir(Function.prototype);

// function greet() {
//   console.log("hello");
// }

// greet();
// greet.call(); // immediatly
// greet.apply(); // immediatly
// let greetFOrFuture = greet.bind(); // keeping this now , future main kabhi bhi call ker lenaa
// greetFOrFuture();
// // call , apply , bind

// console.log("----------------------------");

// // we can change the behaviour of this keyword of any function/method from call , apply and bind

// // const firstCar = {
// //   id: "vsrqkjd",
// // };

// // const secondCar = {
// //   id: "ywqvdofp",
// // };
// // const thirdCar = {
// //   id: "tetywvn",
// // };

// // // function logId() {
// // //   console.log(this.id); // this --> undefined / window
// // // }

// // // logId.call(firstCar);
// // // logId.apply(secondCar);
// // // const futureLogFn = logId.bind(thirdCar);
// // // futureLogFn();

// // console.log("---------------------");

// // const firstCar = {
// //   id: "vsrqkjd",
// //   logId() {
// //     console.log(this.id); // this --> undefined / window
// //   },
// // };

// // const secondCar = {
// //   id: "ywqvdofp",
// // };
// // const thirdCar = {
// //   id: "tetywvn",
// // };

// // firstCar.logId();

// // firstCar.logId.call(secondCar);
// // firstCar.logId.apply(thirdCar);

// // //--------------------

// // var arr1 = [1, 2, 3];
// // arr1.push(5);
// // console.log(arr1);

// // var arr2 = [9, 8, 7];
// // arr1.push.call(arr2, 15);
// //  arr1.push.apply(arr2, [15]);
// // console.log(arr2);

// console.log("-------------------");

// const firstCar = {
//   id: "vsrqkjd",
// };

// const secondCar = {
//   id: "ywqvdofp",
// };
// const thirdCar = {
//   id: "tetywvn",
// };

// function carPartId(name, quantity) {
//   console.log(`${this.id}_${name}_${quantity}`);
// }

// //carPartId("bmw", 20);
// carPartId.call(firstCar, "BMW", 20);

// // apply --> array form parameter
// carPartId.apply(secondCar, ["porsche", 30]);

// // bind
// const boundtheCar = carPartId.bind(thirdCar, "mahindra", 50);
// boundtheCar();

// console.log("----------------");
// const boundCar1 = carPartId.bind(thirdCar, "tata", 80);
// boundCar1();

// const boundCar2 = carPartId.bind(thirdCar, "tata");
// boundCar2(90);

// const boudCar3 = carPartId.bind(thirdCar);
// boudCar3("tata", 700);

// console.log("----------");

// let math1 = {
//   a: 10,
//   b: 20,
// };

// function add(p1, p2) {
//   console.log(p1, p2);
//   console.log(this.a + this.b);
// }

// add.call(math1, "test", "test2");
// add.apply(math1, ["test", "test2"]);

// const futureadd = add.bind(math1);
// futureadd("test", "test2");

// console.log("============================");

// function checkThis() {
//   console.log(this); // undefined / window
// }

// let myArray = [1, 2, 3];
// let myObj = { name: "sarang", age: 34 };
// let myString = "sarang";
// let myno = 10;
// let mybool = true;
// let mydate = new Date();

// checkThis.call(myArray);
// checkThis.apply(myObj);
// checkThis.bind(myString)();
// checkThis.call(myno);
// checkThis.apply(mybool);
// checkThis.bind(mydate)();

// // this --> variable as per guideline


// ****************************************************************************

// // object iteral form
// const drink = {
//   price: {
//     sale: 99,
//     regular: 200,
//   },
//   name: "coca-cola",
//   id: "🍾",
//   otherDrinks: ["pepsi", "thumbsup", "mazza"],
//   getDrinks: function () {
//     console.log(`${this.name} and ${this.price.regular}`);
//   },
// };

// console.log(drink);
// drink.getDrinks();

// console.log(drink.price);
// console.log(drink.price.regular);
// console.log(drink.name);

// // object using function constructor

// const drink2 = new Object();

// drink2.name = "coca-cola";
// drink2.price = { sale: 99, regular: 200 };
// drink2.getDrinks = function () {
//   console.log(`${this.name} and ${this.price.regular}`);
// };
// console.log(drink2);

// const drink3 = Object(); // Object() ---> new Object();
// console.log(drink3);

// const no = new Number();
// console.log(no);

// const no2 = Number();
// console.log(no2);

// console.log("----------------");
// var noOBj = Object(1);
// console.log(noOBj);

// var stringOBj = new Object("sarang");
// console.log(stringOBj);

// var myBool = Object(true);
// console.log(myBool);

// var myArr = new Object([1, 2, 3]);
// console.log(myArr);

// var myfn = Object(() => {});
// console.log(myfn);


// *************************
// // objecta are mutable and they are pass by refrence/address
// // premitive type are immutabale and they are pass by value

// const drink = {
//   price: 99,
//   name: "coca-cola",
//   id: "🍾",
// };

// const refrenceDrink = drink;

// refrenceDrink.name = "pepsi";
// drink.price = "999";

// console.log(drink);
// console.log(refrenceDrink);

// ====================================
// // object properties and method value

// const drink = {
//   price: {
//     sale: 99,
//     regular: 200,
//   },
//   name: "coca-cola",
//   id: "🍾",
//   otherDrinks: ["pepsi", "thumbsup", "mazza"],
//   getDrinks: function () {
//     console.log(`${this.name} and ${this.price.regular}`);
//   },
//   "abc 123": "I am another value",
//   100: "i am a number",
// };

// console.log(drink.name);
// console.log(drink["name"]);
// console.log(drink["abc 123"]);
// console.log(drink[100]);
// console.log(drink["100"]);

// let savedStr = "name";
// console.log(drink[savedStr]);

// ============================

// // object properties and method value

// const drink = {
//   price: {
//     sale: 99,
//     regular: 200,
//   },
//   name: "coca-cola",
//   id: "🍾",
//   otherDrinks: ["pepsi", "thumbsup", "mazza"],
//   getDrinks: function () {
//     console.log(`${this.name} and ${this.price.regular}`);
//   },
//   "abc 123": "I am another value",
//   100: "i am a number",
// };

// console.log(drink.name);
// console.log(drink["name"]);
// console.log(drink["abc 123"]);
// console.log(drink[100]);
// console.log(drink["100"]);

// let savedStr = "name";
// console.log(drink[savedStr]);



