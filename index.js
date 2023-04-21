// detecting button press......

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);

    });
}

// detecting keyboard press.....

document.addEventListener("keydown", function(event){
    makeSound(event.key);  // it notes the key pressed by the keyboard, if it matches with switch case then the corresponding audio play..
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "a":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case"d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            console.log(buttoninnerHTML); 
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton =document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // pressed class has been defined in css page for creating animation 
                                           // after add classlist the "pressed" class remains activated
                                           // we need to turn off this "pressed" class after sometime. so that we
                                           // can get animation like feel.
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);  //after 100ms=0.1sec the pressed class will get deactivated

}









