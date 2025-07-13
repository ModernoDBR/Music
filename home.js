const treino = document.getElementById('treino'),
          calma = document.getElementById('calma'),
          classica = document.getElementById('classica'),
          motivacao = document.getElementById('motivacao');

function treinof(){
    window.open("treino.html", '_blank');
}

function calmaf(){
    window.open("calma.html", '_blank');
}

function classicaf(){
    window.open("classica.html", '_blank');
}

function motivacaof(){
    window.open("moti.html", '_blank');
}

treino.addEventListener('click', treinof);
calma.addEventListener('click', calmaf);
classica.addEventListener('click', classicaf);
motivacao.addEventListener('click', motivacaof);