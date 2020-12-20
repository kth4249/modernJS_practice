// {{ 'new' 연산자와 생성자 함수 }}
/*
[생성자 함수]
- 함수 이름의 첫 글자는 대문자로 시작합니다.
- 반드시 "new" 연산자를 붙여 실행합니다.
*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false
/**
new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.

빈 객체를 만들어 this에 할당합니다.
함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
this를 반환합니다.
예시를 이용해 new User(...)가 실행되면 무슨 일이 일어나는지 살펴 보도록 하겠습니다.

function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
} */



/** 참고사항 [new.target과 생성자 함수]
-이 절에서 소개할 문법은 자주 쓰이지 않습니다.
new.target 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있습니다.

일반적인 방법으로 함수를 호출했다면 new.target은 undefined를 반환합니다.
반면 new와 함께 호출한 경우엔 new.target은 함수 자체를 반환해줍니다.

function User() {
  alert(new.target);
}

// "new" 없이 호출함
User(); // undefined

//"new"를 붙여 호출함
new User(); // function User { ... }
함수 본문에서 new.target을 사용하면 해당 함수가 new와 함께 호출되었는지(“in constructor mode”)
아닌지(“in regular mode”)를 확인할 수 있습니다.

이를 활용해 일반적인 방법으로 함수를 호출해도 new를 붙여 호출한 것과 같이 동작하도록 만들어보겠습니다.

function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let john = User("John"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(john.name); // John
*/


// [생성자와 return문]
// return문이 있는 생성자 함수는 거의 없으므로 참고만 할 것.
function BigUser() {

    this.name = "John";

    return { name: "Godzilla" };  // <-- this가 아닌 새로운 객체를 반환함
    // return; <-- this를 반환함
    // return "원시형"; <-- this를 반환함
}
console.log(new BigUser().name);  // Godzilla