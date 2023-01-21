import "./style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>Modern JavaScript: Basic</h1>
  `;

("use strict");

let obj = {
  myname: "sarang",
  getName: function () {
    console.log(this);
  }, 
};

obj.getName();

/*

1) this will point in global context  --> window object in case of strict mode --> undefied
2) this will point in the function or function expression ---> window object in case of strict mode --> undefined
3) this will point in the method --> its own object  in case of stric mode same behavior
4) there is no by default behaviour of this in case of fat arrow, 
      this will point out where or in which scope fat arrow has been written

*/

console.dir(Function.prototype);

function test() {}
console.log(test);

console.log(test.call);
console.log(test.apply);
console.log(test.bind);
