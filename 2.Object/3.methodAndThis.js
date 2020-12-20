// 객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.
let user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
    console.log("안녕하세요!");
};

user.sayHi(); // 안녕하세요!

// [메서드와 ‘this’]
// 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.

let user2 = {
    name: "John",
    age: 30,

    sayHi() {
        // 'this'는 '현재 객체'를 나타냅니다.
        console.log(this.name);
        // this를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능
        console.log(user2.name);
    }

};

user2.sayHi(); // John


// [자유로운 “this”]
/**
자바스크립트의 this는 다른 프로그래밍 언어의 this와 동작 방식이 다릅니다. 자바스크립트에선 모든 함수에 this를 사용할 수 있습니다.
아래와 같이 코드를 작성해도 문법 에러가 발생하지 않습니다.
function sayHi() {
  alert( this.name );
}

this 값은 런타임에 결정됩니다. 컨텍스트에 따라 달라지죠.
동일한 함수라도 다른 객체에서 호출했다면 'this’가 참조하는 값이 달라집니다.
 */


// ['this’가 없는 화살표 함수]
// 화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않습니다
let user3 = {
    firstName: "보라",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user3.sayHi(); // 보라
// 예시에서 함수 arrow()의 this는 외부 함수 user.sayHi()의 this가 됩니다.


function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user4 = makeUser();

console.log(user4.ref.name); // undefined



// *[체이닝]
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();