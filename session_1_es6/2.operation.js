// arithmetic
console.log("+: ", 1 + 1)//True;
console.log("-: ", 1 - 1);//True
console.log("*: ", 1 * 1);//False
console.log("/: ", 1 / 1);//False

console.log("*=*: ", 2 **"1");//2 mu 3
console.log('%', 3 % 2);//chia lay du


// logical
console.log("&&: ", true && false);
console.log("||: ", true || false);
console.log(true && "hello");//Ket qua la hello
console.log("true" || "helo");//Ket qua 1 trong hai

// relational
console.log(">: ", 1 > 0);//True
console.log(">=: ", 1>= 0);//True
console.log("<: ", 1 < 0);//False
console.log("<=: ", 1 <= 0);//False
console.log("==: ", 1 == 0);//False
console.log("===: ", 1 === "1");//True
console.log("==: ", 1 == "1");//True
console.log("!=", 1 != 0);//T
console.log(">: ", "hello" > "world");//string sap xep theo thu tu tu a-->z 0-->9

//assignment
let sum = 1 + 2;
sum += 1;
sum -= 1;
sum *= 1;
sum /= 1;