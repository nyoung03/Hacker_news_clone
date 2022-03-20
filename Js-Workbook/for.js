// 1. 주어진 문자를 거꾸로 출력
// let str = '새해 복 많이 받으세요';
// let rev = '';

// for( let i = str.length - 1; i >= 0; i--) {
//   rev += str[i]
// }
// console.log(rev)
// ------------------------------------------------------------------------------
// 2. 어제 시험에서 수학40, 국어67, 영어86, 과학94, 사회36 점을 맞았다.
// 을 사용하여 5과목 점수의 총점과 평균을 구하기

// ㄱ.총합을 넣을 변수만들기
// ㄴ.for문안에 들어갈 연산자 넣기
// ㄷ.소스넣어서 출력시키기

// let score=[40,67,86,94,36];
// let sum_score = 0;
// let average = 0;

// for (let i = 0; i < score.length; i++) {
//   sum_score += score[i]
//   average = sum_score / score.length
// }
// console.log(sum_score)
// console.log(average)
// console.log( `점수의 총합은 ${sum_score}이고 평균은 ${average}입니다`)

// result
// 점수의 총합은 00이고 평균은 00입니다

// ------------------------------------------------------------------------------
// 3. const fruits = ['Apple', 'Banna','Orange', 'Charry', 'Mango']

// 출력결과
// 제 바구니에는 AppleBanna,BannaOrange,OrangeCharry,CharryMango이 있습니다
// const fruits = ['Apple', 'Banna','Orange', 'Charry', 'Mango']
// let basket = [];

// for (let i = 0; i < fruits.length - 1; i++) {
//   basket.push(fruits[i] +  fruits[i+1])
// }
// console.log(basket)

// ------------------------------------------------------------------------------
// 4. 배열 cost의 값을 모두 더해 total_cost 변수에 저장
// let cost = [85, 42, 37, 10, 22, 8, 15];
// let total_cost = 0;

// for (let i = 0; i < cost.length; i++) {
//   total_cost += cost[i]
// }
// console.log(total_cost)

//출력결과
//219

// ------------------------------------------------------------------------------
// 5. 우리 유치원은 유아가 20명입니다.
// 번호가 1번부터 20번까지인 유아들을 “샛별반”, “꽃님반”, “별님반” 에 순서대로 편성해 주세요.
// 즉, 1번유아는 샛별반, 2번유아는 꽃님반, 3번유아는 별님반, 4번유아는 다시 샛별반이 되는 순서입니다.
// const className= ['샛별반', "꽃님반", "별님반"]
// className.length 사용

// const className= ['샛별반', "꽃님반", "별님반"]
// let 샛별반 = [];
// let 꽃님반 = [];
// let 별님반 = [];

// for (let i = 1; i <= 20; i++) {
//   if (i % className.length == 1) {
//     샛별반.push(i)
//   } else if (i % className.length == 2) {
//     꽃님반.push(i)
//   } else {
//     별님반.push(i)
//   }
// }
// console.log(샛별반)
// console.log(꽃님반)
// console.log(별님반)

// ------------------------------------------------------------------------------
// 6. 영수증을 짝수 순으로 출력
// const receipt = [
//   {
//     name: '칼국수',
//     cost: 10000
//   },
//   {
//     name: '해물칼국수',
//     cost: 14000
//   },
//   {
//     name: '왕만두',
//     cost: 6000
//   },
//   {
//     name: '소주',
//     cost: 4000
//   },
//   {
//     name: '맥주',
//     cost: 5000
//   }
// ];
// let Eve = [];

// for (let i = 0; i < receipt.length; i++) {
//   if (i % 2 == 1) {
//     Eve.push(receipt[i])
//   }
// }
// console.log(Eve)
// ------------------------------------------------------------------------------
// 7. 길동이는 자동차를 구매하기 위해 차랑별 연비와 가격을 5개씩 조사하여 각각 목록을 만들었습니다.

// 연비 목록 : [23.1, 21.5, 20.1, 19.5, 18.5]
// 가격 목록 : [3600, 3200, 4000, 2900, 5000]

