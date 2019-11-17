// document.getElementById("title2").innerHTML+= " this is another title";
// document.getElementById("title2").style.color ="red";
// var tableau = document.getElementsByClassName("paragraph");
// for(var i=0;i<tableau.length;i++)
// {
//     tableau[i].style.color="red";
// }
// document.getElementById("link2").href="";
var title= document.getElementById("title2");

title.addEventListener("click",handleClick);
function handleClick(){
   setTimeout(function(){
       alert("clickedd")
   },2000)
}