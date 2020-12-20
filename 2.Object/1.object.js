// {{ 객체 (Objet) }}
/*
    빈 객체를 만드는 방법
    let user = new Object(); // '객체 생성자' 문법
    let user = {};  // '객체 리터럴' 문법
*/

// 리터럴과 프로퍼티
let user = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30       // 키: "age", 값: 30
};

// 프로퍼티 추가
user.isAdmin = true;

// 프로퍼티 삭제
delete user.age;

/** 마지막 프로퍼티 끝은 쉼표로 끝날 수 있습니다.
 *  let user = {
        name: "John",
        age: 30,
    }
 */

 // 상수 객체는 수정될 수 있습니다.
 const user1 = {
    name: "John"
  };
  
  user1.name = "Pete"; // (*)
  
  console.log(user1.name); // Pete


// [대괄호 표기법]
// 여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없습니다.
let user2 = {};

// set
user2["likes birds"] = true;

// get
console.log(user2["likes birds"]); // true

// delete
delete user2["likes birds"];

// 대괄호 표기법을 사용하면 아래 예시에서 변수를 키로 사용한 것과 같이 문자열뿐만 아니라
// 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있습니다.
let key = "likes birds";

// user["likes birds"] = true; 와 같습니다.
user2[key] = true;


// [계산된 프로퍼티]
// 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우,
// 이를 계산된 프로퍼티(computed property) 라고 부릅니다
// let fruit = propmt("어떤 과일을 구매하시겠습니까?", "apple");
let fruit = "apple"

let bag = {
    [fruit] : 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};

console.log(bag.apple);

// 대괄호 안에는 복잡한 표현식이 올 수도 있습니다.
fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
/**
 * 대괄호 표기법은 프로퍼티 이름과 값의 제약을 없애주기 때문에 점 표기법보다 훨씬 강력합니다.
 * 그런데 작성하기 번거롭다는 단점이 있습니다. 
 * 이런 이유로 프로퍼티 이름이 확정된 상황이고, 단순한 이름이라면 처음엔 점 표기법을 사용하다가
 * 뭔가 복잡한 상황이 발생했을 때 대괄호 표기법으로 바꾸는 경우가 많습니다. 
 *
*/


// [단축 프로퍼티]
// 키와 값의 변수이름이 동일할 때 사용
// name:name 대신 name만 적어주어도 프로퍼티를 설정할 수 있음.
function makeUser(name, age) {
    return {
      name, // name: name 과 같음
      age: 30, // 일반 프로퍼티도 같이 사용 가능
      // ...
    };
}


// [프로퍼티 이름의 제약사항]
// ‘for’, ‘let’, ‘return’ 같은 예약어에 대한 제약이 없음.
let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log( obj.for + obj.let + obj.return );  // 6

// 역사적인 이유 때문에 특별 대우를 받는 이름이 하나 있습니다.
// 바로, __proto__입니다.
let obj2 = {};
obj2.__proto__ = 5; // 숫자를 할당합니다.
console.log(obj2.__proto__); // [object Object]
// 원시값 5를 할당했는데 무시된 것을 확인할 수 있음.


// [‘in’ 연산자로 프로퍼티 존재 여부 확인하기]
// 문법
// "key" in object
let user3 = { name: "John", age: 30 };

console.log( "age" in user3 ); // user.age가 존재하므로 true가 출력됩니다.
console.log( "blabla" in user3 ); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.

// "=== undefined"를 통해 프로퍼티 존재 여부를 알아내는 방법도 있으나
// 의도적으로 value에 undefined를 넣으면 결과가 다르게 나옴.
let obj3 = {
    test: undefined
};

console.log( obj3.test ); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.
console.log( "test" in obj3 ); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).


// [‘for…in’ 반복문]
// for..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있습니다
let user4 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user4) {
    // 키
    console.log( key );  // name, age, isAdmin
    // 키에 해당하는 값
    console.log( user4[key] ); // John, 30, true
} 