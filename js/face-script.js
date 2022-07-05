// p5 play Falling Objects Game
// Win once it reaches 20
// Lose once it becomes negative
// Use the mouse to move left/right
// var timer =10;
var timeDown;
var Player;

var Object1;
var Object2; // leaf
var Object3;

var numObject1 = 4;
var numObject2 = 10; //leaf
var numObject3 = 4;

var speed1 = 5;
var speed2 = 7; //leaf
var speed3 = 5;

var score = 0;


// setInterval(()=>{
//   timer--;
// }, 1000);
const startLogOutTimer = () => {
  
  let time = 20;
  const tick = () => {
      let min = String(Math.trunc(time / 60)).padStart(2, 0);
      let seconds = String(time % 60).padStart(2, 0);

      timeDown= `${min}:${seconds}`;

      if (time === 0) {
          clearInterval(timer);
      }
      time--;
  };

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
startLogOutTimer()
function setup() {
  const mycanvas = createCanvas(window.innerWidth-6  , (window.innerHeight*76)/100);
  mycanvas.parent("playpanle");
  noCursor();

  frameRate(30);
  bg = loadImage('imgs/bg.jpg');

  // new Object1 group
  Object1 = new Group();
  //create Object1 in arrays
  for (let i = 0; i < numObject1; i++) {
    var b = createSprite(random(0, width), random(-400, 0));
    b.addImage(
      loadImage(
        "imgs/face-1.png"
      )
    );
    Object1.add(b);
  }

  // new Object2 group
  Object2 = new Group();
    //create bees
  for (let i = 0; i < numObject2; i++) {
    var b = createSprite(random(0, width), random(-400, 0));
    b.addImage(
      loadImage(
        "imgs/leaf.png"
      )
    );
    Object2.add(b);
  }

  // new Object1 group
  Object3 = new Group();
  //create Object1 in arrays
  for (let i = 0; i < numObject3; i++) {
    var b = createSprite(random(0, width), random(-400, 0));
    b.addImage(
      loadImage(
        "imgs/face-2.png"
      )
    );
    Object3.add(b);
  }

  
  // create Player sprite
  // Player = createSprite(100, height-55);
  // Player.addImage(
  //   loadImage(
  //     "imgs/bassket.png"
  //   )
  // );

}
////////// end of setup /////////////

function draw() {
  // background(bg)
  clear()
  runGame();
  drawSprites();
}
/////////////////////////////////////

function runGame() {
  textSize(50);
  stroke(255);
  fill(255, 255, 255);
  text(timeDown, 50,50);
  text('scoure', width-350,50);
  text(score, width-170,50);
  // move the player
  Player.position.x = mouseX;
  
  // display the objectsa
  Obj1();
  Obj2();
  Obj3();

  
  if ( timeDown == '00:00' ) {
    // text("Congratilations!!!",180,height/2);
    noLoop();
    // clearInterval(setInterval(()=>{
    //   timer--;
    // }, 1000));
    localStorage.setItem('score',score)
    window.location='final.html'
  } 
}

function Obj1() {
    for (let j = 0; j < numObject1; j++) {
  
    Object1[j].velocity.y = speed1;

    
      Object1[j].onMousePressed = function () {
      // Move the object
      Object1[j].position.x = -100;
      Object1[j].position.y = -100;

      score+=600;
    }
    
    // Reset the objects
    if (Object1[j].position.y > height) {
      Object1[j].position.x = random(0, width);
      Object1[j].position.y = random(-200, 0);
    }
  }
}
function Obj3() {
    for (let j = 0; j < numObject3; j++) {
  
    Object3[j].velocity.y = speed3;

    Object3[j].onMousePressed = function () {

      // Move the object
      Object3[j].position.x = -100;
      Object3[j].position.y = -100;

      score+=650;

    } 
    // Reset the objects
    if (Object3[j].position.y > height) {
      Object3[j].position.x = random(0, width);
      Object3[j].position.y = random(-200, 0);
    }
  }
}


function Obj2() {
    for (let j = 0; j < numObject2; j++) {
  
    Object2[j].velocity.y = speed2;

    Object2[j].onMousePressed = function () {

      // Move the object
      Object2[j].position.x = -100;
      Object2[j].position.y = -100;
      
      score-=150;

      //noLoop();

    }

    // Reset the circles
    if (Object2[j].position.y > height) {
      Object2[j].position.x = random(0, width);
      Object2[j].position.y = random(-200, 0);
    }
  }
}