
const progresso = document.querySelector("#level-progress");
const contador = document.querySelector('#progress-percentage')

    
progresso.style.width = '65' + '%';
progresso.innerHTML = '' + '%';


function taskProgess() {
    var porcentagem = document.querySelector('#level-progress').value;
    document.querySelector('.progressoTarefa').innerHTML = porcentagem;

}

