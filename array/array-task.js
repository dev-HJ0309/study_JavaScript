// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0);
// datas.forEach((v, i, ar) => {
//   ar[i] = i + 1;
// });
// datas = datas.map((data, i) => i + 1);
// datas.forEach((data) => {
//   if (data % 2 == 0) {
//     console.log(data);
//   }
// });
// console.log(datas.filter((data) => data % 2 == 0));
//                               2로 나눈 후 나머지가 0

// 한글을 숫자로
// const hangle = "공일이삼사오육칠팔구".split("");
// _________________________________________________
// console.log(hangle)
// "공일이삼사오육칠팔구"에 split("")을 써서 각각을 조각조각 내서 배열에 담는다
// ['공', '일', '이', '삼' , '사', '오','육', '칠', '팔','구']
// index 값은 각 0 ,1, 2, 3, 4, 5, 6, 7, 8, 9
// _________________________________________________
// const input = "일공이사".split("");
// ____________________________________
// console.log(input);
// [ '일', '공', '이', '사' ]

// console.log(parseInt(input.map((c) => hangle.indexOf(c)).join("")));
// _______________________________________________________________________
// ParseInt는 문자열을 숫자로 바꿔준다.                   빈문자열로 join

// 숫자를 한글로
const hangle = "공일이삼사오육칠팔구";
let input = "1024".split("");
// console.log(input)
// => ['1', '0', '2', '4']
console.log(input.map((num) => hangle[num]).join(""));
let result = "";


// 어떤 숫자가 들어 올지 모르기 때문에 while 문 사용
while (input != 0) {
  result = hangle[input % 10] + result;
  input = parseInt(input / 10);
}

console.log(result);

// 1~100까지 합 출력
// const datas = new Array(100).fill().map((v, i) => i + 1);
// let result = 0;
// const total = datas.reduce((x, y) => x + y);
// console.log(total);
// datas.forEach((v) => (result += v));
// console.log(result);