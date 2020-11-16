"use strict";
/*
npm install -g typescript -- to install typescript globaly in your machine.
tsc ---version to check the currect version of type script installed in your machine.
code main.ts to open a new file in vscode.

now transpile this file into js file.
tsc main.ts to transpile ts file to js

once this command is run you will see a new js file created in the same folder with the same name as .ts file.
our ts code is now converted to js code.


node main.js to execute the code in this file.
*/
exports.__esModule = true;
function log(messages) {
    console.log(messages);
}
var messages = "hello world!";
log(messages);
////////////////////////////
//there are ways to decalre a variable in type script 
var number = 1;
var number2 = 3;
//difference between var and let keywords
/*if i is declared using var than the scope of i will be to the
nearest function. but if it is decalred using let then the
scope of i is only till for loop.
*/
function writeNumbers() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //if we declare i using let, the below line will not work. 
    //but if you transpile this, it will converted to var and it will not cause any issues.
    console.log("Finally : " + i);
}
/////////////////////////////
//example of type annotations and data types in typescript
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5, 6];
var f = [1, true, 'a', false];
var ColorRed = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
    Color[Color["Orange"] = 90] = "Orange";
})(Color || (Color = {}));
;
//transpile this file to js and see how javascript decalres the enums and how complex it is there compared to ts. 
var backGroundColor = Color.Orange;
//type assertions.
var message;
message = 'this is abc';
/*when variable is of type any,
and if we need to treat that variable as a specific
type of datatype, we need to use type assertions.
it can we done in two ways.
*/
var endsWithC = message.endsWith('c');
var AlternateEndsWithC = message.endsWith('c');
/*this Type Asserion does not change this type of variable at run time.
In fact, it's not going to restructure that object in memory. It's purely
a way to tell TypeScript Compiler about the type of a variable.
So, we can access the IntelliSense.
*/ 

//////////////////////////////


//Arrow Functions
let log = function(message)
{
    console.log(message);

}

let doLog = (message) => {
    console.log(message);
};