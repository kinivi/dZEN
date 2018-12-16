'use strict'

let povtorka = {
    targets: '#povtorka',
    rotate: {
        value: 135,
        duration: 0
    },
    translateX: -250,
    translateY: -250,
    direction: 'alternate',
    duration: 300,
    scale: 2
};

let animeJS = anime(povtorka);

window.onkeypress = function(){animeJS.restart()};



