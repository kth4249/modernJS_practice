// 예제 코드
// {{ 함수 선언 (function declaration) }}
function showMessage(from, text) {

    from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
  
    console.log( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  // 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
  console.log( 'from = ' + from ); // Ann

// [기본값]
// 매개변수에 값을 전달하지 않으면 그 값은 undefined가 됩니다.
showMessage("Ann");  // *Ann*: undefined

// 매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 '기본값(default value)'을 설정해주면 됩니다.
function showMessage2(from, text = "no text given") {
    console.log( from + ": " + text );
}
  
showMessage2("Ann");

// 아래와 같이 기본값을 함수로 설정할 수도 있음.
// function showMessage(from, text = anotherFunction()) {
//     // anotherFunction()은 text값이 없을 때만 호출됨
//     // anotherFunction()의 반환 값이 text의 값이 됨
// }


// 매개변수 기본값을 설정할 수 있는 또 다른 방법
function showMessage3(text) {
    if (text === undefined) {
      text = '빈 문자열';
    }
  
    console.log(text);
}
showMessage3(); // 빈 문자열
showMessage3(0); // 0
showMessage3(''); // ''


// 이렇게 if문을 쓰는 것 대신 논리 연산자 ||를 사용할 수도 있습니다.

// 매개변수가 생략되었거나 빈 문자열("")이 넘어오면 변수에 '빈 문자열'이 할당됩니다.
function showMessage4(text) {
    text = text || '빈 문자열';
    console.log(text);
}
showMessage4(0); // '빈 문자열'
showMessage4(''); // '빈 문자열'
// 그러나 이렇게 쓸 경우 0이나 ''(빈 문자열)이 넘어오면 text에 '빈 문자열'이 대입됨.
// 이를 방지하기 위해 '??'를 사용할 수 있음.


// [반환 값]
// return문이 없거나 return 지시자만 있는 함수는 undefined를 반환합니다.
// return문이 없는 함수도 무언가를 반환합니다. undefined를 반환하죠.
function doNothing() {
    // return;
} 
console.log( doNothing() === undefined ); // true

// * 반환하려는 표현식을 여러 줄에 걸쳐 작성하고 싶다면 표현식이 return 지시자가 있는 줄에서 시작하도록 작성해야 합니다. 
// 또는 아래와 같이 여는 괄호를 return 지시자와 같은 줄에 써줘도 괜찮습니다.
// return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
// )


// [함수 이름짓기 규칙]
// "show"로 시작하는 함수는 대개 무언가를 보여주는 함수입니다.
// "get…" – 값을 반환함
// "calc…" – 무언가를 계산함
// "create…" – 무언가를 생성함
// "check…" – 무언가를 확인하고 불린값을 반환함


// {{ 함수 표현식 (function Expression) }}
let sayHi = function() {
    console.log( "Hello" );
}; 
// 함수를 만들어 sayHi라는 변수에 대입
// 값처럼 취급하여 대입되기 때문에 ';'이 끝에 붙음
let func = sayHi; // 함수 복사


// [콜백 함수]
function ask(question, yes, no) {
    if (question ?? false) yes()
    else no();
}
  
function showOk() {
    console.log( "동의하셨습니다." );
}
  
function showCancel() {
    console.log( "취소 버튼을 누르셨습니다." );
}
  
// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask(0, showOk, showCancel);
console.log(0 ?? false);


// 아래와 같이 함수 표현식을 사용하면 코드 길이가 짧아집니다.
ask(
    "동의하십니까?",
    function() { console.log("동의하셨습니다."); },
    function() { console.log("취소 버튼을 누르셨습니다."); }
);



// {{ 함수 표현식 vs 함수 선언문 }}
// 1. 문법
// 함수 선언문: 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재합니다.
function sum1(a, b) {
    return a + b;
}

// 함수 표현식: 함수는 표현식이나 구문 구성(syntax construct) 내부에 생성됩니다.
let sum2 = function(a, b) {
    return a + b;
};


// 2. 자바스크립트 엔진이 언제 함수를 생성하는지
// 함수 선언문 : 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
// ->  자바스크립트는 스크립트를 실행하기 전, 준비단계에서 전역에 선언된 함수 선언문을 찾고, 해당 함수를 생성
// 함수 표현식 : 
// 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.
// 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.


// 3. 스코프
// 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다.
// 하지만 블록 밖에서는 함수에 접근하지 못합니다.
let age = 18;

// 조건에 따라 함수를 선언함
if (age < 18) {

  function welcome() {
    console.log("안녕!");
  }

} else {

  function welcome() {
    console.log("안녕하세요!");
  }

}

// 함수를 나중에 호출합니다.
// welcome(); // Error: welcome is not defined

// 그렇다면 if문 밖에서 함수를 호출할 방법은?
age = 18;

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("안녕!");
  };

} else {

  welcome = function() {
    console.log("안녕하세요!");
  };

}

welcome(); // 제대로 동작합니다.