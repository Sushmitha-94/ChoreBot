let batDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let doorImage1=document.getElementById("door1");
let doorImage2=document.getElementById("door2");
let doorImage3=document.getElementById("door3");
let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let currentlyPlaying=true;
let startButton=document.getElementById("start");

let isBot=(door)=>{
  if(door.src===batDoorPath)
    return true;
  return false;
}

let isClicked=(door)=>{
  if(door.src===closedDoorPath)
    return false;
  return true;
}

const playDoor=(door)=>{
  numClosedDoors--;
  if(numClosedDoors===0)
    gameOver('win');
  else if(isBot(door))
    gameOver();
    
}

let randomChoreDoorGenerator=()=>{
  const choreDoor=Math.floor(Math.random()*numClosedDoors);
  switch(choreDoor){
    case 0:
      openDoor1=batDoorPath;
      openDoor2=beachDoorPath;
      openDoor3=spaceDoorPath;
      break;
    case 1:
      openDoor1=spaceDoorPath;
      openDoor2=batDoorPath;
      openDoor3=beachDoorPath;
      break;
    case 2:
      openDoor1=beachDoorPath;
      openDoor2=spaceDoorPath;
      openDoor3=batDoorPath;
      break;
  }
}

doorImage1.onclick=()=>{
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src=openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick=()=>{
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src=openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick=()=>{
  if(!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src=openDoor3;
    playDoor(doorImage3);
  }
}

let startRound=()=>{
  numClosedDoors=3;
  currentlyPlaying= true;
  startButton.innerHTML= 'Good luck!';
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  randomChoreDoorGenerator();
}

let gameOver=(status)=>{
  if(status==='win')
  	startButton.innerHTML='You win! Play again?';
  else
    startButton.innerHTML='Game over! Play again?';
  currentlyPlaying=false;
}
startRound();
startButton.onclick=()=>{
	startRound();
}