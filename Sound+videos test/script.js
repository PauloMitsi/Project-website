let audio = document.getElementById('audio')
let box = document.getElementById('box')
let video = document.getElementById('video')
let source = document.getElementById('s')
let bg = document.getElementById('bg')

/*em vez de criar dois atributos no elemento "section", adicionei um eventlistener para facilitar o trabalho*/

//Mouse dentro
box.addEventListener('mouseover',
    function over()
    {
        box.innerHTML = ''
        bg.style.backgroundColor = '#1b1b1b'
        bg.style.transition = '.8s'
        video.style.opacity = 1
        video.style.transitionDelay = '.6s'
        audio.setAttribute('src', "Audio/Liebestraum_no_3.mp3")
        source.setAttribute('src', "Videos/pianoback.m4v")
        video.setAttribute('autoplay', 'True')
        audio.setAttribute('autoplay', 'True')
    })


//Mouse fora
box.addEventListener('mouseout',
    function out()
    {
        bg.style.backgroundColor = '#424140'

        nsitionDelay = '.8s'
        setTimeout(function ()
        {
            box.innerHTML = 'Let yout mouse here'
        }, 500)
        video.style.opacity = 0
        video.style.transition = '0.1s'
        source.removeAttribute('src', "")
        video.removeAttribute('autoplay')
        audio.setAttribute('src', "")
        audio.removeAttribute('autoplay')
    })

