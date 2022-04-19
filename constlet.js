
//ES2015부터 const와 let이 대체
// 차이점 : 블록 스코프 ( var은 함수 스코프)

if(true){
    var x = 3;
}
console.log(x);

// y is not defined
// 블록 스코프를 못 빠져나감
if(true){
    const y = 3;
}
console.log(y);

// z is not defined
// 함수 스코프
function a() {
    var z = 3;
}
console.log(z);