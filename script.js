// Your JS goes here




var colors = ['purple', 'blue'];

for(let x = 0; x < 81; x++){
  createChecker(colors[0]);
  colors.reverse();

}




function createChecker(color){
var checker = document.createElement("div");
checker.setAttribute("style", `width: 11.1%; float: left; padding-bottom:11.1%; background-color:${color}`);
document.body.appendChild(checker);
}

document.body.addEventListener("click", function(ev){
  console.log(ev.target);
  ev.target.style.backgroundColor = "red";
})
