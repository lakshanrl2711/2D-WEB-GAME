function start(event) {

    if (event.key == "Enter" && walkWorkerNumber == 0 && runWorkerNumber == 0) {
        walk();
        timeRemain();
        run();
        runSound.play();
    }

    if (event.key == " ") {

        if (attackWorkerNumber == 0 && runWorkerNumber == 0 && isRun == true) {
            attack();
            attackSound.play();
        }
    }
}


var walkImageNumber = 1;
var walkWorkerNumber = 0;


function walk() {

    walkWorkerNumber = setInterval(() => {

        walkImageNumber++

        if (walkImageNumber == 11) {
            walkImageNumber = 1;
        }

        document.getElementById("zombie").src = "Walk" + walkImageNumber + ".png";

    }, 150);

}

var time = 50;
var timeWorkerNumber = 0;

function timeRemain() {

    timeWorkerNumber = setInterval(() => {

        time--
        
        if (time == 0) {
            runSound.pause();
            alert("Game Over, Try Again!!!");
            window, location.reload();
        }

        document.getElementById("time").innerHTML = "Your Remaining Time: " + time;

    }, 500)

}


var runImageNumber = 1;
var runWorkerNumber = 0;
var knightMarginLeft = 80;
var isRun = false;
var runSound = new Audio("run.mp3");
runSound.loop = true;

function run() {

    isRun = true;

    runWorkerNumber = setInterval(() => {

        runImageNumber++

        if (knightMarginLeft < 1100) {
            knightMarginLeft = knightMarginLeft + 10;
            document.getElementById("knight").style.marginLeft = knightMarginLeft + "px";
        }

        if (knightMarginLeft == 1100) {
            clearInterval(runWorkerNumber);
            runWorkerNumber = 0;
            runSound.pause();
            attack();
            attackSound.play();
           

        }

        if (runImageNumber == 11) {
            runImageNumber = 1;

        }

        document.getElementById("knight").src = "Run" + runImageNumber + ".png";
    }, 100)

}

var attackImageNumber = 1;
var attackWorkerNumber = 0;
var attackCound = 0;
var attackSound = new Audio("attack.mp3");

function attack() {

    attackWorkerNumber = setInterval(() => {

        attackImageNumber++

        if (attackImageNumber == 11) {
            attackImageNumber = 1;
            clearInterval(attackWorkerNumber);
            attackWorkerNumber = 0;
        }



        document.getElementById("knight").src = "Attack" + attackImageNumber + ".png";

    }, 100);

    if (attackCound == 5) {
        alert("You Won!")
        window.location.reload();

    }

    attackCound++

}
