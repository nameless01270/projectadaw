const arr = [1, 2, 3];
const obj = {foo:"foo value", bar:"bar value"};
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Cú pháp vòng lặp for of
for (let element of arr) {
    console.log(element);
}//lặp qua giá trị có thể lặp được ; ko lặp qua object được

for (let element in arr) {
    console.log(element);
}//lặp qua object được

for (let key in obj) {
    console.log(key);
}

