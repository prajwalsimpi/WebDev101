var play1 = document.querySelector("#p1");
var play2 = document.querySelector("#p2");
var rst = document.querySelector("#reset"); 
var p1d = document.querySelector("#p1dp");
var p2d = document.querySelector("#p2dp");
var numIp = document.querySelector("input");
var p1scr = 0;
var p2scr = 0;
var gameOver = false;
var winScr = 5;

play1.addEventListener("click", function(){
    if(!gameOver){
        p1scr++;
        if(p1scr === winScr){
            p1d.classList.add("winner");
            gameOver = true;
        }
        p1d.textContent = p1scr;
    }
});
play2.addEventListener("click", function(){
    if(!gameOver){
        p2scr++;
        if(p2scr === winScr){
            p2d.classList.add("winner");
           gameOver = true;
        }
       p2d.textContent = p2scr;
    }
}); 
function rest(){
    p1scr = 0;
    p2scr = 0;
    p1d.textContent = 0;
    p2d.textContent = 0;
    p1d.classList.remove("winner");
    p2d.classList.remove("winner");
    gameOver = false;
}
rst.addEventListener("click", function(){
    rest();
});
numIp.addEventListener("change", function(){
    document.getElementById("endGame").textContent = numIp.value;
    winScr = Number(numIp.value);
    rest();
});
