let yvar = 1

function yosesw(direction) {
    if(direction == 1) {
        yvar += 1;
        if(yvar == 4){
            yvar = 1;
        }
    }
    if(direction == -1) {
        yvar -= 1;
        if(yvar == 0){
            yvar = 3;
        }
    }
    if(yvar == 1) {
        document.getElementById("y1").style.zIndex = 10;
        document.getElementById("y2").style.zIndex = 9;
        document.getElementById("y3").style.zIndex = 9;
    }
    if(yvar == 2) {
        document.getElementById("y2").style.zIndex = 10;
        document.getElementById("y1").style.zIndex = 9;
        document.getElementById("y3").style.zIndex = 9;
    }
    if(yvar == 3) {
        document.getElementById("y3").style.zIndex = 10;
        document.getElementById("y2").style.zIndex = 9;
        document.getElementById("y1").style.zIndex = 9;
    }
}

document.getElementById("yosemitel").onclick = function(){yosesw(-1); bsw(1);};
document.getElementById("yosemiter").onclick = function(){yosesw(1);};
