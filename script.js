
let canvas = document.getElementById('canvas'); //обращение к canvas
let context = canvas.getContext('2d'); //задаем ему контекст
let x = 10,
    y = 10;

function drawRect(){
context.fillStyle = 'black';//цвет отрисовки
context.clearRect(0,0,300,300); // (слева,сверху,ширина,высота)очишает поле после каждого кадра 
context.fillRect(x,y,50,25); //(10 - слева,10 - сверху,50 - ширина, 25 - высота * 2 - в гугл так)
}
let nexGameStep = (()=>{
   return requestAnimationFrame || 
   function (callback){
      setTimeout(callback,1000/60);
   } //4шаг возврашает requestAnimationFrame, либо функцию setTimeout с аргументом - reuqestRigth, и 60 кадрами в секунду;
})();
let gameEngineStart = (callback)=>{ // 2 шаг принимает аргумент и callback = reqstRigt и вызывает gameEngineStep;
   gameEngine = callback;
   gameEngineStep();
};
let setGameEngine = (callback)=>{ //7 шаг принимает аргумент в виде requestRigth;
   gameEngine = callback; 
};

let gameEngineStep = ()=> { // 3 шаг вызывыает nextGameStep, значением callback - reqstRigt;
   gameEngine();
   nexGameStep(gameEngineStep);
};
let requestRigth = ()=>{ 
      drawRect();
      x+=1.5;
      if(x>=250){
         setGameEngine(requestLeft); //5 шаг  если x>=250, то вызывается setGameEngine с аргументом - requestLeft;
      }
};
let requestLeft = ()=>{ 
   drawRect();
   x-=1.5;
   if(x<=0){
      setGameEngine(requestRigth)//6 шаг вызывает setGameEngine, с аргументом - setGameEngine;
   }
};
gameEngineStart(requestRigth); // 1 шаг первый вызов с аргументом reuqestRigth;


const ctx = new AudioContext();
let audio;

fetch('./audio/jump.mp3')
   .then(data => data.arrayBuffer())
      .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
         .then(decodeAudio => { 
            audio = decodeAudio;
         });

         function plauback(){
            const playSound = ctx.createBufferSource();
            playSound.buffer = audio;
            playSound.connect(ctx.destination);
            playSound.start(ctx.currentTime);
         }
window.addEventListener('mousedown', plauback);

/*

function Observable(){
   var observers = [];
   this.sendMessage = function(msg){
      for (let i = 0, len = observers.length;i < len; i++){
         observers[i].notify(msg);
      }
   };
   this.addObserver = function (observer){
      observers.push(observer);
   };
}

function Observer(behavior){
   this.notify = function (msg){
      behavior(msg);
   };
}

var observable = new Observable();
var obs1= new Observer(function(msg){console.log(msg);});
var obs2=new Observer(function(msg){alert(msg);});

observable.addObserver(obs1);
observable.addObserver(obs2);
setTimeout(function(){observable.sendMessage('текушее время  - ' + new Date());},3000);

*/

let a=[1,2,3,4,5,6,7];
a.forEach((number,index,array)=>{
   console.log('это число: ' + number,'это индекс массива: ' + index,'это массив состоящий: ' + array);
});


let b = a.reduce((prev,item)=>{
   return prev + item;
},0);
console.log(b);

//добавление строки

const out = document.querySelector('.out');
let t = (tag,classList) =>  text => `<${tag} class="${classList.join(' ')}">${text}</${tag}>`;


let div = t('div', ['header' , 'orange' , 'hello']);
let elem = div('hello');

out.innerHTML=elem;



for(let cell of document.querySelectorAll('[data-cell-red]')){
   let attribute = cell.getAttribute('data-cell-red');
   cell.style.background = attribute;
}
let flSkip = false;
for(let cell of document.querySelectorAll('[data-cell-blue]')){
   if(!flSkip) cell.dataset.cellBlue = "#0000CC";
   flSkip=!flSkip;
}