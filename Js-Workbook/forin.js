// ------------------------------------------------------------------------------
// 1-1. 2021년 6월 1일에 12개월 100회 운동 이용권을 구입했습니다.
// 월별 이용일이 다음과 같을때 잔여일수와 잔여횟수를 구해주세요.
// let 잔여횟수 = 100;
// let 잔여일수 = 365;

// const startDate = new Date(2021, 6, 1).getTime();
// const endDate = new Date(2021, 12, 31).getTime();

// 잔여일수 -= (endDate - startDate) / 24 / 60 / 60 / 1000;

// const myHealth = {
// 	Jun : [2, 5, 10, 12],
//   Jul : [4, 13, 18, 19, 21],
//   Aug : [1 ,3, 7, 9, 11, 14, 10, 21, 28],
//   Sept : [3, 6, 8],
//   Oct : [4],
//   Nov : [2, 5, 8, 11, 13, 15, 19, 21, 22, 26, 27],
//   Dec : [5, 8, 11, 20, 22, 27]
// }

// for (let key in myHealth) {
//   잔여횟수 -= myHealth[key].length;
// }

// console.log(`이용권 사용일은 ${잔여일수}일이 남았으며 사용횟수는 ${잔여횟수}번 남았습니다.`)

//출력결과
//2022-01-01 기준
//이용권 사용일은 151일이 남았으며 사용횟수는 61번 남았습니다.

// ------------------------------------------------------------------------------
// 1-2. for in문을 이용해서 obj의 속성중, number 타입의 값을 모두 더해서 sum에 저장하세요!

// const obj1 = {
// 	age : 20,
// 	weight : 10
// }
// let sum1 = 0;

// for (const i in obj1) {
//   if (typeof(obj1[i]) == 'number') {
//     sum1 += obj1[i];
//   }
// }
// console.log(sum1)

// sum : 30

// ------------------------------------------------------------------------------
// 1-3. 우리 유치원 아이들은 각자 좋아하는 칭찬스티커가 있습니다.
// 서로 좋아하는 스티커를 갖고 싸우지 않도록 하기 위해 ‘누가’ ‘어떤’ 스티커를 좋아하는지 기록해 뒀습니다.
// 오늘 반 아이들에게 칭찬스티커를 주기위해 프린트를 하려고 하는데, 무엇을 몇장 프린트해야 하는지 구해주세요.
// 다음을 이용해서 풀어주세요.

// const favSticker = {
// 	"은지" : "뽀로로",
//   "태현" : "티라노사우르스",
//   "미림" : "아기상어",
//   "미영" : "아기상어",
//   "을수" : "뽀로로"
// }

// const result = {};

// for (let child in favSticker) {
//   if (result.hasOwnProperty(favSticker[child])) {
//     result[favSticker[child]]++;
//   } else {
//     result[favSticker[child]] = 1;
//   }
// }

// console.log(result)

// ------------------------------------------------------------------------------
// 2-1. 어벤져스 멤버들의 평균 연령을 구해주세요.
// for in문을 하나만 사용해서 출력해주세요.

// const avengers = [
//   {
//     name: 'IronMan',
//     age: 43
//   },
//   {
//     name: 'Hulk',
//     age: 46
//   },
//   {
//     name: 'Hawkeye',
//     age: 37
//   },
//   {
//     name: 'SpiderMan',
//     age: 21
//   },
//   {
//     name: 'Thor',
//     age: 100
//   },
//   {
//     name: 'BlackWidow',
//     age: 47
//   }
// ];

// let avgAge = 0;

// for (let i in avengers) {
//   avgAge += avengers[i].age
// }
// console.log(avgAge / avengers.length)

// ------------------------------------------------------------------------------
// 2-2. 객체에서 데이터 타입이 숫자인 것만 출력.
// const obj2 = {
//   name: "lisa",
//   age: 21,
//   height: 100,
//   city: "seoul",
//   phone: 12345,
//   puppy: "yomi"
//   }

//   for(let i in obj2) {
//     if (typeof(obj2[i]) === "number") {
//       console.log(`${[i]} : ${obj2[i]}`)
//     }
//   }

// [ 출력 ]
// age : 21
// height: 100
// phone: 12345

// ------------------------------------------------------------------------------
// 3-2. 다음 배열에서 가장 긴 문자열을 찾은 후 답을 적으시오. (추가로 사용자에게 직접 데이터를 받아서 가장 긴 문자열을 찾는 프로그램을 만드시오.)
// const arr = ['hi', 'dongju', 'one', 'for', 'project']

