const pad1 = document.getElementById('pad1');
const pad2 = document.getElementById('pad2');
const pad3 = document.getElementById('pad3');
const pad4 = document.getElementById('pad4');
const pad5 = document.getElementById('pad5');
const pad6 = document.getElementById('pad6');
const pad7 = document.getElementById('pad7');
const pad8 = document.getElementById('pad8');
const pad9 = document.getElementById('pad9');


const perc1 = document.getElementById('perc1');
const perc2 = document.getElementById('perc2');
const perc3 = document.getElementById('perc3');
const perc4 = document.getElementById('perc4');
const shaker1 = document.getElementById('shaker1');
const ride1 = document.getElementById('ride1');
const hihat1 = document.getElementById('hihat1');
const clap1 = document.getElementById('clap1');
const kick1 = document.getElementById('kick1');

// SHOT MODE
pad1.onmousedown = function(){
        perc1.play();
        pad1.style.backgroundColor = '#1fff16';
}
pad1.onmouseup = function(){
        perc1.load();
        pad1.style.backgroundColor = 'lightgrey';
}  

pad2.onmousedown = function(){
    perc2.play();
    pad2.style.backgroundColor = '#fc077c';
}
pad2.onmouseup = function(){
    perc2.load();
    pad2.style.backgroundColor = 'lightgrey';
}  

pad3.onmousedown = function(){
    perc3.play();
    pad3.style.backgroundColor = 'yellow';
}
pad3.onmouseup = function(){
    perc3.load();
    pad3.style.backgroundColor = 'lightgrey';
}  

pad4.onmousedown = function(){
    perc4.play();
    pad4.style.backgroundColor = 'red';
}
pad4.onmouseup = function(){
    perc4.load();
    pad4.style.backgroundColor = 'lightgrey';
}  

pad5.onmousedown = function(){
    shaker1.play();
    pad5.style.backgroundColor = 'purple';
}
pad5.onmouseup = function(){
    shaker1.load();
    pad5.style.backgroundColor = 'lightgrey';
}  

pad6.onmousedown = function(){
    ride1.play();
    pad6.style.backgroundColor = 'orange';
}
pad6.onmouseup = function(){
    ride1.load();
    pad6.style.backgroundColor = 'lightgrey';
} 

pad7.onmousedown = function(){
    hihat1.play();
    pad7.style.backgroundColor = '#e000c5';
}
pad7.onmouseup = function(){
    hihat1.load();
    pad7.style.backgroundColor = 'lightgrey';
} 

pad8.onmousedown = function(){
    clap1.play();
    pad8.style.backgroundColor = 'cyan';
}
pad8.onmouseup = function(){
    clap1.load();
    pad8.style.backgroundColor = 'lightgrey';
} 

pad9.onmousedown = function(){
    kick1.play();
    pad9.style.backgroundColor = '#f8514a';
}
pad9.onmouseup = function(){
    kick1.load();
    pad9.style.backgroundColor = 'lightgrey';
} 

// TOUCH SCREEN

pad1.ontouchstart = function(){
    perc1.play();
    pad1.style.backgroundColor = '#1fff16';
}
pad1.ontouchend = function(){
    perc1.load();
    pad1.style.backgroundColor = 'lightgrey';
}  

pad2.ontouchstart = function(){
perc2.play();
pad2.style.backgroundColor = '#fc077c';
}
pad2.ontouchend = function(){
perc2.load();
pad2.style.backgroundColor = 'lightgrey';
}  

pad3.ontouchstart = function(){
perc3.play();
pad3.style.backgroundColor = 'yellow';
}
pad3.ontouchend = function(){
perc3.load();
pad3.style.backgroundColor = 'lightgrey';
}  

pad4.ontouchstart = function(){
perc4.play();
pad4.style.backgroundColor = 'red';
}
pad4.ontouchend = function(){
perc4.load();
pad4.style.backgroundColor = 'lightgrey';
}  

