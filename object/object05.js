// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
// 프로토타입으로 설계한다.
function User(name, age, point){
  this.name = name;
  this.age = age;
  this.point = point;
}

const market = new Object();
const user1 = new User('한동석', 20, 3500)
const user2 = new User('홍길동', 30, 0)
const user3 = new User('이순신', 40, 9500)
market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

console.log(market);

for(let i=0; i<3; i++){
  console.log(market['user' + (i + 1)].name);
}

for(let i=0; i<3; i++){
  console.log(market['user' + (i + 1)].age);
}

for(let i=0; i<3; i++){
  console.log(market['user' + (i + 1)].point);
}