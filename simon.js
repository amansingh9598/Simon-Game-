let gameseq=[];
let userseq=[];
let btns=["red","purple","green","yellow"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${randColor}`);
   // console.log(randColor);
    //console.log(ranIdx);
    //console.log(ranBtn);
    gameseq.push(randColor);
    //console.log(gameseq);
    gameflash(ranBtn);
};
function check(idx){
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
        setTimeout|(levelup,1000);
        levelup();
    }
   }else{
    h2.innerHTML=`game is over! Your score was <b>${level}<b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"; 
    },150);
    reset();
   }
};
function btnpress(){
   // console.log(this);
    let btn=this;
   userflash(btn);
   let userColor=btn.getAttribute("id");
   console.log(userColor);
   userseq.push(userColor);
   check(userseq.length-1);

}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}