alert("Yayyy");
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var ans = document.querySelector(".img1");
ans.getAttribute("src");
ans.setAttribute("src","images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var ans2 = document.querySelector(".img2");
ans2.getAttribute("src");
ans2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
var disp = document.querySelector(".container h1");
if(randomNumber1 == randomNumber2){
    disp.innerHTML = "It's a Draw, Yaaru Geddilla hoog malkoli";
}
else if(randomNumber1 > randomNumber2){
    disp.innerHTML = "Player 1 Wins";
}
else {
    disp.innerHTML = "Player 2 Wins";
}
