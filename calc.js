var arr = []
var screenText = document.getElementById("screen");
//var content = document.createTextNode();
screenText.innerHTML = arr;
arrNum = arr.join("")//. replace(/[^1-9a-z]/g,"")
console.log(arrNum);
var equation = [];
//screenText.appendChild(content);

const one = document.querySelector("one");
const two = document.querySelector("two");
const three = document.querySelector("three");
const four = document.querySelector("four");
const five = document.querySelector("five");
const six = document.querySelector("six");
const seven = document.querySelector("seveen");
const eight = document.querySelector("eight");
const nine = document.querySelector("nine");
const zero = document.querySelector("zero");

//console.log(arr);

function mouseDown() {
    arr.push(1);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function mouseDown2() {
    arr.push(2);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function mouseDown3() {
    arr.push(3);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function mouseDown4() {
    arr.push(4);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
}

function mouseDown5() {
    arr.push(5);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function mouseDown6() {
    arr.push(6);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function mouseDown7() {
    arr.push(7);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
}

function mouseDown8() {
    arr.push(8);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function mouseDown9() {
    arr.push(9);
    arrNum = arr.join("");
    screenText.innerHTML = arrNum;
    console.log(arrNum);
    console.log(arr)
    
}

function pop() {
    arr.pop();
    arrNum = parseInt(arr.join(""));
    screenText.innerHTML = arrNum;
    console.log(arr);
}

function plus(){
    //equation.push(arrNum);
    arr.push("+");
    //eqString = equation.join("");
    //equation.push("+");
    //arr=[];
    //arrNum=0;
    screenText.innerHTML = `${arrNum} + `;
   //console.log(equation);
    console.log(arr);
    console.log(arrNum)
    //console.log(eqString);
}

function minus(){
    arr.push("-");
    screenText.innerHTML = `${arrNum} - `;
}

function multiply(){
    arr.push("*");
    screenText.innerHTML = `${arrNum} * `;
}

function divide(){
    arr.push("/");
    screenText.innerHTML = `${arrNum} / `;
}

function equals(){
    console.log(arrNum)
   answer = eval(arrNum);
   screenText.innerHTML = answer;
   arr = [answer];
   arrNum=answer;
   console.log(arr);
}

function clear(){
    arr=[];
    arrNum="";
    screenText.innerHTML = "";
    console.log("you pressed clear")
}

//console.log(arr);
