
var n = Math.random();
n=n*6;
n = Math.floor(n) + 1
var randomDice = "dice" + n + ".png";

var randomImage = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImage)

var random1 = Math.random();
random1=random1*6;
random1 = Math.floor(random1) + 1
var randomDicen = "dice" + random1 + ".png";
var randomImagen = "images/" + randomDicen;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImagen)

	if(n >random1){
		document.querySelector("h1").innerHTML="Plyaer 1 win";
	}if(random1>n){
		document.querySelector("h1").innerHTML="Player 2 win"
	}
	if(n === random1){
		document.querySelector("h1").innerHTML="Draw"
	}

