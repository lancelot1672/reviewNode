const a = 3;
// a= 5;
// error => typescript에선 에러가 표시됨
// 에러가 표시되지 않지만 에러남
// Assignment to constant variable.
console.log(a);

// let은 var 대신 사용됨

let b = 3;
b= 10;
console.log(b);