// 길동이는 연비가 19 이상이면서 가격이 3500(만원) 미만인 차량을 구입하고 싶습니다.
// 길동이가 살 수 있는 차량의 연비와 가격을 '{0} 번째 차량 - 연비 : {0} km/l / 가격 : {0} 만원' 으로 모두 출력해주세요.

// let energyList = [23.1, 21.5, 20.1, 19.5, 18.5];
// let priceList = [3600, 3200, 4000, 2900, 5000];

// for (let i = 0; i < energyList.length; i++) {
//   if (energyList[i] >= 19 && priceList[i] < 3500) {
//     console.log(`${i+1} 번째 차량 - 연비 : ${energyList[i]} km/l / 가격 : ${priceList[i]} 만원`)
//   }
// }

// ------------------------------------------------------------------------------
// 8. 다음 배열에서 맨 앞의 알파벳이 A이면 보경반, B이면 동주반, C이면 현우반으로 구분하여 새로운 배열 데이터를 만드시오.
// const arr = ['B-332', 'C-154', 'B-509', 'A-412', 'A-788', 'C-012', 'A-649', 'C-099', 'B-144']
// let 보경반 = [];
// let 동주반 = [];
// let 현우반 = [];

// for (let i = 0; i < arr.length; i++) {
//   let first = arr[i].charAt(0)

//   if (first == 'A') {
//     보경반.push(arr[i])
//   } else if (first == 'B') {
//     동주반.push(arr[i])
//   } else {
//     현우반.push(arr[i])
//   }
// }
// console.log(보경반)
// console.log(동주반)
// console.log(현우반)
// ------------------------------------------------------------------------------
// 9. OOO는 쇼핑을 하고 계산을 마친 상황이다. for문을 사용해
// 물건과 잔돈을 지갑과 쇼핑백에 따로 담아라.
// const list = ['생선',50,'바나나',400,700];
// let bag = [];
// let wallet = [];

// for (let i = 0; i < list.length; i++) {
//   if (typeof(list[i]) == 'string') {
//     bag.push(list[i])
//   } else {
//     wallet.push(list[i])
//   }
// }
// console.log(bag)
// console.log(wallet)

// ------------------------------------------------------------------------------
// 10. 각 과목의 평균 점수와 전체 과목의 평균 점수
// const midExam = [
//   {name:'amy', english:78, art:100, science:58},
//   {name:'bob', english:82, art:92, science:76},
//   {name:'chris', english:86, art:78, science:64}
// ]

// // 과목별로 점수가 담길 객체
// const subList = {};

// // 과목별 평균이 담길 객체
// const subAvg = {};

// quiz();

// function quiz() {
//   if (midExam.length < 1) return

//   createSubList();
//   setSubList();
//   console.log(getAvg());
// }

// function createSubList() {
//   for (let key in midExam[0]) {
//     if (key !== 'name') {
//       subList[key] = [];
//     }
//   }
// }

// function setSubList() {
//   for (let i = 0; i < midExam.length; i++) {
//     for (let key in midExam[i]) {
//       if (key !== 'name') {
//         subList[key].push(midExam[i][key])
//       }
//     }
//   }
// }

// function getAvg() {
//   let total = 0;
//   for (let sub in subList) {
//     subAvg[sub] = (subList[sub].reduce((a, b) => a + b) / subList[sub].length).toFixed(2);
//     total += Number.parseFloat(subAvg[sub]);
//   }
//   return `[전체 평균점수: ${total/Object.keys(subAvg).length}점 / 영어 평균점수: ${subAvg.english}점 / 미술 평균점수: ${subAvg.art}점 / 과학 평균점수: ${subAvg.science}점]`
// }

