// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기

// 
fetch("https://jsonplaceholder.typicode.com/users")         
// fetch()를 이용해서 url을 비동기 요청.  
.then((response) => {
  if(!response.ok){                                         
   
     // throw로 에러를 발생 시킴.
  }
  return response.json();                                   
  // 응답이 성공이면, json메소드로 변환 후 리턴
})
.then((users) => {                                          
  if(!users || users.length == 0){                          
    // users가 없거나 길이가 0 이면
    // || = or
    throw new Error("none result");                         
    // throw로 에러를 발생 시킴.
  }
  return users.map((user) => {                              
    // 각 user의 address에 있는 zipcode를 리턴
    return {zipcode : user.address.zipcode};
  })
})
.then(console.log)                                          
// 전달받은 zipcode 출력하고
.catch((error) => {                                         
  // throw에서 예외가 발생하면 건너뛰어서 catch실행하고
  console.log(error);                                       
  // 오류메시지 출력
  console.log("error");                                     
  // "error" 출력
});


async function request(){                                     
  // request 앞에 async를 붙혀 비동기식인 Promise객체로 리턴
  return fetch("https://jsonplaceholder.typicode.com/users"); 
  // fetch()를 이용해서 url을 비동기 요청하고 Promise 리턴
}

async function printZipcode(){                                
  const response = await request();                           
  // request() 함수를 호출하여 reponse에 저장. await는 Promise가 완료될 때까지 기다림.
  const users = await response.json();                        
  // 응답받은 데이터를 json으로 변환. await는 Promise가 완료될 때까지 기다림.
  const zipcodes = users.map((user) => user.address.zipcode)  
  // 각 user의 address에 있는 zipcode를 zipcodes에 저장.
  console.log(zipcodes);                                      
  // zipcodes 출력.
}

printZipcode()                                                
// printZipcode() 함수 실행.