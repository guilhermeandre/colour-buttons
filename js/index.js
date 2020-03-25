//Find the element with the ID #green
let $btnGreen = document.getElementById(`green`);
let $btnRed = document.getElementById(`red`);
let $btnBlue = document.getElementById(`blue`);
//Find the body element
let $body = document.querySelector(`body`);

//Make button #green clickable 
function makeMyBodyGreen () {
  $body.style.backgroundColor='green';

}

//Make button #Blue clickable 
function makeMyBodyBlye () {
  $body.style.backgroundColor = `blue`;
}

//Connect a function to the occurrence of an event
// 1. Who am I watching?
// 2. What am I waiting for?
// 3. What do I do when it happens?
// Bind them together using an Element method called: addEventListener

// 1                          2           3
$btnGreen.addEventListener(`click`, makeMyBodyGreen);
$btnRed.addEventListener(`click`, () => $body.style.backgroundColor = 'red')
$btnBlue.addEventListener(`click`, makeMyBodyBlye)






















// function setBodyBackgroundColour(colour) {
//   $body.style.backgroundColor = colour;
// }


// const developer = {
//   name: {
//     first: `Rocco`, 
//     last: `Panacci`
//   } ,
//   age: 35, //properties
//   printName: function() {  //methods
//     console.log(this.name.first);
//   }
// };

