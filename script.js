let numberOfButtons = document.querySelectorAll('.drum').length;
for(let i = 0; i < numberOfButtons; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function (){
        let buttonSound = new Audio("sounds/tom-1.mp3");
        switch (this.innerHTML) {
            case "Tom1":
                buttonSound = new Audio("sounds/tom-1.mp3");
                buttonSound.play();
                break;
        
            case "Tom2":
                buttonSound = new Audio("sounds/tom-2.mp3");
                buttonSound.play();
                break;

            case "Tom3":
                buttonSound = new Audio("sounds/tom-3.mp3");
                buttonSound.play();
                break;

            case "Tom4":
                buttonSound = new Audio("sounds/tom-4.mp3");
                buttonSound.play();
                break;

            case "Crash":
                buttonSound = new Audio("sounds/crash.mp3");
                buttonSound.play();
                break;

            case "Kick":
                buttonSound = new Audio("sounds/kick-bass.mp3");
                buttonSound.play();
                break;
        
            case "Snare":
                buttonSound = new Audio("sounds/snare.mp3");
                buttonSound.play();
                break;
        }

        buttonAnimation(this.innerHTML);
    });

    document.addEventListener("keydown", function(event){
        switch(event.key){
            case 'q': 
                buttonSound = new Audio("sounds/tom-1.mp3");
                buttonSound.play();
                break;
            case 'w': 
                buttonSound = new Audio("sounds/tom-2.mp3");
                buttonSound.play();
                break;
            case 'e': 
                buttonSound = new Audio("sounds/tom-3.mp3");
                buttonSound.play();
                break;
            case 'r': 
                buttonSound = new Audio("sounds/tom-4.mp3");
                buttonSound.play();
                break;
            case 'l': 
                buttonSound = new Audio("sounds/crash.mp3");
                buttonSound.play();
                break;
            case 'v': 
                buttonSound = new Audio("sounds/kick-bass.mp3");
                buttonSound.play();
                break;
            case 'g': 
                buttonSound = new Audio("sounds/snare.mp3");
                buttonSound.play();
                break;
        }
        
        buttonAnimation(event.key);
    })

    function buttonAnimation(currentKey){
        let activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