// ------------------------------------------------------------------------------
// 11. 나는.. 개발수업 매니저.. 조를 짜야한다.. 3명씩..
// 조건 : for 문을 이용해주세요.
// 출력 : 1조부터 ~ 마지막조 까지 조별로 이름이 나오게 출력해주세요!
// const students = [
//   '조태현',
//   '이미림',
//   '안미영',
//   '박정후',
//   '한호준',
//   '권은서',
//   '김보경',
//   '이동주',
//   '차현우',
//   '김지안',
//   '고지훈',
//   '이인화',
//   '변호연',
//   '이근영',
//   '이아람',
//   '김민지',
//   '정윤재',
//   '이상혁',
//   '김철연',
//   '홍성우',
//   '지은영',
//   '임수혁',
//   '권오성',
//   '심태균',
//   '전예림',
//   '박주한',
//   '조혜빈',
//   '이지혜',
//   '박재원',
//   '함다인',
//   '서다희',
//   '황성원',
//   '마지혁',
//   '임시연',
//   '김윤경',
//   '조민지',
//   '변호연'
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// ------------------------------------------------------------------------------
/*숲 속 마을에서 식목일 행사로 나무 심기 대회가 열렸다.
가장 많이 나무를 심은 동물에게 평균 나무 심은 횟수를 뺀 수만큼
과일을 주기로 했다. 대회의 우승자와 상품으로 받을 과일의 갯수는?*/
// ex) 평균 횟수: 20회, 가장 많이 심은 횟수 30회 = 상품 과일 10개 증정.
// ex) 우승자는 토끼 입니다. 상품으로 과일 10개를 받아가세요!

// const animalList = [
//   {
//     name: "토끼",
//     count: 15
//   },
//   {
//     name: "사슴",
//     count: 8
//   },
//   {
//     name: "호랑이",
//     count: 32
//   },
//   {
//     name: "멧돼지",
//     count: 5
//   },
//   {
//     name: "산양",
//     count: 21
//   },
//   {
//     name: "늑대",
//     count: 29
//   },
//   {
//     name: "여우",
//     count: 33
//   },
//   {
//     name: "청설모",
//     count: 2
//   },
//   {
//     name: "곰",
//     count: 26
//   },
//   {
//     name: "꿩",
//     count: 19
//   }
// ]

// let maxNum = 0;
// let winner = "";
// let totalCount = 0;

// for (let i = 0; i < animalList.length; i++) {
//   // 동물 꺼내오기
//   let animal = animalList[i];

//   if (animal.count > maxNum) {
//     winner = animal.name;
//     maxNum = animal.count;
//     totalCount += animal.count
//   }
// }

// const average = totalCount / animalList.length;
// console.log(`우승자는 ${winner} 입니다. 상품으로 과일 ${maxNum - average}개를 받아가세요!`);

// ------------------------------------------------------------------------------
// 7개의 수가 주어지면 그 숫자중 가장 작은 수를 출력하는 프로그램을 만드시오
// ex) arr [5,3,7,11,21,15,17]  이중에서는 3이 나와야겠죠
// 조건 : for문과 그안의 if문을 사용해주세요

// function solution(arr){
//   let minNum = 9999999999;

//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < minNum) minNum = arr[i];
//   }

//   return minNum;
// }

// let arr=[5, 7, 1, 3, 2, 9, 11];

// console.log(solution(arr));

// ------------------------------------------------------------------------------
// 숫자배열을 만들고자 한다.
// 이 숫자배열은 자연수N까지의 숫자를 순서대로 나열한 배열이다.
// 임의 자연수 N을 넣었을 떄 숫자배열을 출력해보자.

// ex) N이 자연수 5이면
//     숫자배열 [1,2,3,4,5]

// let numArr = [];

// let N = 5

// for (let i = 1; i <= N; i++) {
//   numArr.push(i)
// }
// console.log(numArr)

// ------------------------------------------------------------------------------
// 중첩 for문을 사용하세요
// if문을 사용하네요
// 주사위의 합이 6이 되는 경우의 수를 모두 출력하세요
// let cnt = 0;

// for (let i = 1; i <= 6; i++) { // 주사위 1
//   for (let j = 1; j <= 6; j++) { // 주사위 2
//     if (i + j === 6) {
//       console.log(`주사위1 : ${i}, 주사위2 : ${j}`)
//       cnt++;
//     }
//   }
// }

