'use strict'

let povtorkaIsAnimating = false;
let povtorka = {
    targets: '#povtorka',
    rotate: {
        value: 135,
        duration: 0
    },
    translateX: -350,
    translateY: -350,
    direction: 'alternate',
    duration: 300,
    scale: 1.5,
    oncomplete: () => {
        povtorkaIsAnimating = false;
}
};

let animeJS;

window.onkeypress = function(){
    if(povtorkaIsAnimating) {
        animeJS.restart();
    } else {
        animeJS = anime(povtorka);
        povtorkaIsAnimating = true;
    }

};