// let maxLength = '';

// for (i in arr) {
//   if (arr[i].length > maxLength.length) {
//     maxLength = arr[i]
//   }
// }
// console.log(maxLength)

// ------------------------------------------------------------------------------
// 4-1. 새해겸 선물을 3가지 준비해왔다.
// 글자수가 3자리수는 채원이에게 글자수가 4자리는 지훈이에게 글자수가 5자리 수는 채원이에게 줄것이다.
// for문과 글자수를 이용해 각각의 학생들에게 배분해라
// let gift = ['전자기기','문화상품권','명품백']
// let 소연 = []
// let 지훈 = []
// let 채원 = []

// for(i in gift) {
//   if(gift[i].length === 3) {
//     채원.push(gift[i])
//   } else if (gift[i].length === 4) {
//     지훈.push(gift[i])
//   } else {
//     소연.push(gift[i])
//   }
// }
// console.log(채원, 지훈, 소연)

// ------------------------------------------------------------------------------
// 4-3. 한 반에 3명의 학생이 있다.
// 이번 중간고사로 영어, 미술, 과학 시험을 봤다.
// 과목중 하나라도 70점 이하의 점수를 받은 사람이 있다면,
// 이름과 과목, 점수를 반환해주세요.
// const midExam = [
//   {name:'amy', english:78, art:50, science:58},
//   {name:'bob', english:82, art:92, science:76},
//   {name:'chris', english:30, art:59, science:64}
// ]

// const CUT_SCORE = 70;

// const result = [];

// for (let index in midExam) {
//   let student = midExam[index];
//   let flag = true;
//   for (let subject in student) {
//     if (subject !== 'name' && student[subject] <= CUT_SCORE) {
//       if (flag) {
//         result.push({})
//         result[result.length - 1]['name'] = student.name;
//         result[result.length - 1][subject] = student[subject];
//         flag = false
//       } else {
//         result[result.length - 1][subject] = student[subject];
//       }
//     }
//   }
// }

// console.log(result)

// ------------------------------------------------------------------------------
// 5-1. 안반녕갑하습세니요다
// 위의 문자열을 하나하나 배열의 요소로 바꾸고, 재배열하여 읽히는 문장으로 조합하기!
// for in문 사용
// const arr1 = '안반녕갑하습세니요다';
// const arrEl = arr1.split('');

// let 안녕 = ''
// let 반갑 = ''

// for (let index in arrEl) {
//   if (index % 2 === 0) {
//     안녕 += arrEl[index]
//   } else {
//     반갑 += arrEl[index]
//   }
// }

// console.log(안녕)
// console.log(반갑)

// ------------------------------------------------------------------------------
// 6-1. 새해를 맞이하여 닌텐도에서 할인 이벤트를 합니다.
// 내가 가진 돈 100000원으로 가장 많은 갯수의 게임을 구매하고자 할 때,
// 중요도 순서대로 구매 할 수 있는 게임의 이름과 가격을 나열하시오.
// 중요도 순서로 배열 되어 있기에 따로 정렬이 필요 없습니다.
//ex) 구매상품은 A, 가격은 1원 입니다
//    구매상품은 B, 가격은 2원 입니다

// const product = {
//   '젤다의 전설 꿈꾸는 섬': 45360,
//   '역전재판 123 나루호도 셀렉션': 18050,
//   'Cuphead': 15960,
//   '저스트 댄스 2022': 45360,
//   '스트라이커즈 1945 III ': 6160
// };

// let selectTotal = 0;

// for

// ------------------------------------------------------------------------------
// 6-2. 나의 한달용돈은 20만원이다. 오늘은 주말이라 혼자서 먹고싶은것과 필요한것
// 들을 구매하였다. 현재 내가 가지고있는 돈은 얼마인가.

// let 한달용돈 = 200000;
// let 남은돈;
// let 오늘사용한돈 = 0;
// let 구매목록 = {
//     '빵': 5000,
//     '고기': 20000,
//     '옷': 77000,
//     '커피': 5500
//   }

// for (let i in 구매목록) {
//   오늘사용한돈 += 구매목록[i]
// }
// console.log(오늘사용한돈)
// console.log(`현재 내가 가지고있는 돈은 ${한달용돈 - 오늘사용한돈}이다.`)

