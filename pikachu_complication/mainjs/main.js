!function pikachuPlay(){
    let playAudioBtn = document.getElementsByClassName('playAudio'),pikachuAudio = document.getElementById('pikachu-audio'), audioLock;

    playAudioBtn[0].addEventListener('click', function(mouseEvent) {
        if(audioLock){
            clearTimeout(audioLock);
        }
        audioLock = setTimeout(function(){
            pikachuAudio.play()
        }, 50)
    });
}.call()