pad5.ontouchstart = function(){
shaker1.play();
pad5.style.backgroundColor = 'purple';
}
pad5.ontouchend = function(){
shaker1.load();
pad5.style.backgroundColor = 'lightgrey';
}  

pad6.ontouchstart = function(){
ride1.play();
pad6.style.backgroundColor = 'orange';
}
pad6.ontouchend = function(){
ride1.load();
pad6.style.backgroundColor = 'lightgrey';
} 

pad7.ontouchstart = function(){
hihat1.play();
pad7.style.backgroundColor = '#e000c5';
}
pad7.ontouchend = function(){
hihat1.load();
pad7.style.backgroundColor = 'lightgrey';
} 

pad8.ontouchstart = function(){
clap1.play();
pad8.style.backgroundColor = 'cyan';
}
pad8.ontouchend = function(){
clap1.load();
pad8.style.backgroundColor = 'lightgrey';
} 

pad9.ontouchstart = function(){
kick1.play();
pad9.style.backgroundColor = '#f8514a';
}
pad9.ontouchend = function(){
kick1.load();
pad9.style.backgroundColor = 'lightgrey';
} 


/* TOGGLE MODE

function isClicked(item) {
    if (item.style.backgroundColor === 'lightgrey') {
        return false;
    } else {
        return true;
    }
}

pad1.onclick = function(){
    if (isClicked(pad1) === false) {
        perc1.play();
        pad1.style.backgroundColor = 'blue';
    } else if (isClicked(pad1) === true) {
        perc1.pause();
        pad1.style.backgroundColor = 'lightgrey';
    } 
}; 

pad2.onclick = function(){
    if (isClicked(pad2) === false) {
        perc2.play();
        pad2.style.backgroundColor = 'green';
    } else if (isClicked(pad2) === true) {
        perc2.pause();
        pad2.style.backgroundColor = 'lightgrey';
    }
}; 

pad3.onclick = function(){
    if (isClicked(pad3) === false) {
        perc3.play();
        pad3.style.backgroundColor = 'tomato';
    } else if (isClicked(pad3) === true) {
        perc3.pause();
        pad3.style.backgroundColor = 'lightgrey';
    }
}; 
pad4.onclick = function(){
    if (isClicked(pad4) === false) {
        perc4.play();
        pad4.style.backgroundColor = 'purple';
    } else if (isClicked(pad4) === true) {
        perc4.pause();
        pad4.style.backgroundColor = 'lightgrey';
    }
}; 

pad5.onclick = function(){
    if (isClicked(pad5) === false) {
        shaker1.play();
        pad5.style.backgroundColor = 'cyan';
    } else if (isClicked(pad5) === true) {
        shaker1.pause();
        pad5.style.backgroundColor = 'lightgrey';
    }
}; 
pad6.onclick = function(){
    if (isClicked(pad6) === false) {
        ride1.play();
        pad6.style.backgroundColor = 'yellow';
    } else if (isClicked(pad6) === true) {
        ride1.pause();
        pad6.style.backgroundColor = 'lightgrey';
    }
}; 
pad7.onclick = function(){
    if (isClicked(pad7) === false) {
        hihat1.play();
        pad7.style.backgroundColor = 'pink';
    } else if (isClicked(pad7) === true) {
        hihat1.pause();
        pad7.style.backgroundColor = 'lightgrey';
    }
}; 
pad8.onclick = function(){
    if (isClicked(pad8) === false) {
        clap1.play();
        pad8.style.backgroundColor = 'brown';
    } else if (isClicked(pad8) === true) {
        clap1.pause();
        pad8.style.backgroundColor = 'lightgrey';
    }
}; 
pad9.onclick = function(){
    if (isClicked(pad9) === false) {
        kick1.play();
        pad9.style.backgroundColor = '#e000c5';
    } else if (isClicked(pad9) === true) {
        kick1.pause();
        pad9.style.backgroundColor = 'lightgrey';
    }
}; 

*/