// console.log(`두 주사위의 합이 6인 경우의 수 : ${cnt}`)

// ------------------------------------------------------------------------------
// 1993, 1988, 2000, 1997에 태어난 4명의 사람들이 있습니다
// 2022년 기준으로 그들의 만 나이가 몇살인지 구해서
// '?번째 사람의 만 나이는 ??살입니다'처럼 출력

// let year = [1993, 1988, 2000, 1997];
// let age = [];

// for ( let i = 0; i < year.length; i++) {
//   age.push(new Date().getFullYear() - year[i])
//   // console.log(age[i])
//   console.log(`${[i+1]}번째 사람의 만 나이는 ${age[i]}살입니다`)
// }

// ------------------------------------------------------------------------------
// 마시멜로 150개가 있습니다.
// 소영은 첫날 1개를 받고, 다음날에는 전날의 2개를 더 받습니다.
// 재현은 첫날 5개를 받고, 다음날에는 전날의 1개를 더 받습니다.
// 더 나누어 가질 수 없을 때까지 받았을 때, 각자가 받은 총 마시멜로 개수와, 둘이 받은 총 개수를 출력할 수 있도록 코드를 작성해 주세요.
// let 은영 = 0
// let 성일 = 0
// let 총합 = 0

// let 은영이가받을마시멜로수 = 1
// let 성일이가받을마시멜로수 = 5

// const 마시멜로수 = 150
// let 남은마시멜로수 = 150
// // 이외 필요한 변수는 자유롭게 추가해 주세요!

// // 이 부분에 코드를 추가해 주세요!

// for (let i = 1; i < 마시멜로수; i++) {
//   if (남은마시멜로수 - (은영이가받을마시멜로수 + 성일이가받을마시멜로수) >= 0) {
//     남은마시멜로수 -= 은영이가받을마시멜로수
//     남은마시멜로수 -= 성일이가받을마시멜로수

//     은영 += 은영이가받을마시멜로수
//     성일 += 성일이가받을마시멜로수

//     console.log(`은영이가 받은 마시멜로 : ${은영이가받을마시멜로수}`)
//     console.log(`성일이가 받은 마시멜로 : ${성일이가받을마시멜로수}`)
//     console.log(`남은 마시멜로수 : ${남은마시멜로수}`)

//     은영이가받을마시멜로수 += 2
//     성일이가받을마시멜로수++
//   }
// }

// console.log(`은영이가 가져간 총 갯수는 ${은영}`)
// console.log(`성일이가 가져간 총 갯수는 ${성일}`)
// console.log(`둘이 가져간 총 갯수는 ${은영+성일}`)

// ------------------------------------------------------------------------------
// let 새해 = 'Happy New Year'
// let 해새 = '';

// for(let i = 새해.length - 1; i >= 0; i--) {
//   해새 += 새해[i]
// }
// console.log(해새)

// ------------------------------------------------------------------------------
// 1. 예시에 있는 배열을 거꾸로하여 새로운 배열에 넣어 출력해보세요.
// 2. reverse() 말고 for문을 사용해보세요.
// 3. 아래 예제 코드로 하시면 되고, 출력은 console.log()로 해보세요.
// 예제 코드
// const array = ["apple","mango","banana","orange"]
// let rev = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   rev.push(array[i])
// }
// console.log(rev)

// ------------------------------------------------------------------------------
// 1부터 100까지 짝수와 홀수 값을 각각 모두 더하세요.
// 그런 다음 짝수와 홀수의 총합을 더하고,
// 그 값의 평균을 구하세요.

// 콘솔에 아래와 같이 출력하기
// console.log(`점수의 총합은 ${00}이고 평균은 ${00}입니다`)

// let even = 0;
// let odd = 0;
// // let all = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     even += i
//   } else {
//     odd += i
//   }
// }
// console.log(`점수의 총합은 ${even+odd}이고 평균은 ${(even+odd) / 2}입니다`)
// // all += (even + odd)

