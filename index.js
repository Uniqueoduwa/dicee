var player1= prompt("what is player1 name?");

var player2=prompt("what is player2 name?");

var player1Name =document.getElementsByClassName("player1")[0];
player1Name.innerHTML=player1;


var player2Name= document.getElementsByClassName("player2")[0];
player2Name.innerHTML= player2;

var num1= Math.floor(Math.random()*6)+1;
var randomImage= "dice"+num1+".png";
var imageSource="images/"+randomImage;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);



var num2= Math.floor(Math.random()*6)+1;
var randomImage2= "dice"+ num2+".png";
var imageSource2= "images/"+ randomImage2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src" , imageSource2);


if (num1>num2) {
  document.querySelector("h1").innerHTML=player1+ " wins ❗✔";
}
else if (num2>num1) {
  document.querySelector("h1").innerHTML=  player2 +" wins ❗✔";

}

else {
  document.querySelector("h1").innerHTML="draw 😂😂";
}