// ------------------------------------------------------------------------------
// 6-3. 주말에 13시나 13시30분에 영화를 보려고 합니다.
// 아래의 데이터는 주말에 볼 수 있는 영화상영표입니다.
// 영화상영표를 보고 13시에 볼 수 있는 엉화의 리스트를 만드세요.
// 리스트는 ul태그와 li태그로 만드세요.
// 만든 리스트를 바디태그 자식요소로 넣어주세요

// const movieTimeTable = {
//   '킹스맨-퍼스트어벤져': '9시',
//   '씽2투게더':'10시 30분',
//   '해피뉴이어':'13시',
//   '스파이더맨-노웨이홈': '13시 30분',
//   '경관의 피10': '15시',
//   '경관의 피9': '15시',
//   '경관의 피8': '13시',
//   '경관의 피7': '15시',
//   '경관의 피6': '15시',
//   '경관의 피5': '13시',
//   '경관의 피4': '15시',
//   '경관의 피3': '15시',
//   '경관의 피2': '13시',
//   '경관의 피1': '15시',
// }

// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');

// wrap.appendChild(ul);

// for (let movie in movieTimeTable) {
//   if (movieTimeTable[movie] === '13시') {
//     let li = document.createElement('li');
//     li.innerText = movie
//     ul.appendChild(li);
//   }
// }

// ------------------------------------------------------------------------------
// 7-1. 5개 과목의 성적을 랜덤으로 부여하고, 각 과목명과 성적을 출력하세요.
// 과목의 종류 예시
// const scores = {
//   java : ,
//   c : ,
//   python : ,
//   js : ,
//   sql :
// }

// 조건 : 랜덤한 수를 구하는 로직을 함수로 처리하세요.

// ------------------------------------------------------------------------------
// 7-2. for in문을 이용하여 1. 성적표의 평균을 구하고, 2. 제일 높은점수와, 낮은 점수만 나열하세요/

// const gradeCard = {
// 	math : 80,
// 	english : 55,
// 	science : 72,
// 	korean : 97,
// 	athletic : 67,
// 	music : 20
// }

// const gradeCardLength = Object.keys(gradeCard).length;
// let totalScore1 = 0;
// let maxNum = 0;
// let minNum = 9999999;

// for (j in gradeCard) {
//   totalScore1 += gradeCard[j]
//   if(gradeCard[j] > maxNum) {
//     maxNum = gradeCard[j]
//   } else if (gradeCard[j] < minNum) {
//     minNum = gradeCard[j]
//   }
// }
// console.log(maxNum)
// console.log(minNum)
// console.log(`평균은 ${(totalScore1 / gradeCardLength).toFixed(2)}이고
// 제일 높은 점수는 ${maxNum}
// 제일 낮은 점수는 ${minNum}`)
// ------------------------------------------------------------------------------
// 7-3.
// const 점수 = {
//   언어: 88,
//   수리: 56,
//   외국어: 96,
// };

// const 점수Length = Object.keys(점수).length;
// let totalScore = 0

// for (let i in 점수) {
//   totalScore += 점수[i]
// }

// if ((totalScore / 점수Length) >= 80) {
//   console.log('합격')
// } else {
//   console.log('나머지 공부')
// }

// [1] for in 반복문을 사용해서
// [2] 위 3과목의 평균점수를 구하고
// [3] '80점이 넘었다면 합격, 넘지 못했다면 나머지공부' 를 출력

// ------------------------------------------------------------------------------
// 9-1. for...in 반복문을 사용하여 각국의 인사말을 거꾸로 출력하고,
// 그 출력된 문자들을 배열에 출력하시오.

// const greeting = {
// 	한국어 : "안녕",
// 	영어 : "Hello",
// 	독일어 : "Hallo",
// 	이탈리아어 : "Ciao",
// }

// const greetingReverse = {}

// for (let locale in greeting) {
//   let localeArr = greeting[locale].split('')
//   greetingReverse[locale] = localeArr.reverse();
// }

// console.log(greetingReverse)

// let greetingRev = ''

// for (i in greeting) {
//   console.log(greeting[i])
//   for(let j = greeting[i]; j >= 0; j--) {
//     greetingRev += greeting[j]
//   }
// }
// console.log(greetingRev)

// ------------------------------------------------------------------------------
// 9-2. 아래에 있는 EPL 프로축구 선수인 손흥민 선수의 Data를 활용해서 이름, 득점, 도움, 공격포인트를 순서대로 출력하기
// const sonEplData = { 이름:'손흥민', 득점:8, 도움:2, 공격포인트:10}

