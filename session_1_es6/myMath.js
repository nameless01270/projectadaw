const myMath = {
    sum: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
};

function multi(a, b) {
    return a * b;
}

function pow(a, b) {
    return a ** b;
}

export { multi, pow};//export theo tên 

export default myMath;// default export
//trong 1 file chỉ có 1 lần default duy nhất
