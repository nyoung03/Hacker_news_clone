// 자격증 응시자 명단과 점수가 있습니다.
// 점수가 80점 이상인 사람은 합격입니다.
// 합불 여부를 이름 옆에 출력해주세요

// const testTakerList = [
//   { name: "gia", score: 80 },
//   { name: "hana", score: 70 },
//   { name: "douri", score: 80 },
//   { name: "mina", score: 64 },
//   { name: "sole", score: 92 },
//   { name: "bora", score: 53 },
//   { name: "john", score: 62 },
//   { name: "suzi", score: 84 },
//   { name: "loki", score: 75 },
//   { name: "tom", score: 77 },
//   { name: "lisa", score: 81 },
// ];

// let resultList = [];
// let result = "";

// for (let i = 0; i < testTakerList.length; i++) {
//   if (testTakerList[i].score >= 80) {
//     result = "합격";
//   } else {
//     result = "불합격";
//   }
//   resultList.push({
//     name: testTakerList[i].name,
//     result: result,
//   });
// }
// console.log(resultList);

// 2-1. 똑소리의 등수 출력
// const reportCard = [
//   { no: 1, name: "미니언즈", score: 95 },
//   { no: 2, name: "호식이", score: 46 },
//   { no: 3, name: "엘사", score: 79 },
//   { no: 4, name: "단비", score: 5 },
//   { no: 5, name: "원펀맨", score: 30 },
//   { no: 6, name: "스파이더맨", score: 100 },
//   { no: 7, name: "단군", score: 80 },
//   { no: 8, name: "똑소리", score: 70 },
//   { no: 9, name: "동탁", score: 0 },
// ];

// for (i = 0; i < reportCard.length; i++) {
//   reportCard.sort(function (a, b) {
//     return b.score - a.score;
//   });
//   if (reportCard[i].name === "똑소리")
//     console.log(`${i + 1}등 ${reportCard[i].name}`);
// }

// 2-3. 팀별로 배열 출력
// const team = [
//   {
//     name: "명보",
//     team: "A",
//   },
//   {
//     name: "천수",
//     team: "A",
//   },
//   {
//     name: "병지",
//     team: "B",
//   },
//   {
//     name: "흥민",
//     team: "A",
//   },
//   {
//     name: "자철",
//     team: "B",
//   },
//   {
//     name: "승우",
//     team: "B",
//   },
//   {
//     name: "현우",
//     team: "B",
//   },
//   {
//     name: "지성",
//     team: "A",
//   },
//   {
//     name: "상철",
//     team: "A",
//   },
//   {
//     name: "남일",
//     team: "B",
//   },
// ];

// let teamA = [];
// let teamB = [];

// for (i = 0; i < team.length; i++) {
//   if (team[i].team === "A") {
//     teamA.push(team[i]);
//   } else {
//     teamB.push(team[i]);
//   }
// }
// console.log(teamA);
// console.log(teamB);

// 3-1.  조건 1: 10의 배수이면 ‘10의 배수입니다.’ 출력
// 조건 2: 짝수이면 ‘짝수입니다.’ 출력
// 조건 3: 홀수이면 ‘홀수입니다.’ 출력

// let inputQ = [];
// inputQ.push(Number(prompt("숫자입력", "0")));

// for (i = 0; i < inputQ.length; i++) {
//   if (inputQ[i] % 10 === 0) {
//     alert("10의 배수입니다.");
//   } else if (inputQ[i] % 2 === 0) {
//     alert("짝수");
//   } else {
//     alert("홀수");
//   }
// }

// 4-3. 영화 리스트 중 watch가 false인 영화를 추천 리스트 배열에 넣어주세요.

// const list = [
//   { title: "그해 우리는", watch: true },
//   { title: "솔로지옥", watch: true },
//   { title: "불가살", watch: false },
//   { title: "고요의 바다", watch: false },
//   { title: "이태원 클라쓰", watch: false },
//   { title: "마더", watch: true },
//   { title: "도깨비", watch: false },
//   { title: "돈룩업", watch: false },
// ];

// const recommendList = [];

// for (i = 0; i < list.length; i++) {
//   if (list[i].watch === false) {
//     recommendList.push(list[i]);
//   }
// }
// console.log(recommendList);

// 5-1. 배열에서 5의 배수를 찾기.
// 5배수일 경우, 5의 배수가 맞습니다. 를 출력
// 5의 배수가 아닐경우 5의 배수가 아닙니다. 를 출력

// const arr = [15, 23, 45, 20, 46, 36, 68, 690, 251, 505];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 5 === 0) {
//     console.log(`${arr[i]}는 5의 배수입니다.`);
//   } else {
//     console.log(`${arr[i]}는 아님`);
//   }
// }

// 6-1. 1부터 6까지 숫자가 적혀있는 주사위가 있습니다.
// 주사위를 돌려 아빠는 1부터 3까지, 엄마는 4부터 6까지, 나는 홀수, 동생은 짝수가 나올시 청소당번이 됩니다.
// 주사위를 7번 던졌을 때, 엄마, 아빠, 나, 동생이 걸린 청소당번 횟수를 출력하시오.

// let dad = 0;
// let mom = 0;
// let me = 0;
// let younger = 0;

// 6-2. 가전제품을 한 제품당 최대 200만원까지 쓸 수 있다.
// 200만원으로 살 수 있는 제품과 살 수 없는 제품을 구분하는 로직을 작성해주세요.
// 그리고 console창에 구매할 수 있는 제품의 이름과 가격을 출력하고
// 구매할 수 없는 제품의 이름과 부족한 금액을 출력해주세요.
// (단, 남을 금액를 다른 제품을 살 때 보탤 수 없습니다.)

// const products = [
//   { name: "노트북", price: 800000 },
//   { name: "TV", price: 2000000 },
//   { name: "냉장고", price: 2300000 },
//   { name: "에어컨", price: 2500000 },
//   { name: "커피머신", price: 500000 },
//   { name: "로봇청소기", price: 1000000 },
// ];

// let okList = [];
// let noList = [];

// for (i = 0; i < products.length; i++) {
//   if (products[i].price <= 2000000) {
//     console.log(`구매 가능 : ${products[i].name} ${products[i].price}원`);
//   } else {
//     console.log(
//       `구매 불가능 : ${products[i].name} ${products[i].price - 2000000}원 부족`
//     );
//   }
// }
