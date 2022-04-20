const obj = (x,y) =>{
    return {x,y};
}
//중 괄호 다음 바로 return이 나오는경우 return 생략가능

//객체를 return하는 경우에는 소괄호 필수
const obj2 = (x,y) => ({x,y});

//funtion을 같이 쓰는 이유
// this 때문
// 화살표 함수는 부모의 this를 가져와 사용한다. (자기만의 this를 안가진다.)

const relationship1 = {
    name : 'zero',
    friends : ['nero','hero', 'xero'],
    logFriends(){
        this.friends.forEach((e) =>{
            console.log(this.name, e);
        });
    },
}
relationship1.logFriends();

const relationship2 = {
    name : 'zero',
    friends : ['nero','hero', 'xero'],
    logFriends: function(){
        var that = this;
        this.friends.forEach((e) =>{
            console.log(this.name, e);
        });
    }
}
relationship2.logFriends();

//error
// const relationship3 = {
//     name : 'zero',
//     friends : ['nero','hero', 'xero'],
//     logFriends: ()=>{
//         this.friends.forEach((e) =>{
//             console.log(this.name, e);
//         });
//     }
// }
// relationship3.logFriends();