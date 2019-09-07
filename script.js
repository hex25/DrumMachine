const pads = [
    //buttons
    [document.getElementById('pad1'), document.getElementById('pad2'), document.getElementById('pad3'), document.getElementById('pad4'), document.getElementById('pad5'), document.getElementById('pad6'), document.getElementById('pad7'), document.getElementById('pad8'), document.getElementById('pad9')],
    //sounds
    [document.getElementById('kick1'), document.getElementById('clap1'), document.getElementById('hihat1'), document.getElementById('hihat2'), document.getElementById('shaker1'), document.getElementById('ride1'), document.getElementById('perc1'), document.getElementById('perc2'), document.getElementById('perc4')],
    //colors
    ['#1fff16', '#fc077c', 'yellow', 'red', 'purple', 'orange', '#e000c5', 'cyan', '#f8514a'],
];

const bank1 = [document.getElementById('kick1'), document.getElementById('clap1'), document.getElementById('hihat1'), document.getElementById('hihat2'), document.getElementById('shaker1'), document.getElementById('ride1'), document.getElementById('perc1'), document.getElementById('perc2'), document.getElementById('perc4')];
const bank2 = [document.getElementById('perc3'), document.getElementById('perc1'), document.getElementById('perc2'), document.getElementById('perc5'), document.getElementById('ride1'), document.getElementById('shaker1'), document.getElementById('hihat2'), document.getElementById('clap2'), document.getElementById('kick2')];

const shotButton = document.getElementById('shot-button');
const toggleButton = document.getElementById('toggle-button');

const bank1Button = document.getElementById('bank1');
const bank2Button = document.getElementById('bank2');

const stopButton = document.getElementById('stop-all');

const loadButton = document.getElementById('load');

// seamless audio loop

for (let n = 0; n < bank1.length; n++) {
    bank1[n].addEventListener('timeupdate', function () {
        var buffer = .44
        if (this.currentTime > this.duration - buffer) {
            this.currentTime = 0
            this.play()
        }
    }, false);
    bank2[n].addEventListener('timeupdate', function () {
        var buffer = .44
        if (this.currentTime > this.duration - buffer) {
            this.currentTime = 0
            this.play()
        }
    }, false);
}


for (let i = 1; i < 10; i++) {
    let id = `pad${i}`;
    document.getElementById(id).style.backgroundColor = 'lightgrey';
}

for (let m = 0; m < pads[0].length; m++) {
    shotButton.style.backgroundColor = 'lightgoldenrodyellow';
    toggleButton.style.backgroundColor = 'lightgrey';
    pads[0][m].onmousedown = function () { startPlay(pads[0][m], pads[1][m], pads[2][m]) };
    pads[0][m].onmouseup = function () { stopPlay(pads[0][m], pads[1][m]) };
}

loadButton.style.backgroundColor = 'lightgrey';

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

function playToggleMode(pad, sound, color) {

    if (isClicked(pad) === false) {
        startPlay(pad, sound, color);

    } else if (isClicked(pad) === true) {
        stopPlay(pad, sound)
    }
}

function displaySequencer(sequencerId, color) {
    document.getElementById(sequencerId).style.display = 'block';
    document.getElementById('seq-indicator').style.backgroundColor = color;
}
function hideSequencer(sequencerId) {
    document.getElementById(sequencerId).style.display = 'none';
}

function stopAll() {
    for (let j = 0; j < pads[0].length; j++) {
        stopPlay(pads[0][j], pads[1][j])
    }
}

// click handlers


// mode button clicks

shotButton.onclick = function () {

    for (let k = 0; k < pads[0].length; k++) {
        shotButton.style.backgroundColor = 'lightgoldenrodyellow';
        toggleButton.style.backgroundColor = 'lightgrey';
        loadButton.style.backgroundColor = 'lightgrey';
        pads[0][k].onmousedown = function () { startPlay(pads[0][k], pads[1][k], pads[2][k]) };
        pads[0][k].onmouseup = function () { stopPlay(pads[0][k], pads[1][k]) };
        pads[0][k].onclick = "event.stopPropagation()";
    }

};
toggleButton.onclick = function () {

    for (let j = 0; j < pads[0].length; j++) {
        toggleButton.style.backgroundColor = 'lightgreen';
        shotButton.style.backgroundColor = 'lightgrey';
        loadButton.style.backgroundColor = 'lightgrey';
        pads[0][j].onclick = function () { playToggleMode(pads[0][j], pads[1][j], pads[2][j]) };
        pads[0][j].onmousedown = "event.stopPropagation()";
        pads[0][j].onmouseup = "event.stopPropagation()";
    }
};

// load button click

loadButton.onclick = function () {

    stopAll();
    for (let p = 0; p < pads[0].length; p++) {
        toggleButton.style.backgroundColor = 'lightgrey';
        shotButton.style.backgroundColor = 'lightgrey';
        loadButton.style.backgroundColor = 'tomato';
        pads[0][p].onclick = function () {
            pads[0][p].onmousedown = function () { startPlay(pads[0][p], pads[1][p], pads[2][p]) };
            pads[0][p].onmouseup = function () { stopPlay(pads[0][p], pads[1][p]) };
            for (let i=0; i<9; i++) {
                hideSequencer(`seq-cont${i}`);
            }
            displaySequencer(`seq-cont${p}`, pads[2][p]);
            
        };
    }
}


// bank button clicks

bank1Button.onclick = function () {
    stopAll();
    bank1Button.style.backgroundColor = 'lightpink';
    bank2Button.style.backgroundColor = 'lightgrey';
    pads[1] = bank1;
}
bank2Button.onclick = function () {
    stopAll();
    bank2Button.style.backgroundColor = 'lightskyblue';
    bank1Button.style.backgroundColor = 'lightgrey';
    pads[1] = bank2;
}

// stop all button click

stopButton.onclick = function () { stopAll() };
stopButton.onmousedown = function () {
    stopButton.style.backgroundColor = 'red';
}
stopButton.onmouseup = function () {
    stopButton.style.backgroundColor = 'lightgrey';
}

// sequencer button clicks

/*for (let x=0; x=16; x++) {
    document.getElementById(`seq-b-0${x}`).onclick = function() {
   
            document.getElementById(`seq-b-0${x}`).style.backgroundColor = pads[2][0];
        } else {
            document.getElementById(`seq-b-0${x}`).style.backgroundColor = 'lightgrey';
        }
    }
}
*/


