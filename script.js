const pads = [
    //pads
    [document.getElementById('pad1'), document.getElementById('pad2'), document.getElementById('pad3'), document.getElementById('pad4'), document.getElementById('pad5'), document.getElementById('pad6'), document.getElementById('pad7'), document.getElementById('pad8'), document.getElementById('pad9')],
    //sounds
    [document.getElementById('Q'), document.getElementById('W'), document.getElementById('E'), document.getElementById('A'), document.getElementById('S'), document.getElementById('D'), document.getElementById('Z'), document.getElementById('X'), document.getElementById('C')],
    //colors
    ['#1fff16', '#fc077c', 'yellow', 'red', 'purple', 'orange', '#e000c5', 'cyan', '#f8514a'],
];

const display = document.getElementById('display');

document.getElementById('power').style.backgroundColor = 'lightgrey';

function isClicked(button) {
    if (button.style.backgroundColor === 'lightgrey') {
        return false;
    } else {
        return true;
    }
}

document.getElementById('power').onclick = function () {

    if (isClicked(document.getElementById('power')) === false) {


        display.innerHTML = 'Welcome';
        document.getElementById('power').style.backgroundColor = 'orange';
        document.getElementById('power').style.border = '2px outset orange';

        document.getElementById('body').onkeydown = function(e) {
            let pressedKey = (e.key).toLowerCase();
            if (pressedKey === 'q') {
                pads[1][0].play();
                display.innerHTML = 'Kick Drum 1';
                pads[0][0].style.backgroundColor = pads[2][0];
                pads[0][0].style.border = `2px outset ${pads[2][0]}`;
            }
            if (pressedKey === 'w') {
                pads[1][1].play();
                display.innerHTML = 'Clap 1';
                pads[0][1].style.backgroundColor = pads[2][1];
                pads[0][1].style.border = `2px outset ${pads[2][1]}`;
            }
            if (pressedKey === 'e') {
                pads[1][2].play();
                display.innerHTML = 'Hi Hat 1';
                pads[0][2].style.backgroundColor = pads[2][2];
                pads[0][2].style.border = `2px outset ${pads[2][2]}`;
            }
            if (pressedKey === 'a') {
                pads[1][3].play();
                display.innerHTML = 'Open Hat 1';
                pads[0][3].style.backgroundColor = pads[2][3];
                pads[0][3].style.border = `2px outset ${pads[2][3]}`;
            }
            if (pressedKey === 's') {
                pads[1][4].play();
                display.innerHTML = 'Shaker 1';
                pads[0][4].style.backgroundColor = pads[2][4];
                pads[0][4].style.border = `2px outset ${pads[2][4]}`;
            }
            if (pressedKey === 'd') {
                pads[1][5].play();
                display.innerHTML = 'Ride 1';
                pads[0][5].style.backgroundColor = pads[2][5];
                pads[0][5].style.border = `2px outset ${pads[2][5]}`;
            }
            if (pressedKey === 'z') {
                pads[1][6].play();
                display.innerHTML = 'Percussion 1';
                pads[0][6].style.backgroundColor = pads[2][6];
                pads[0][6].style.border = `2px outset ${pads[2][6]}`;
            }
            if (pressedKey === 'x') {
                pads[1][7].play();
                display.innerHTML = 'Percussion 2';
                pads[0][7].style.backgroundColor = pads[2][7];
                pads[0][7].style.border = `2px outset ${pads[2][7]}`;
            }
            if (pressedKey === 'c') {
                pads[1][8].play();
                display.innerHTML = 'Percussion 3';
                pads[0][8].style.backgroundColor = pads[2][8];
                pads[0][8].style.border = `2px outset ${pads[2][8]}`;
            }
        };

        document.getElementById('body').onkeyup = function(e) {
            let pressedKey = (e.key).toLowerCase();
            if (pressedKey === 'q') {
                pads[0][0].style.backgroundColor = 'lightgrey';
                pads[0][0].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'w') {
                pads[0][1].style.backgroundColor = 'lightgrey';
                pads[0][1].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'e') {
                pads[0][2].style.backgroundColor = 'lightgrey';
                pads[0][2].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'a') {
                pads[0][3].style.backgroundColor = 'lightgrey';
                pads[0][3].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 's') {
                pads[0][4].style.backgroundColor = 'lightgrey';
                pads[0][4].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'd') {
                pads[0][5].style.backgroundColor = 'lightgrey';
                pads[0][5].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'z') {
                pads[0][6].style.backgroundColor = 'lightgrey';
                pads[0][6].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'x') {
                pads[0][7].style.backgroundColor = 'lightgrey';
                pads[0][7].style.border = '2px outset lightgrey';
            };
            if (pressedKey === 'c') {
                pads[0][8].style.backgroundColor = 'lightgrey';
                pads[0][8].style.border = '2px outset lightgrey';
            };

        };


        pads[0][0].onclick = function () {
            pads[1][0].play();
            display.innerHTML = 'Kick Drum 1';
        }
        pads[0][0].onmousedown = function () {
            pads[0][0].style.backgroundColor = pads[2][0];
            pads[0][0].style.border = `2px outset ${pads[2][0]}`;
        }
        pads[0][0].onmouseup = function () {
            pads[0][0].style.backgroundColor = 'lightgrey';
            pads[0][0].style.border = '2px outset lightgrey';
        }

        pads[0][1].onclick = function () {
            pads[1][1].play();
            display.innerHTML = 'Clap 1';
        }
        pads[0][1].onmousedown = function () {
            pads[0][1].style.backgroundColor = pads[2][1];
            pads[0][1].style.border = `2px outset ${pads[2][1]}`;
        }
        pads[0][1].onmouseup = function () {
            pads[0][1].style.backgroundColor = 'lightgrey';
            pads[0][1].style.border = '2px outset lightgrey';
        }

        pads[0][2].onclick = function () {
            pads[1][2].play();
            display.innerHTML = 'Hi Hat 1';
        }
        pads[0][2].onmousedown = function () {
            pads[0][2].style.backgroundColor = pads[2][2];
            pads[0][2].style.border = `2px outset ${pads[2][2]}`;
        }
        pads[0][2].onmouseup = function () {
            pads[0][2].style.backgroundColor = 'lightgrey';
            pads[0][2].style.border = '2px outset lightgrey';

        }

        pads[0][3].onclick = function () {
            pads[1][3].play();
            display.innerHTML = 'Open Hat 1';
        }
        pads[0][3].onmousedown = function () {
            pads[0][3].style.backgroundColor = pads[2][3];
            pads[0][3].style.border = `2px outset ${pads[2][3]}`;
        }
        pads[0][3].onmouseup = function () {
            pads[0][3].style.backgroundColor = 'lightgrey';
            pads[0][3].style.border = '2px outset lightgrey';
        }

        pads[0][4].onclick = function () {
            pads[1][4].play();
            display.innerHTML = 'Shaker 1';
        }
        pads[0][4].onmousedown = function () {
            pads[0][4].style.backgroundColor = pads[2][4];
            pads[0][4].style.border = `2px outset ${pads[2][4]}`;
        }
        pads[0][4].onmouseup = function () {
            pads[0][4].style.backgroundColor = 'lightgrey';
            pads[0][4].style.border = '2px outset lightgrey';
        }

        pads[0][5].onclick = function () {
            pads[1][5].play();
            display.innerHTML = 'Ride 1';
        }
        pads[0][5].onmousedown = function () {
            pads[0][5].style.backgroundColor = pads[2][5];
            pads[0][5].style.border = `2px outset ${pads[2][5]}`;
        }
        pads[0][5].onmouseup = function () {
            pads[0][5].style.backgroundColor = 'lightgrey';
            pads[0][5].style.border = '2px outset lightgrey';
        }

        pads[0][6].onclick = function () {
            pads[1][6].play();
            display.innerHTML = 'Percussion 1';
        }
        pads[0][6].onmousedown = function () {
            pads[0][6].style.backgroundColor = pads[2][6];
            pads[0][6].style.border = `2px outset ${pads[2][6]}`;
        }
        pads[0][6].onmouseup = function () {
            pads[0][6].style.backgroundColor = 'lightgrey';
            pads[0][6].style.border = '2px outset lightgrey';
        }

        pads[0][7].onclick = function () {
            pads[1][7].play();
            display.innerHTML = 'Percussion 2';
        }
        pads[0][7].onmousedown = function () {
            pads[0][7].style.backgroundColor = pads[2][7];
            pads[0][7].style.border = `2px outset ${pads[2][7]}`;
        }
        pads[0][7].onmouseup = function () {
            pads[0][7].style.backgroundColor = 'lightgrey';
            pads[0][7].style.border = '2px outset lightgrey';
        }

        pads[0][8].onclick = function () {
            pads[1][8].play();
            display.innerHTML = 'Percussion 3';
        }
        pads[0][8].onmousedown = function () {
            pads[0][8].style.backgroundColor = pads[2][8];
            pads[0][8].style.border = `2px outset ${pads[2][8]}`;
        }
        pads[0][8].onmouseup = function () {
            pads[0][8].style.backgroundColor = 'lightgrey';
            pads[0][8].style.border = '2px outset lightgrey';
        }

    } else {
        document.getElementById('power').style.backgroundColor = 'lightgrey';
        display.innerHTML = '';
        document.getElementById('power').style.border = '2px outset lightgrey';
        for (let i=0; i<9; i++) {
            pads[0][i].onclick = event.stopPropagation();
            pads[0][i].onmousedown = event.stopPropagation();
            pads[0][i].onmouseup = event.stopPropagation();
        }
        document.getElementById('body').onkeydown = event.stopPropagation();
        document.getElementById('body').onkeyup = event.stopPropagation();
    }
}