var musica = document.getElementById("audio");

var controle = document.getElementById("imageController");

function play_load() {
    controle.setAttribute('src', 'img/load.png');
    setTimeout(play_music, 1000);
}

function play_music() {
    controle.setAttribute('src', 'img/pause.png');
    musica.play();

    controle.onclick = pause_music;
}

function pause_music() {
    musica.pause();
    controle.setAttribute('src', 'img/play.png');
    controle.onclick = play_music;
}

musica.ontimeupdate = function () {
    audio_update()
};

function audio_update() {
    if (musica.currentTime == musica.duration) {
        controle.setAttribute('src', 'img/play.png');
        controle.onclick = play_load;
    }
}

function play() {
    document.getElementById('video').play();
}

function pause() {
    document.getElementById('video').pause();
}

var video = document.getElementById('video');
video.ontimeupdate = function () {
    video_update()
};

function video_update() {
    var teste = document.getElementById('video');
    document.getElementById('loading').value = teste.currentTime;
}