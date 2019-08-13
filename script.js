const pads = [
    //buttons
    [document.getElementById('pad1'), document.getElementById('pad2'), document.getElementById('pad3'), document.getElementById('pad4'), document.getElementById('pad5'), document.getElementById('pad6'), document.getElementById('pad7'), document.getElementById('pad8'), document.getElementById('pad9')],
    //sounds
    [document.getElementById('perc1'), document.getElementById('perc2'), document.getElementById('perc3'), document.getElementById('perc4'), document.getElementById('shaker1'), document.getElementById('ride1'), document.getElementById('hihat1'), document.getElementById('clap1'), document.getElementById('kick1')],
    //colors
    ['#1fff16', '#fc077c', 'yellow', 'red', 'purple', 'orange', '#e000c5', 'cyan', '#f8514a'],
];

const modeButtons = [
    [document.getElementById('shot1'), document.getElementById('shot2'), document.getElementById('shot3'), document.getElementById('shot4'), document.getElementById('shot5'), document.getElementById('shot6'), document.getElementById('shot7'), document.getElementById('shot8'), document.getElementById('shot9')],
    [document.getElementById('toggle1'), document.getElementById('toggle2'), document.getElementById('toggle3'), document.getElementById('toggle4'), document.getElementById('toggle5'), document.getElementById('toggle6'), document.getElementById('toggle7'), document.getElementById('toggle8'), document.getElementById('toggle9')]
];

for (let i = 1; i < 10; i++) {
    let id = `pad${i}`;
    document.getElementById(id).style.backgroundColor = 'lightgrey';
}

for (let l = 1; l < 10; l++) {
    let shotid = `shot${l}`;
    document.getElementById(shotid).style.backgroundColor = 'lightgoldenrodyellow';
}

for (let m = 1; m < 10; m++) {
    let toggleid = `toggle${m}`;
    document.getElementById(toggleid).style.backgroundColor = 'lightgrey';
}


function isClicked(item) {
    if (item.style.backgroundColor === 'lightgrey') {
        return false;
    } else {
        return true;
    }
}


// MODE BUTTONS

for (let n = 0; n < modeButtons[0].length; n++) {

    modeButtons[0][n].onclick = function () {
        if (isClicked(modeButtons[0][n]) === false) {
            modeButtons[0][n].style.backgroundColor = 'lightgoldenrodyellow';
            modeButtons[1][n].style.backgroundColor = 'lightgrey';
        } else if (isClicked(modeButtons[0][n]) === true) {
            modeButtons[1][n].style.backgroundColor = 'lightgreen';
            modeButtons[0][n].style.backgroundColor = 'lightgrey';
        }
    }
    modeButtons[1][n].onclick = function () {
        if (isClicked(modeButtons[1][n]) === false) {
            modeButtons[0][n].style.backgroundColor = 'lightgrey';
            modeButtons[1][n].style.backgroundColor = 'lightgreen';
        } else if (isClicked(modeButtons[1][n]) === true) {
            modeButtons[1][n].style.backgroundColor = 'lightgrey';
            modeButtons[0][n].style.backgroundColor = 'lightgoldenrodyellow';
        }
    }
}


/* SHOT MODE Function

function playShotMode() {

    for (let k = 0; k < pads[0].length; k++) {

        pads[0][k].onmousedown = function () {
    
            pads[1][k].play();
            pads[0][k].style.backgroundColor = pads[2][k];
        }
        pads[0][k].onmouseup = function () {
    
            pads[1][k].load();
            pads[0][k].style.backgroundColor = 'lightgrey';
        }
        pads[0][k].ontouchstart = function () {
    
            pads[1][k].play();
            pads[0][k].style.backgroundColor = pads[2][k];
        }
        pads[0][k].ontouchend = function () {
    
            pads[1][k].load();
            pads[0][k].style.backgroundColor = 'lightgrey';
        }
    }
}

function playToggleMode() {
    
    for (let j=0; j<pads[0].length; j++) {
    
    pads[0][j].onclick = function(){
        if (isClicked(pads[0][j]) === false) {
            pads[1][j].play();
            pads[0][j].style.backgroundColor = pads[2][j];
        } else if (isClicked(pads[0][j]) === true) {
            pads[1][j].pause();
            pads[0][j].style.backgroundColor = 'lightgrey';
        }
    }
    }
}

for (let o=0; o<pads.length; o++) {

    if (isClicked(modeButtons[0][o]) === true) {
        playShotMode();
    } else if (isClicked(modeButtons[1][o]) === true) {
        playToggleMode();
    }

}

*/



// SHOT MODE

for (let k = 0; k < pads[0].length; k++) {

    pads[0][k].onmousedown = function () {

        pads[1][k].play();
        pads[0][k].style.backgroundColor = pads[2][k];
    }
    pads[0][k].onmouseup = function () {

        pads[1][k].load();
        pads[0][k].style.backgroundColor = 'lightgrey';
    }
    pads[0][k].ontouchstart = function () {

        pads[1][k].play();
        pads[0][k].style.backgroundColor = pads[2][k];
    }
    pads[0][k].ontouchend = function () {

        pads[1][k].load();
        pads[0][k].style.backgroundColor = 'lightgrey';
    }
}


/* TOGGLE MODE


function isClicked(item) {
    if (item.style.backgroundColor === 'lightgrey') {
        return false;
    } else {
        return true;
    }
}

for (let j=0; j<pads[0].length; j++) {

pads[0][j].onclick = function(){
    if (isClicked(pads[0][j]) === false) {
        pads[1][j].play();
        pads[0][j].style.backgroundColor = pads[2][j];
    } else if (isClicked(pads[0][j]) === true) {
        pads[1][j].pause();
        pads[0][j].style.backgroundColor = 'lightgrey';
    }
}
}

*/