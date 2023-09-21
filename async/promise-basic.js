const promise = new Promise(function(resolve, reject){
  // 오류가 날 상황이 아니면 reject는 생략 가능
  check = false
  if(check){
    resolve("안녕");
  }else{
    reject("잘가");
  }
})

promise.then(console.log).catch(console.log);