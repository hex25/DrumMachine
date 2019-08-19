const pads = [
    //buttons
    [document.getElementById('pad1'), document.getElementById('pad2'), document.getElementById('pad3'), document.getElementById('pad4'), document.getElementById('pad5'), document.getElementById('pad6'), document.getElementById('pad7'), document.getElementById('pad8'), document.getElementById('pad9')],
    //sounds
    [document.getElementById('perc1'), document.getElementById('perc2'), document.getElementById('perc3'), document.getElementById('perc4'), document.getElementById('shaker1'), document.getElementById('ride1'), document.getElementById('hihat1'), document.getElementById('clap1'), document.getElementById('kick1')],
    //colors
    ['#1fff16', '#fc077c', 'yellow', 'red', 'purple', 'orange', '#e000c5', 'cyan', '#f8514a'],
];

const shotButton = document.getElementById('shot-button');
const toggleButton = document.getElementById('toggle-button');

for (let i = 1; i < 10; i++) {
    let id = `pad${i}`;
    document.getElementById(id).style.backgroundColor = 'lightgrey';
}

for (let m = 0; m < pads[0].length; m++) {
    shotButton.style.backgroundColor = 'lightgoldenrodyellow';
    toggleButton.style.backgroundColor = 'lightgrey';
    pads[0][m].onmousedown = function() {startPlay(pads[0][m],pads[1][m],pads[2][m])};
    pads[0][m].onmouseup = function() {stopPlay(pads[0][m],pads[1][m])};
}

function isClicked(item) {
    if (item.style.backgroundColor === 'lightgrey') {
        return false;
    } else {
        return true;
    }
}

function startPlay(pad, sound, color) {
    sound.play();
    pad.style.backgroundColor = color;
}

function stopPlay(pad, sound) {
    sound.load();
    pad.style.backgroundColor = 'lightgrey';
}

function playToggleMode(pad,sound,color) {

    if (isClicked(pad) === false) {
        startPlay(pad, sound, color);

    } else if (isClicked(pad) === true) {
        stopPlay(pad, sound)
    }
}

// click handlers


// mode button clicks



shotButton.onclick = function() {

    for (let k = 0; k < pads[0].length; k++) {
    shotButton.style.backgroundColor = 'lightgoldenrodyellow';
    toggleButton.style.backgroundColor = 'lightgrey';
    pads[0][k].onmousedown = function() {startPlay(pads[0][k],pads[1][k],pads[2][k])};
    pads[0][k].onmouseup = function() {stopPlay(pads[0][k],pads[1][k])};
    pads[0][k].onclick = "event.stopPropagation()";
    }
    
};
toggleButton.onclick = function() {

    for (let j = 0; j < pads[0].length; j++) {
    toggleButton.style.backgroundColor = 'lightgreen';
    shotButton.style.backgroundColor = 'lightgrey';
    pads[0][j].onclick = function() {playToggleMode(pads[0][j],pads[1][j],pads[2][j])};
    pads[0][j].onmousedown = "event.stopPropagation()";
    pads[0][j].onmouseup = "event.stopPropagation()";
}
};
