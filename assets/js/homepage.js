function inactiveall() {
    document.getElementById("yosemiteswm").classList.add("inactive");
    document.getElementById("yosemitebackground").classList.add("inactive");
    document.getElementById("yosemiter").classList.add("inactive");
    document.getElementById("yosemitel").classList.add("inactive");
    document.getElementById("y1").classList.add("inactive");
    document.getElementById("y2").classList.add("inactive");
    document.getElementById("y3").classList.add("inactive");
    document.getElementById("yosemitename").classList.add("inactive");
    document.getElementById("yosemiteclick").classList.add("inactive");
    document.getElementById("berkeleyswm").classList.add("inactive");
    document.getElementById("berkeleybackground").classList.add("inactive");
    document.getElementById("berkeleyr").classList.add("inactive");
    document.getElementById("berkeleyl").classList.add("inactive");
    document.getElementById("b1").classList.add("inactive");
    document.getElementById("b2").classList.add("inactive");
    document.getElementById("b3").classList.add("inactive");
    document.getElementById("berkeleyname").classList.add("inactive");
    document.getElementById("berkeleyclick").classList.add("inactive");
    document.getElementById("sbswm").classList.add("inactive");
    document.getElementById("sbbackground").classList.add("inactive");
    document.getElementById("sbr").classList.add("inactive");
    document.getElementById("sbl").classList.add("inactive");
    document.getElementById("sb1").classList.add("inactive");
    document.getElementById("sb2").classList.add("inactive");
    document.getElementById("sb3").classList.add("inactive");
    document.getElementById("sbname").classList.add("inactive");
    document.getElementById("sbclick").classList.add("inactive");
    document.getElementById("sdswm").classList.add("inactive");
    document.getElementById("sdbackground").classList.add("inactive");
    document.getElementById("sdr").classList.add("inactive");
    document.getElementById("sdl").classList.add("inactive");
    document.getElementById("sd1").classList.add("inactive");
    document.getElementById("sd2").classList.add("inactive");
    document.getElementById("sd3").classList.add("inactive");
    document.getElementById("sdname").classList.add("inactive");
    document.getElementById("sdclick").classList.add("inactive");
    document.getElementById("laswm").classList.add("inactive");
    document.getElementById("labackground").classList.add("inactive");
    document.getElementById("lar").classList.add("inactive");
    document.getElementById("lal").classList.add("inactive");
    document.getElementById("la1").classList.add("inactive");
    document.getElementById("la2").classList.add("inactive");
    document.getElementById("la3").classList.add("inactive");
    document.getElementById("laname").classList.add("inactive");
    document.getElementById("laclick").classList.add("inactive");
    document.getElementById("yosemite").innerHTML = '';
    document.getElementById("berkeley").innerHTML = '';
    document.getElementById("sb").innerHTML = '';
    document.getElementById("la").innerHTML = '';
    document.getElementById("sd").innerHTML = '';
}

function yosemitetoggle () {
    inactiveall();
    document.getElementById("yosemiteswm").classList.remove("inactive");
    document.getElementById("yosemiteswm").classList.add("active");
    document.getElementById("yosemitebackground").classList.remove("inactive");
    document.getElementById("yosemitebackground").classList.add("active");
    document.getElementById("yosemiter").classList.remove("inactive");
    document.getElementById("yosemiter").classList.add("active");
    document.getElementById("yosemiter").zIndex += 1;
    document.getElementById("yosemitel").classList.remove("inactive");
    document.getElementById("yosemitel").classList.add("active");
    document.getElementById("yosemitel").zIndex += 1;
    document.getElementById("y1").classList.remove("inactive");
    document.getElementById("y1").classList.add("active");
    document.getElementById("y2").classList.remove("inactive");
    document.getElementById("y2").classList.add("active");
    document.getElementById("y3").classList.remove("inactive");
    document.getElementById("y3").classList.add("active");
    document.getElementById("yosemitename").classList.remove("inactive");
    document.getElementById("yosemitename").classList.add("active");
    document.getElementById("yosemiteclick").classList.remove("inactive");
    document.getElementById("yosemiteclick").classList.add("active");
    document.getElementById("yosemite").innerHTML = '<a href="Yosemite Blog.html">Click here</a>';
}

document.getElementById("yosemite").onclick = function() {yosemitetoggle()};

