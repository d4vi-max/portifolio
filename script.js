const dataNascimento = new Date(2007, 3, 24);

function calcularIdade (dataNascimento){
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (mesAtual < dataNascimento.getMonth() ||
    (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
        idade--;
        }
        return idade;
}

const elementoIdade = document.getElementById('idade');
elementoIdade.textContent = calcularIdade(dataNascimento);

/*
{
    const dataIngresso = new Date(2025, 0, 1);

function calcularTempoUniversidade (dataIngresso){
    const hoje = new Date();
    let tempo = hoje.getFullYear() - dataIngresso.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (mesAtual < dataIngresso.getMonth() ||
    (mesAtual === dataIngresso.getMonth() && diaAtual < dataIngresso.getDate())) {
        tempo--;
        }
        return tempo;
}

const elementoIdade = document.getElementById('ano');
    elementoIdade.textContent = calcularTempoUniversidade(dataIngresso);    
}*/