// console.log(even)
// console.log(odd)
// console.log(all)

// ------------------------------------------------------------------------------
// 아래에 있는 현재 EPL 프로축구 득점 순위 데이터에서 선수별 공격포인트 구하기
// 공격포인트 = 득점 + 도움
// const eplRanking = [
// 	{ 이름:'살라', 득점:15, 도움:9},
// 	{ 이름:'조타', 득점:10, 도움:1},
// 	{ 이름:'바디', 득점:9, 도움:1},
//   { 이름:'손흥민', 득점:8, 도움:2},
//   { 이름:'보나벤처', 득점:8, 도움:5}
// ]

// for(let i = 0; i < eplRanking.length; i++) {
//   let player = eplRanking[i]
//   console.log(`${player.이름}의 공격 포인트는 ${player.득점 + player.도움}`)
// }
// ------------------------------------------------------------------------------
//다음은 일주일동안 매일 쓴 교통비(원)를 나열한 배열입니다.
//일주일간의 일간 누적 교통비를 나열한 배열을 출력하세요.
// let fee = [6800, 3250, 6800, 16000, 3250, 4800, 3200]
// let sumArr = []
// let sumFee = 0;

// for (let i = 0; i < fee.length; i++) {
//   sumFee += (fee[i])

//   sumArr.push(sumFee)
// }
// console.log(sumArr)

// ------------------------------------------------------------------------------
//score 점수가 높은 순으로 정렬하고,
//"XX는 X점 X등입니다." 의 형식으로 document에 write 하세요!

// const students = [
//   {
//       name : 'Hedwig',
//       score  : 5
//   },
//   {
//       name : 'Dobby',
//       score  : 3
//   },
//   {
//       name : 'Ronald',
//       score  : 6
//   },
//   {
//       name : 'Potter',
//       score  : 10
//   },
//   {
//       name : 'Hermione',
//       score  : 9
//   },
// ]

// students.sort((a, b) => b.score - a.score)

// for (let i =0; i < students.length; i++) {
//   let student = students[i]
//   console.log(`${student.name}는 ${student.score}점 ${i+1}등입니다.`)
// }

// ------------------------------------------------------------------------------
// for문을 사용하여 obj의 name만 순서대로 반환
// const obj = [
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

// //console result
// //"jamie"
// //"amy"
// //"mike"

// for (let i = 0; i < obj.length; i++) {
//   console.log(obj[i].name)
// }

// ------------------------------------------------------------------------------
// for 문을 이용해 거꾸로 뒤집어진 코드를 변환
// let code = ['드', '엔', '트', '론', '프'];
// let convert = '';

// for (let i =code.length -1 ; i >= 0; i--) {
//   convert += code[i]
// }
// // 프론트엔드
// console.log(convert)

// ------------------------------------------------------------------------------
//for 문을 이용해서 diary의 sub항목만 순서대로 나열하세요.

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

// for (let i =0; i < diary.length; i++) {
//   console.log(diary[i].sub)
// }

// ------------------------------------------------------------------------------
// 배열 안의 이름을 대문자로 변환하여 콘솔로 출력하세요

// const namesArray = ['james', 'jane', 'tom', 'dana']

// for (let i = 0; i < namesArray.length; i++) {
//   console.log(namesArray[i].toUpperCase())
// }

// ------------------------------------------------------------------------------
// 자연수 N이 입력되면, 1부터 N 까지의 합을 출력하는 프로그램을 작성하세요.

// 입력 예제
// 4
// 출력 예제
// 10

// let num1 = 4;
// let numArr = [];
// let sumNum = 0;

// for (let i = 0; i < num1; i++) {
//   numArr.push(i+1)
//   sumNum += numArr[i]
// }
// console.log(sumNum)

// ------------------------------------------------------------------------------
// 거꾸로 출력
// const str1 = '안녕하세요만나서반갑습니다'
// let rev1 = ''

// for(let i = str1.length-1; i >= 0; i--) {
//   rev1 += str1[i]

// }
// console.log(rev1)
