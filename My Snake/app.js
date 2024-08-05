let head = 1;
let snakeBody = [1];
let direction = 1;
let foodBox;
let headBox;
let interval;
let nextDirection = 1;
let score = 0;

function moveHead() {
    direction = nextDirection;
    if (direction == 1) {
        head++;
        if (head % 17 == 1) {
            out();
        }
    } else if (direction == 2) {
        head += 17;
        if (head > 289) {
            out();
        }
    } else if (direction == 3) {
        head--;
        if (head % 17 == 0) {
            out();
        }
    } else {
        head -= 17;
        if (head < 1) {
            out();
        }
    }
    snakeBody.push(head);
    headBox = document.getElementById(head);

    if (headBox.classList.contains('snake')) {
        out();
    }

    if (headBox == foodBox) {
        score++;
        document.getElementById('score').innerText = score;
        food();
    } else {
        moveTail();
    }
    headBox.classList.add('snake');
}

function moveTail() {
    let tail = snakeBody.shift();
    document.getElementById(tail).classList.remove('snake');
}

function restart() {
    if (interval != null) {
        return;
    }
    for (let i = 0; i < snakeBody.length; i++) {
        document.getElementById(snakeBody[i]).classList.remove('snake');
    }
    snakeBody = [1];
    head = 1;
    interval = setInterval(moveHead, 160);
    direction = 1;
    nextDirection = 1;
    score = 0;
    document.getElementById('score').innerText = score;
    food();
}

function out() {
    alert("Game Over! Your score: " + score);
    clearInterval(interval);
    interval = null;
}

document.addEventListener("keydown", setDirection);
function setDirection(e) {
    if (nextDirection != direction) {
        return;
    }
    switch (e.code) {
        case "ArrowRight":
            if (nextDirection != 3) {
                nextDirection = 1;
            }
            break;
        case "ArrowLeft":
            if (nextDirection != 1) {
                nextDirection = 3;
            }
            break;
        case "ArrowUp":
            if (nextDirection != 2) {
                nextDirection = 4;
            }
            break;
        case "ArrowDown":
            if (nextDirection != 4) {
                nextDirection = 2;
            }
            break;
    }
}

function food() {
    do {
        var khavanu = parseInt(1 + Math.random() * 289);
        if (foodBox != null) {
            foodBox.classList.remove('food');
        }
        foodBox = document.getElementById(khavanu);
    } while (foodBox.classList.contains('snake'));

    foodBox.classList.add('food');
}

restart();
