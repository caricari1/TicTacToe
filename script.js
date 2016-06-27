
var playerOne = prompt("Enter X or O.");
var nextTurn = "X"

var board = document.querySelector(".board");
board.addEventListener("click", function(e) {
  var cell = e.target;
  if(!cell.classList.contains("ex") && (playerOne === "X" || playerOne === "x"))
    cell.classList.add("ex");
  else
    cell.classList.add("oh");
});

function changeTurn(){
      if(nextTurn == "X"){
           nextTurn = "O";
      } else {
           nextTurn = "X";
      }
 }

 var resetBoard = document.getElementById('resetbutton');
 button.addEventListener(click", function(e){
   cell.classList.add("cell")
 }

//var a ="x";
//var b;
//var c;
//var d ="x";
//var e;
//var f;
//var g ="x";
//var h;
//var i = "x";

//if ((a === b && a === c) && (a !== undefined)){
  //alert("Tic tac toe, three in a row!");
//} else if ((d === e && d === f) && (d !== undefined)){
  //alert("Tic tac toe, three in a row!");
//} else if ((g === h && g === i) && (g !== undefined)){
  //alert("Tic tac toe, three in a row!");
//} else if ((a=== d && a === g) && (a !== undefined)){
  //alert("Tic tac toe, three down!");
//} else if ((b === e && b === h) && (b !== undefined)){
  //alert("Tic tac toe, three down!");
//} else if ((c === f && c === i) && (c !== undefined)){
  //alert("Tic tac toe, three down!");
//} else if ((a === e && a === i) && (a !== undefined)){
  //alert("Tic tac toe, three diagonal!");
//} else if ((c === e && e === g) && (c !== undefined)){
  //alert("Tic tac toe, three diagonal!");
//}
