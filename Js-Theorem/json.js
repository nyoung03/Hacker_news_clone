// Json
// JAvascript Object Notation

// 1. Object to Json
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple","banana"]

const rabbit = {
  name: "tori",
  color: "pink",
  size: null,
  brithData: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"pink","size":null,"brithData":"2022-01-21T08:32:53.924Z"}
// 함수는 object의 내용이기 때문에 제외
// js에만 있는 symbol도 제외

json = JSON.stringify(rabbit, ["name"]);
console.log(json); // {"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "gia" : value;
});
console.log(json); // {"name":"gia","color":"pink","size":null,"brithData":"2022-01-21T08:37:33.870Z"}

// Json to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj); // {name: 'tori', color: 'pink', size: null, brithData: '2022-01-21T08:39:04.960Z'}
