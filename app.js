let body= document.querySelector("body");
let div1= document.querySelector(".red");
let div2= document.querySelector(".green");
let div3= document.querySelector(".yellow");
let div4= document.querySelector(".purple");
let box= [div1,div2,div3,div4];
let h= document.querySelector("h2");
let gameSequence= [];
let userSequence= [];
let isStarted= false;
let level=0;
function randomColor(){
    let i= Math.floor(Math.random()*4);
    box[i].classList.add("blink1");
    gameSequence.push(box[i].getAttribute("id"));
    console.log(`added ${box[i].getAttribute("id")}`);
    console.log(`current game sequence ${gameSequence}`);
    setTimeout(() =>{
        box[i].classList.remove("blink1");
    },600);
}
function updateLevel(){
    h.innerHTML=`level : ${level}`;
    level++;
    randomColor();
    userSequence=[];
}
body.addEventListener("keypress",function(){
    if(!isStarted){
        level++;
        isStarted=true;
        updateLevel();
    }
})
function userColor(div){
    div.classList.add("blink2");
    
    

    setTimeout(() =>{
        div.classList.remove("blink2");
    },600);
}
for(let div of box){
    div.addEventListener("click",function(){
        userColor(div);
        if(isStarted){
            userSequence.push(div.getAttribute("id"));
            console.log(`added ${div.getAttribute("id")}`);
            console.log(`current user sequence ${userSequence}`);
            let check= checkSequence();
            if(!check){
                
                h.innerText= `Game Over, Your score= ${level}`;
                level=0;
                gameSequence=[];
                isStarted=false;
            }else{
                if(userSequence.length===gameSequence.length){
                    updateLevel();
                }
            }
        }
        
    })
}
function checkSequence(){
    let i= userSequence.length-1;
    if(userSequence[i]===gameSequence[i]){
        return true;
    }else{
        return false;
    }
}
