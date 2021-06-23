// Falsy value
const foo = "hello";//foo = 0(F); foo = " "(True); foo = obj or array (True)
if (Boolean(foo)) {
    console.log("The foo is true");
}
else {
    console.log("False");
}

const bar = "bar";
switch(bar) {
    case "bar":
        console.log("first case");
        break;
    case "bar2":
        console.log("second case");
        break;
    default:
        console.log("default");
}

let isEven = "even";
const x = 3;
if (x % 2 === 0) {
    isEven = "even";
} 
else {
    isEven = "odd";
}

idEven = X % 2 === 0 ? "even" : "odd";
console.log(isEven);