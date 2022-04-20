// 클래스
// 프로토타입 문법을 깔끔하게 작성할 수 있는 Class 문법 도입
class Human {
    constructor(type = 'human'){
        this.type = type;
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    };

}