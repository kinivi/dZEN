'use strict'

let povtorkaIsAnimating = false;
let animes = [];
let animesConfigs = [];
let sounds = [];

let icqSound = new Howl({
    src: ['sounds/icq_old_sound.mp3']
});

let screamSound = new Howl({
    src: ['sounds/scream.mp3']
});

sounds[13] = icqSound;
sounds[17] = screamSound;

let povtorkaAnime;
let screamAnime;

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
    isAnimating: false,
    code: 13
};

let scream = {
    targets: '#scream',
    rotate: '3turn',
    translateX: -350,
    translateY: -350,
    direction: 'alternate',
    duration: 3000,
    scale: 3,
    isAnimating: false,
    code: 17
};


animesConfigs[13] = povtorka;
animesConfigs[17] = scream;

function choosingAnime(keycode) {
    animate(animesConfigs[keycode], sounds[keycode]);
}

function animate(animationProperty, sound) {
    if (animationProperty.isAnimating) {
        animes[animationProperty.code].restart();
        sound.play();

    } else {
        animes[animationProperty.code] = anime(povtorka);
        animationProperty.isAnimating = true;
        sound.play();
    }
}

function checkKeyPressed(evt) {
    choosingAnime(parseInt(evt.keyCode));
}

window.addEventListener("keydown", checkKeyPressed, false);

anime(scream);