function berkeleytoggle () {
    inactiveall();
    document.getElementById("berkeleyswm").classList.remove("inactive");
    document.getElementById("berkeleyswm").classList.add("active");
    document.getElementById("berkeleybackground").classList.remove("inactive");
    document.getElementById("berkeleybackground").classList.add("active");
    document.getElementById("berkeleyr").classList.remove("inactive");
    document.getElementById("berkeleyr").classList.add("active");
    document.getElementById("berkeleyl").classList.remove("inactive");
    document.getElementById("berkeleyl").classList.add("active");
    document.getElementById("b1").classList.remove("inactive");
    document.getElementById("b1").classList.add("active");
    document.getElementById("b2").classList.remove("inactive");
    document.getElementById("b2").classList.add("active");
    document.getElementById("b3").classList.remove("inactive");
    document.getElementById("b3").classList.add("active");
    document.getElementById("berkeleyname").classList.remove("inactive");
    document.getElementById("berkeleyname").classList.add("active");
    document.getElementById("berkeleyclick").classList.remove("inactive");
    document.getElementById("berkeleyclick").classList.add("active");
    document.getElementById("berkeley").innerHTML = '<a href="Berkeley Blog.html">Click here</a>';
}

document.getElementById("berkeley").onclick = function() {berkeleytoggle()};

function sbtoggle () {
    inactiveall();
    document.getElementById("sbswm").classList.remove("inactive");
    document.getElementById("sbswm").classList.add("active");
    document.getElementById("sbbackground").classList.remove("inactive");
    document.getElementById("sbbackground").classList.add("active");
    document.getElementById("sbr").classList.remove("inactive");
    document.getElementById("sbr").classList.add("active");
    document.getElementById("sbl").classList.remove("inactive");
    document.getElementById("sbl").classList.add("active");
    document.getElementById("sb1").classList.remove("inactive");
    document.getElementById("sb1").classList.add("active");
    document.getElementById("sb2").classList.remove("inactive");
    document.getElementById("sb2").classList.add("active");
    document.getElementById("sb3").classList.remove("inactive");
    document.getElementById("sb3").classList.add("active");
    document.getElementById("sbname").classList.remove("inactive");
    document.getElementById("sbname").classList.add("active");
    document.getElementById("sbclick").classList.remove("inactive");
    document.getElementById("sbclick").classList.add("active");
    document.getElementById("sb").innerHTML = '<a href="SB Blog.html">Click here</a>';
}

document.getElementById("sb").onclick = function() {sbtoggle()};

function latoggle () {
    inactiveall();
    document.getElementById("laswm").classList.remove("inactive");
    document.getElementById("laswm").classList.add("active");
    document.getElementById("labackground").classList.remove("inactive");
    document.getElementById("labackground").classList.add("active");
    document.getElementById("lar").classList.remove("inactive");
    document.getElementById("lar").classList.add("active");
    document.getElementById("lal").classList.remove("inactive");
    document.getElementById("lal").classList.add("active");
    document.getElementById("la1").classList.remove("inactive");
    document.getElementById("la1").classList.add("active");
    document.getElementById("la2").classList.remove("inactive");
    document.getElementById("la2").classList.add("active");
    document.getElementById("la3").classList.remove("inactive");
    document.getElementById("la3").classList.add("active");
    document.getElementById("laname").classList.remove("inactive");
    document.getElementById("laname").classList.add("active");
    document.getElementById("laclick").classList.remove("inactive");
    document.getElementById("laclick").classList.add("active");
    document.getElementById("la").innerHTML = '<a href="LA Blog.html">Click here</a>';
}

document.getElementById("la").onclick = function() {latoggle()};

function sdtoggle () {
    inactiveall();
    document.getElementById("sdswm").classList.remove("inactive");
    document.getElementById("sdswm").classList.add("active");
    document.getElementById("sdbackground").classList.remove("inactive");
    document.getElementById("sdbackground").classList.add("active");
    document.getElementById("sdr").classList.remove("inactive");
    document.getElementById("sdr").classList.add("active");
    document.getElementById("sdl").classList.remove("inactive");
    document.getElementById("sdl").classList.add("active");
    document.getElementById("sd1").classList.remove("inactive");
    document.getElementById("sd1").classList.add("active");
    document.getElementById("sd2").classList.remove("inactive");
    document.getElementById("sd2").classList.add("active");
    document.getElementById("sd3").classList.remove("inactive");
    document.getElementById("sd3").classList.add("active");
    document.getElementById("sdname").classList.remove("inactive");
    document.getElementById("sdname").classList.add("active");
    document.getElementById("sdclick").classList.remove("inactive");
    document.getElementById("sdclick").classList.add("active");
    document.getElementById("sd").innerHTML = '<a href="SD Blog.html">Click here</a>';
}

