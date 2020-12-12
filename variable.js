"use strict"
// [let]

let message;
message = 'Hello';
console.log(message);
message = 'World';
console.log(message);

// let message = 'check error';
// num = 5; // error : num is not defined


// [const]
// 변화하지 않는 상수를 저장할 때 사용
const myBirthday = '24.01.1996';
// myBirthday = '25.12.1995'; // error : Assignment to constant variable.


// 대문자 상수
// 기억하기 힘든 값을 변수에 할당하여 사용할 때 사용되는 관습
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 됨
let color = COLOR_ORANGE;
console.log(color); // #FF7F00