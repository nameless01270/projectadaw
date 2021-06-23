console.log("Hello world");
const x = 1;
// wrong
// x = 2
const arr=[];
arr.push(1);

// hoisting
console.log("y:", y);
var y = 1;
y = 2;
// 

// error
console.log("z:", z);
let z = 1;
z = 2;
// 

// scope
var foo = "foo";
let bar = "bar";

if (bar = "bar") {
    var foo = "foo";
}
// Neu "let foo" thi broke code
console.log(foo);

