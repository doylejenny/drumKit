// Detecting Button Press

var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",function () {

  var buttonInnerHTML = this.innerHTML;
  // now if a button is pressed this code will check InnerHTML of button pressed
  // and it sends that info to makeSound(buttonInnerHTML) below in order to play
  // the relevant sound

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

  });

}

// Detecting Keyboard (Press) Down
// If a keydown is detected instead then this below sends the event.key or
// the key property of the event
// note:this eventListener takes into account the entire document, not just
// querySelector used for button detection above

document.addEventListener("keydown", function(event)  {

    makeSound(event.key);

    buttonAnimation(event.key );

});


function makeSound(key){

  switch (key) {
    case "w":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;

    case "a":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;

    case "s":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;

    case "d":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;

    case "j":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       break;

    case "k":
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
       break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


   // var activeButton2 = setInterval(function(), 2000);

}
