let wasFirstKeyPressed = false;

let greetingsAnime = anime({
    targets: '.greeting',
    opacity: 1,
    duration: 2000,
    easing: 'easeOutExpo',
    offset: 500
});

let greetingsAnimeHiding = {
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 0,
    targets: '.greeting',
};

window.onkeypress = function () {
    if(!wasFirstKeyPressed) {
        greetingsAnime.pause();
        anime(greetingsAnimeHiding);
        wasFirstKeyPressed = true;
    }
};