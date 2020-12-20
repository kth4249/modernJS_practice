// {{ 객체 복사, 병합과 Object.assign }}
// 깊은 복사

// ['for in 문을 사용한 객체 복사]
let user = {
    name: "John",
    age: 30
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
    clone[key] = user[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete"; // clone의 데이터를 변경합니다.

console.log(user.name); // 기존 객체에는 여전히 John이 있습니다.

// [Object.assign를 사용하는 방법]
// Object.assign은 객체를 병합하는 함수로 아래 예제와 같이 사용
let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user2, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// 이를 이용해 Object.assign을 사용하면 반복문 없이도 간단하게 객체를 복사할 수 있습니다.
let user3 = {
    name: "John",
    age: 30
};

let clone2 = Object.assign({}, user3);


// [중첩 객체 복사]
/**
 * let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.

이 문제를 해결하려면 user[key]의 각 값을 검사하면서, 
그 값이 객체인 경우 객체의 구조도 복사해주는 반복문을 사용해야 합니다.
*/