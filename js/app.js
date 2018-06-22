/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

var button = document.createElement('div');
button.id = 'button';
button.innerHTML = 'Start da Roulette bah';
button.addEventListener('click', start);
document.body.appendChild(button);

var button2 = document.createElement('div');
button2.id = 'button2';
button2.innerHTML = 'STOP IT';
button2.addEventListener('click', stop);
document.body.appendChild(button2);

var timer;

function start(){
    console.log('started');
    timer = setInterval(function(){
        console.log('fired');
        // var random = getRandomInt(0, 37);
        var random = Math.floor(Math.random()*37)
        console.log(random);
        var div = document.createElement('div');
        div.innerHTML = random;
        div.className = 'num';
        document.body.appendChild(div);
        var daKine = document.getElementsByClassName('num');
        for(var i=0;i<daKine.length;i++){
          if(random%2!==0){
            div.style.backgroundColor = 'red';
            div.style.color = 'white';
          }else if (random === 0){
            div.style.backgroundColor = 'green';
            div.style.color = 'white';
          }else{
            div.style.backgroundColor = 'black';
            div.style.color = 'white';}
          }
        }, 200);
};

function stop(){
    clearInterval(timer);
}
