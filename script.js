let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let controlIcon = document.querySelector('#controlIcon');
console.log(controlIcon);

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (controlIcon.classList.contains('fa-pause')) {
        song.pause();
        controlIcon.classList.remove('fa-pause')
        controlIcon.classList.add('fa-play')
    } else {
        song.play();
        controlIcon.classList.remove('fa-play')
        controlIcon.classList.add('fa-pause')
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}

progress.onchange = () => {
    song.play()
    song.currentTime = progress.value;
    controlIcon.classList.remove('fa-play')
    controlIcon.classList.add('fa-pause')
}

controlIcon.addEventListener('click', playPause)