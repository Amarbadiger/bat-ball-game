
let score = {
    win: 0,
    loss: 0,
    tie: 0,
}
function track(){
    document.querySelector('h3').innerText =`your score: Win:${score.win} Loss:${score.loss} Tie:${score.tie}`;
}
function bat() {
    let result = Math.floor((Math.random() * 3) + 1);
    let you = document.querySelector('#you').src = 'img/bat.png';
    let bat = 'your choice is bat';
    if (result == 1) {
        document.querySelector('h2').innerText = bat + ' and my choice is bat: its tie🤝';
        document.querySelector('#me').src = 'img/bat.png';
        score.tie++;
        track();
    }
    else if (result == 2) {
        document.querySelector('h2').innerText = bat + ' and my choice ball: you won 🏆';
        document.querySelector('#me').src = 'img/ball.png';
        score.win++;
        track();
    }
    else {
        document.querySelector('h2').innerText = bat + ' and my choice is: stump you lossed😔';
        document.querySelector('#me').src = 'img/stump.png';
        score.loss++;
        track();
    }
}
function ball() {
    result = Math.floor((Math.random() * 3) + 1);
    let BALL = 'your choice is ball';
    you = document.querySelector('#you').src = 'img/ball.png';
    if (result == 1) {
        document.querySelector('h2').innerText = BALL + ' and my choice is bat: you lossed😔';
        document.querySelector('#me').src = 'img/bat.png';
        score.loss++;
        track();
    }
    else if (result == 2) {
        document.querySelector('h2').innerText = BALL + ' and my choice ball: its tie🤝';
        me = document.querySelector('#me').src = 'img/ball.png';
        score.tie++;
        track();
    }
    else {
        document.querySelector('h2').innerText = BALL + ' and my choice is stump: you won🏆';
        me = document.querySelector('#me').src = 'img/stump.png';
        score.win++;
        track();
    }
}
function stump() {
    result = Math.floor((Math.random() * 3) + 1);
    let STUMP = 'your choice is stump';
    you = document.querySelector('#you').src = 'img/stump.png';
    if (result == 1) {
        document.querySelector('h2').innerText = STUMP + ' and my choice is bat: you won🏆';
        document.querySelector('#me').src = 'img/bat.png';
        score.win++;
        track();
    }
    else if (result == 2) {
        document.querySelector('h2').innerText = STUMP + ' and my choice ball: you lossed😔';
        me = document.querySelector('#me').src = 'img/ball.png';
        score.loss++;
        track();
    }
    else {
        document.querySelector('h2').innerText = STUMP + ' and my choice is stump: its tie🤝';
        me = document.querySelector('#me').src = 'img/stump.png';
        score.tie++;
        track();
    }
}