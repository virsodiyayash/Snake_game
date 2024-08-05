
let head = 1;
let snackBody = [1];
let direction = 1;
let foodBox;
let khavanu;
let headBox;
let interval;
let nextDirection;

function moveHead(){
    direction = nextDirection;
    if(direction == 1){
        head++;
        if(head % 17 == 1){
            out();
        }
    }
    else if(direction == 2){
        head = head + 17;
        if(head > 289){
            out();
        }
    }
    else if(direction == 3){
        head--;
        if(head % 17 == 0){
            out();
        }
    }
    else{
        head = head - 17;
        if(head < 1){
            out();
        }
    }
    snackBody.push(head);
    headBox = document.getElementById(head);
    
    if(headBox.style.background=="red"){
        out();
    }
    if(headBox == foodBox){
        food();
    }
    else{
        moveTail();
    }
    headBox.style.background="red";
}

function moveTail(){
    let tail = snackBody.shift()
    let tailBox= document.getElementById(tail).style.background=null;
}


function checkHead(){
    for(let i = 0 ; i < snackBody.length - 1; i++){
        if(head == i){
            console.log("out");
            return false;
        }
    }
    return true;
}

function restart(){
    if(interval != null){
        return;
    }
    for(let i = 0 ; i < snackBody.length ; i++){
        document.getElementById(snackBody[i]).style.background=null;
    }
    snackBody = [1];
    head = 1;
    interval = setInterval(moveHead , 160);
    direction = 1;
    nextDirection = 1;
    food();
    console.log("Food out");
}

function out(){
    alert("You are out");
    head = 1;
    clearInterval(interval);
    interval = null;
}

document.addEventListener("keydown" , setDirection);
function setDirection(e){
    if(nextDirection != direction){
        return;
    }
    switch(e.code){                             
        case "ArrowRight" :                  
            if(nextDirection != 3){
                nextDirection = 1;
            }
        break;
        
        case "ArrowLeft" :
            if(nextDirection != 1){
                nextDirection = 3;
            }
        break;

        case "ArrowUp" :
            if(nextDirection != 2){
                nextDirection = 4;
            }
        break;

        case "ArrowDown" :
            if(nextDirection != 4){
                nextDirection = 2;
            }
        break;
    }
}

function food(){
    do{
        var khavanu = parseInt(1 + Math.random()*289);
        if(foodBox != null) {
            foodBox.style.background=null;
            foodBox.style.borderRadius="0";
        }
        foodBox = document.getElementById(khavanu);
    }while(foodBox.style.background != "");

         foodBox.style.background="yellow";
         foodBox.style.borderRadius="50%";
}