// for (let i in sonEplData) {
//   console.log(sonEplData[i])
// }

// ------------------------------------------------------------------------------
// 10-1. for in 문을 사용하여 txt의 value 값을 더해 하나의 문장을 만들고,
// 최종 문장을 text에 값 할당해주세요 !
// let text = '';
// const txt= {
//     a : '화',
//     b : '이',
//     c : '팅',
//     d : '!'
// }

// for (i in txt) {
//   console.log(txt[i])
//   text += txt[i]
// }
// console.log(text)
// 화이팅!

// ------------------------------------------------------------------------------
// 10-2. for in 문을 사용하여 obj의 name만 순서대로 반환
// const obj3 = [
//   {
//     id: 0,
//     name: 'jamie',
//     age: 18
//   },
//   {
//     id: 1,
//     name: 'amy',
//     age: 21
//   },
//   {
//     id: 2,
//     name: 'mike',
//     age: 32
//   },
// ]

// for (i in obj3) {
//   console.log(obj3[i].name)
// }

//console result
//"jamie"
//"amy"
//"mike"

// ------------------------------------------------------------------------------
// 10-3. for in 문을 이용해 강아지가 음식을 모두 먹을 수 있게 해주세요!
// let dog = '🐶';
// let foods = ['🦴', '🥚', '🍎'];

// for (i in foods) {
//   console.log(`${dog} eat ${foods[i]}`)
// }

// 출력 결과
// 🐶 eat 🦴
// 🐶 eat 🥚
// 🐶 eat 🍎

// ------------------------------------------------------------------------------
// 11-2. 패스트캠퍼스 프론트엔드 강의를 수강하는 학생들의 이름이 key, 나이가
// value 로 주어진 객체가 입력되었을 때, 학생들의 나이의 합을 출력하는
// 프로그램을 작성하세요.

// 입력 예제

// const students = {
// 	박지성: "8",
// 	손흥민: "5",
// 	메시: "7",
// 	호날두:"1"
// }

// let sumAge = 0;

// for (key in students) {
//   sumAge += +students[key]
// }

// console.log(sumAge)
//21

// ------------------------------------------------------------------------------
// 11-3. 아래 객체에서 sub와 sum을 열거하는 for in문을 출력해주세요
// const diary = [
//   {
//     date: 1,
//     sub: '약속',
//     sum: '까치 멤버들과 신년회'
//   },
//   {
//     date: 1,
//     sub: '쇼핑',
//     sum: '민지랑 다꾸 스티커 쇼핑'
//   },
//   {
//     date: 2,
//     sub: '운동',
//     sum: 'PT날 팔운동'
//   },
//   {
//     date: 2,
//     sub: '쇼핑',
//     sum: '아빠 생신 선물'
//   },
//   {
//     date: 2,
//     sub: '약속',
//     sum: '은주랑 최애 뮤지컬 관람'
//   },
//   {
//     date: 3,
//     sub: '공부',
//     sum: 'javascript for문 공부하기'
//   },
//   {
//     date: 3,
//     sub: '약속',
//     sum: '은영이랑 스파이더맨 영화 관람'
//   },
//   {
//     date: 4,
//     sub: '쇼핑',
//     sum: '민지랑 뮤지컬 ost 구입'
//   },
//   {
//     date: 4,
//     sub: '약속',
//     sum: '은영이랑 콜라보 카페 가기'
//   }
// ]

//출력 예제
//약속 : 까치 멤버들과 신년회
//쇼핑 : 민지랑 다꾸 스티커 쇼핑
//운동 : PT날 팔운동
//쇼핑 : 아빠 생신 선물
//약속 : 은주랑 최애 뮤지컬 관람
//공부 : javascript for문 공부하기
//약속 : 은영이랑 스파이더맨 영화 관람
//쇼핑 : 민지랑 뮤지컬 ost 구입
//약속 : 은영이랑 콜라보 카페 가기

// for(i in diary) {
//   console.log(`${diary[i].sub} : ${diary[i].sum}`)
// }

// ------------------------------------------------------------------------------
// 12-3. 객체를 “key - value” 형태로 출력
// const person = {
//   "name": "Molecule Man",
//   "age": 29,
//   "secretIdentity": "Dan Jukes"
// }

// for (key in person) {
//   console.log(`${[key]} : ${person[key]}`)
// }

// ------------------------------------------------------------------------------
