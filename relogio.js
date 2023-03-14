const timer = document.querySelector('.timer');
let segundos = 0;
let iniciarbutton

function getSeconds (segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'UTC'});
}

function playTimer (){
    iniciarbutton = setInterval(function(){
        segundos++;
        timer.innerHTML = getSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('iniciar')){
    timer.classList.remove('pausado');
    clearInterval(iniciarbutton);
    playTimer();
    }

    if (el.classList.contains('pausar')){
        timer.classList.add('pausado');
        clearInterval(iniciarbutton); 
        }

    if (el.classList.contains('zerar')){
        timer.classList.remove('pausado');
        clearInterval (iniciarbutton);
        timer.innerHTML = '00:00:00';
        segundos = 0;           
        }
})
