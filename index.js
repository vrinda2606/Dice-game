var p= Math.floor(6*Math.random() +1);
var v= Math.floor(6*Math.random() +1);
var im1 = "images/dice" + p + ".png";
var im2 = "images/dice" + v + ".png"
document.querySelectorAll("img")[0].setAttribute("src",im1);
document.querySelectorAll("img")[1].setAttribute("src",im2);

if(p>v){
    document.querySelector("h1").innerHTML="💕😍Player 1 Wins";
}
else if(p<v){
    document.querySelector("h1").innerHTML="💕😍Player 2 Wins";
}
else{
document.querySelector("h1").innerHTML="😒🥲Draw!";
}