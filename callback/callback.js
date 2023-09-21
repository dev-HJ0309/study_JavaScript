// // // 두 정수의 덧셈 결과 출력

// function getTotal(num1, num2) {
//   return num1 + num2;
// }

// function print(callback) {
//   if(callback) {
//      console.log(callback);
//   }
// }

// print(getTotal(5,6));

// 두 정수의 덧셈 결과 출력 (강사님)
// function add(num1, num2, callback){
//   if(callback){
//     callback(num1 * num2)
//   }
//    return num1 + num2
// }

// function printTotal(result){
//   console.log(result)
// }

// add(1, 2, printTotal)

// // 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

// function multiple (num1, num2, callback) {
//   if(callback){
//     callback(num1 * num2);
//   }
//   return num1 * num2
// }

// function printMultiple (result) {
//   console.log(result*2);
// }

// printMultiple(multiple(3, 6))

// // 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력 (강사님 풀이)
// // function mul(num1, num2, callback){
// //   if(callback){
// //     callback(num1 * num2)
// //   }
// //   return num1 * num2
// // }

// // mul(3, 4, function(result) {console.log(result * 2)})

// // 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력

// function getName(firstName, lastName, callback) {
//   if(callback) {
//     callback (firstName +'' +lastName)
//   }
// }

// function print (result) {
//   console.log(result + '님')
// }

// print(getName('주', '현진'));

// // 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력 (강사님 풀이)
// function getFullName(lastName, firstName, callback){
//   if(callback){
//     callback(lastName + firstName)
//   }
// }

// function addNim(name){
//   console.log(`${name}님`)
// }

// getFullName('한', '동석', addNim)
// getFullName('한', '동석', function(name){console.log(`${name}님`)})
// getFullName('한', '동석', name => {console.log(`${name}님`)})

// // 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// //  개수가 5개 이하라면 true 아니면 false

// // function getCount(price,totalCount,callback) {
// //   if(callback) {

// //    result =  price/totalCount
// //   }

// // }

// // function check(result)
// //   if(callback < 5)



// // 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// //  개수가 5개 이하라면 true 아니면 false

// // =====================================================
// function getNumber(price, totalPrice, callback){
//     if(callback){
//         callback(totalPrice / price);
//     }
//     return totalPrice / price;
// }

// function check(result){
//     if(result <= 5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(check(getNumber(5000, 30000)));


// function getInfo (name, status, callback) {
//   if(callback) {
//     callback(name + status)
//   }

// }

// function check(callback){
//   if(result){
//       return 결제완료;
//   }
//   else{
//       return 결제실패;
//   }
// }

// console.log(check(getInfo(새우깡,결제완료)));



// function multiple (num1, num2, callback) {
//   if(callback){
//     b = callback(num1, num2);
//   }
//   return b * num2
// }

// function printMultiple (number1,number2) {
//   console.log(number1*number2);
//   return number1*2
// }

// a = multiple(1,2,printMultiple)
// console.log(a)


// function 

// function status(productname, productstatus, callback){
//   let result = 'null'
//   if(callback){
//     if (productstatus === 'true'){
//       result = '결제완료'
//     }
//     else{
//       result = '결제취소'
//     }
//     callback(productname, result)
//   }
// }

// function print(productname, result){
//   console.log(`${productname}는 ${result} 상태입니다.`)
// }

// status('커피', 'false', print)


// function print(result) {
//   console.log(2222222222)
//   console.log(result);
// }

// function add(num1, num2, callback) {
//   console.log(callback)
//   re = num1 + num2;
//   callback();
  
// }

// add(2, 5, print);

// // 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

// function print(result) {
//   // console.log(2222222222)
//   console.log(result*2);
// }

// function mul(num1, num2, callback) {
//   console.log(callback)
//   re = num1 * num2;
//   callback(re);
  
// }

// mul(2, 5, print);

// // 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// //  개수가 5개 이하라면 true 아니면 false

// function print(result) {

//   console.log(result)

//   if (re <= 5) {
//     console.log('true');
//   }
//   else
//     console.log('false');
  
// }

// function getTotal(price, total, callback) {
//   console.log(callback)
//   re = price / total;
//   callback(re);
  
// }
// getTotal(100, 5, print);


// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력



// function print(result) {
  
//   console.log(result+'님');
// }

// function findFull(first, last, callback) {
//   console.log(callback)
//   result = first + last;
//   callback(result);
//   $``
// }

// findFull('주', '현진', print);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//고구마 1개에 1000원 
//고구마 개수를 입력받아 총 얼마인지를 알려주세요


// function total(result) {
  
//   console.log(result +'원 입니다.');
// }

// function sweetpotato(count, callback) {
//   console.log(callback)
//   result = count * 1000
//   callback(result);
// }

// //   if (re <= 5) {
// //     console.log('true');
// //   }
// //   else
// //     console.log('false');

// sweetpotato('5', total);

//고구마 1000원
//사과 500원
//감자 800원
//바나나 600원
//상품명,수량을 입력받아 총금액을 알려주시오

function total(result) {
  
  console.log(result +'원 입니다.');
}

function input(name, count, callback) {
  

  if (name == 'sweet') {
    result=count*1000
    
  }
  else if (name == 'apple'){
    result=count*500
    
  }
  else if (name == 'potato'){
    result=count*800
    
  }
  else if (name == 'banana'){
    result=count*600
    
  }
  total(result);
 
}
input('sweet', '5', total);
  // sweet = count * 1000
  // apple = count * 500
  // potato = count * 800
  // banana = count * 600


// // 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력