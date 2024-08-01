var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var message = document.querySelector("#message");
var stripe = document.querySelector("#stripe");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = colorPicked;
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");



 easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
     easyBtn.classList.add("selected");
    numSquares = 3;
     colors = generateRandomColors(numSquares);
     colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
     for(var i = 0; i < squares.length; i++) {
         if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
             squares[i].style.display = "none";
        }
    }
 });

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
      
    }
});

resetButton.addEventListener("click", function() {
// reset();

colors = generateRandomColors(numSquares);
colorPicked = pickColor();
colorDisplay.textContent = colorPicked;
h1.style.background= "linear-gradient(to bottom right, rgb(200, 23, 23), rgb(189, 130, 21), rgb(175, 175, 25), rgb(27, 170, 27), rgb(26, 26, 163), rgb(89, 18, 139), violet)";

message.textContent = "";
this.textContent = "New Colors"


for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}
h1.style.background = "steelbue";
})

colorDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]

squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background

    if(clickedColor === colorPicked) {
        message.textContent = "Correct"
        changeColor(clickedColor);
        h1.style.backgroundColor = colorPicked
        resetButton.textContent = "Play Again";
        stripe.style.color= colorPicked
       
     } else {
        this.style.background = "#232323";
        message.textContent = "Try again"
        

     }   
}
 
)

}


function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return  colors[random];
}




function generateRandomColors(num) {
    var arr = []
    for( var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}4