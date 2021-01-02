var audio = document.getElementById('audio');
var txt = document.getElementById('text');
var hint = document.getElementById('hint');
var video = document.getElementById('video');

txt.addEventListener('click', function () {
    //Attributes
    setTimeout(() => {
        audio.play();
        video.play();
        video.setAttribute('class', 'video vid_transition');
    }, 800);
    txt.setAttribute('class', 'text txt_transition');
    txt.innerHTML = '';
    hint.setAttribute('style', 'opacity: 1;');
    //Attributes
});

txt.addEventListener('pointerleave', function () {
    audio.pause();
    video.pause();

    //Attributes
    txt.removeAttribute('class');
    txt.setAttribute('class', 'text');
    txt.innerHTML = 'Click me!';
    video.setAttribute('class', 'video');
    hint.setAttribute('style', 'opacity: 0;');
    //Attributes
});
