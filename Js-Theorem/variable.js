// 1. use strict
// added in ES 5
// use this for valina javascript.
'use strict';

// 2. Variable (변수), rw(read/write)
// let (Mutable 변경가능)
let globalName = 'global name'; //어느 곳에서도 접근 가능, 항상 메모리에 탑제(최소한으로 사용하는 것이 좋음)
{
    let name = 'gia';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); // 블럭 밖에서는 블럭 안의 내용을 볼 수 없음
console.log(globalName);

// var (don't ever use this) 
// var hoisting (move declaration from botten to top)
// has no block scope

// Constant (Immutable 변경 불가능), r(read only)
// use const whenever possible
// only use let if variable neeed to change.
const daysInweek = 7;
const maxNumber = 5;

//note!
// Immutable date types: primitive types, frozen objects (i.e. object.freeze())
// 데이터 자체를 변경하는 것을 불가
// Mutable date types: all objects by default are mutable in JS
// favor immutable date type always for a few reasons
// - security 보안
// - thread safaty 
// - reduce human mistakes


// 3. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol (value로 값 자체 저장)
//object, box container (object가 가르키는 ref가 메모리에 저장)
//function, first-class function 

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - infinity, -infinity, nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairy new, don't use it yet)
const bigInt = 1234567890n; //over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);
// 위의 두 줄은 (59,60) 같은 의미의 식
// `` 와 ${}의 사용과 '' 와 + 사용 차이

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 너는 텅텅이야
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined 선언은 됐지만 값이 정해져 있지 않는
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, date structure
const gia = {name: 'gia', age: 20};
gia.age = 21;

// dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);