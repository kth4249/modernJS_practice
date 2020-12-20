// [논리 연산자]

//#### "||""(OR) ####
// - 첫 번째 truthy를 찾는 OR 연산자 ‘||’
// let result = value1 || value2 || value3;

// OR ||연산자는 다음 순서에 따라 연산을 수행합니다.
// - 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
// - 각 피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
// - 피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환합니다.

// - 수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "";

console.log( firstName || lastName || nickName || "익명"); // 바이올렛
// 모든 변수가 비어있을 경우에 "익명" 출력


// - 단락 평가
true || console.log("not printed"); // true 를 만나면 끝나기 때문에 console이 찍히지 않음
false || console.log("printed"); // console이 찍힘


// #### "&&"(AND) ####
// - 첫 번째 falsy를 찾는 AND 연산자 ‘&&’
// let result = value1 && value2 && value3;
// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
console.log( null && 5 ); // null
console.log( 0 && "아무거나 와도 상관없습니다. " ); // 0

// 여러 개를 연속해서 전달할 경우

// 중간에 falsy를 만나면 falsy를 반환
console.log( 1 && 2 && null && 3 ); // null

// 아래 예시에선 AND 연산자의 피연산자가 모두 truthy이기 때문에 마지막 피연산자가 반환됩니다.
console.log( 1 && 2 && 3 ); // 마지막 값, 3


// "!" (NOT)
// 피연산자를 불린형(true / false)으로 변환합니다.
console.log( !true ); // false
console.log( !0 ); // true

// NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
// -> 내장 함수 Boolean을 사용하면 !!을 사용한 것과 같은 결과를 도출
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false



// -* null 병합 연산자 '??'
// null 병합 연산자(nullish coalescing operator) ??를 사용하면 
// 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있습니다.

// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b

// null 병합 연산자 ??없이 x = a ?? b와 동일한 동작을 하는 코드를 작성하면 다음과 같습니다.
// x = (a !== null && a !== undefined) ? a : b;

firstName = null;
lastName = null;
nickName = "Supercoder";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// '??'와 '||'의 차이
let height = 0;

alert(height || 100); // 100
// 0을 falsy한 값으로 취급하기 때문에 100이 출력
alert(height ?? 100); // 0
// 0이라는 값도 할당이 된 값이기 때문에 0을 출력
// 이런 특징 때문에 높이처럼 0이 할당될 수 있는 변수를 사용해 기능을 개발할 땐 ||보다 ??가 적합합니다.

// ** ??엔 자바스크립트 언어에서 규정한 또 다른 제약사항이 있습니다.
// 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못합니다.
// 제약을 피하려면 괄호를 사용해주세요.