document.getElementById("sd").onclick = function() {sdtoggle()};

let yvar = 1;

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

let bvar = 1;

function bsw(direction) {
    if(direction == 1) {
        bvar += 1;
        if(bvar == 4){
            bvar = 1;
        }
    }
    if(direction == -1) {
        bvar -= 1;
        if(bvar == 0){
            bvar = 3;
        }
    }
    if(bvar == 1) {
        document.getElementById("b1").style.zIndex = 10;
        document.getElementById("b2").style.zIndex = 9;
        document.getElementById("b3").style.zIndex = 9;
    }
    if(bvar == 2) {
        document.getElementById("b2").style.zIndex = 10;
        document.getElementById("b1").style.zIndex = 9;
        document.getElementById("b3").style.zIndex = 9;
    }
    if(bvar == 3) {
        document.getElementById("b3").style.zIndex = 10;
        document.getElementById("b2").style.zIndex = 9;
        document.getElementById("b1").style.zIndex = 9;
    }
}

document.getElementById("berkeleyl").onclick = function(){bsw(-1);};
document.getElementById("berkeleyr").onclick = function(){bsw(1); yosesw(-1);};

let sbvar = 1;

function sbsw(direction) {
    if(direction == 1) {
        sbvar += 1;
        if(sbvar == 4){
            sbvar = 1;
        }
    }
    if(direction == -1) {
        sbvar -= 1;
        if(sbvar == 0){
            sbvar = 3;
        }
    }
    if(sbvar == 1) {
        document.getElementById("sb1").style.zIndex = 10;
        document.getElementById("sb2").style.zIndex = 9;
        document.getElementById("sb3").style.zIndex = 9;
    }
    if(sbvar == 2) {
        document.getElementById("sb2").style.zIndex = 10;
        document.getElementById("sb1").style.zIndex = 9;
        document.getElementById("sb3").style.zIndex = 9;
    }
    if(sbvar == 3) {
        document.getElementById("sb3").style.zIndex = 10;
        document.getElementById("sb2").style.zIndex = 9;
        document.getElementById("sb1").style.zIndex = 9;
    }
}

document.getElementById("sbl").onclick = function(){sbsw(-1);};
document.getElementById("sbr").onclick = function(){sbsw(1);};

let sdvar = 1;

function sdsw(direction) {
    if(direction == 1) {
        sdvar += 1;
        if(sdvar == 4){
            sdvar = 1;
        }
    }
    if(direction == -1) {
        sdvar -= 1;
        if(sdvar == 0){
            sdvar = 3;
        }
    }
    if(sdvar == 1) {
        document.getElementById("sd1").style.zIndex = 10;
        document.getElementById("sd2").style.zIndex = 9;
        document.getElementById("sd3").style.zIndex = 9;
    }
    if(sdvar == 2) {
        document.getElementById("sd2").style.zIndex = 10;
        document.getElementById("sd1").style.zIndex = 9;
        document.getElementById("sd3").style.zIndex = 9;
    }
    if(sdvar == 3) {
        document.getElementById("sd3").style.zIndex = 10;
        document.getElementById("sd2").style.zIndex = 9;
        document.getElementById("sd1").style.zIndex = 9;
    }
}

document.getElementById("sdl").onclick = function(){sdsw(-1);};
document.getElementById("sdr").onclick = function(){sdsw(1);};

let lavar = 1;

function lasw(direction) {
    if(direction == 1) {
        lavar += 1;
        if(lavar == 4){
            lavar = 1;
        }
    }
    if(direction == -1) {
        lavar -= 1;
        if(lavar == 0){
            lavar = 3;
        }
    }
    if(lavar == 1) {
        document.getElementById("la1").style.zIndex = 10;
        document.getElementById("la2").style.zIndex = 9;
        document.getElementById("la3").style.zIndex = 9;
    }
    if(lavar == 2) {
        document.getElementById("la2").style.zIndex = 10;
        document.getElementById("la1").style.zIndex = 9;
        document.getElementById("la3").style.zIndex = 9;
    }
    if(lavar == 3) {
        document.getElementById("la3").style.zIndex = 10;
        document.getElementById("la2").style.zIndex = 9;
        document.getElementById("la1").style.zIndex = 9;
    }
}

document.getElementById("lal").onclick = function(){lasw(-1);};
document.getElementById("lar").onclick = function(){lasw(1);};