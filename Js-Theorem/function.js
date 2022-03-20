// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: dosometing, command, verb
// e.g. createCardAndPoint -> createCard, createpoint
// function is object in Js
function printHello() {
    console.log('Hello');
}
printHello();

function log (meseeage) {
    console.log(meseeage);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const gia = { name: 'gia' };
changeName(gia);
console.log(gia);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
} 
showMessage('Hi!');

// 4. Rest paramenters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding','gia');

// 5. Local scope 
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage () {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
   // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
} 

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
     // long upgrade logic...
} 

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by anther function

// 1. function expression
// a function declaration can be called earlier then it is deiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {  // anonymous function, 함수의 이름이 없는 것
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
} 
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's strack traces
// recursions
const printNo = function () {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint =  () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIEF');
}) (); 

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder