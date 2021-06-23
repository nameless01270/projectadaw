// string
// number
// boolean
// null
// undefined
//object/array

let number = 1;//So mau xanh chu mau den
console.log(number, typeof number);

let string = "1";
console.log(string, typeof string);

let bool = true;
console.log(bool, typeof bool);

let obj = {};
console.log(obj, typeof obj);

let arr = [];
console.log(arr, typeof arr);

const x = 1;
const y = 1;
console.log(x === y);//True

const x = {};
const y = {};
console.log(x === y);//False(Hai dữ liệu khác ô nhớ )
//  Primitive                   Reference
const x = {};
const y = x;
console.log(x === y);//True (y và x trỏ cùng 1 ô nhớ)
x.name = "mindx";
console.log(y);