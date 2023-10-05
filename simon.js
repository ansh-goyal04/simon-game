let gameseq=[];
let userseq=[];
let btns=["one","two","three","four"];
let scores=[];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started==false){
        
        started=true;

        levelup();
    }
})

function flash(btn){
    btn.classList.add("flash");
    setTimeout( ()=>{
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( ()=>{
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let r=Math.floor(Math.random()*3);
    let rand=btns[r];
    let randbtn=document.querySelector(`.${rand}`);
    gameseq.push(rand);
    

    flash(randbtn);
}

function checkans(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        let score=level-1;
        scores.push(score);
        h2.innerHTML=`Game over !!  Your score is <b>${score}</b> <br> press any key to restart`;
        reset();
    }

}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    
    userseq.push(usercolor);

    checkans(userseq.length-1);

}

let allbtns=document.querySelectorAll(".box");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    let h3=document.querySelector("#score");
    h3.innerText=`${Math.max(...scores)}`;
    
    level=0;
    started=false;
    gameseq=[];
    userseq=[];
    let div=document.querySelector("body");
    setTimeout(()=>{
       
        div.style.backgroundColor="red";
    }),200;
    setTimeout(()=>{
        div.style.backgroundColor="white";

    },250);
}