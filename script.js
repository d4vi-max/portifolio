/* Minha Idade */
const dataNascimento = new Date(2007, 3, 24); // 24 de abril de 2007

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    // Verifica se já fez aniversário este ano
    if (mesAtual < dataNascimento.getMonth() || 
        (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Atualiza a idade no site
const elementoIdade = document.getElementById('idade');
if (elementoIdade) {
    elementoIdade.textContent = calcularIdade(dataNascimento);
} else {
    console.error('Elemento com ID "idade" não encontrado.');
}

/* Meu ano na Universidade */
function atualizarAnoUniversidade(idElemento) {
    const anoIngresso = 2025;
    const anoFormatura = 2029;
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let anoNaUniversidade = anoAtual - anoIngresso + 1; // +1 porque você está no 1º ano em 2025

    // Verifica se já se formou
    if (anoAtual > anoFormatura) {
        anoNaUniversidade = "Formado";
    } else {
        // Formata o texto (ex: "1º ano", "2º ano")
        anoNaUniversidade = anoNaUniversidade + "º ano";
    }

    // Atualiza o conteúdo do elemento HTML com o ID fornecido
    const elementoAno = document.getElementById(idElemento);
    if (elementoAno) {
        elementoAno.textContent = anoNaUniversidade;
    } else {
        console.error(`Elemento com ID "${idElemento}" não encontrado.`);
    }
}

// Chama a função para cada elemento que deseja atualizar
atualizarAnoUniversidade('ano-universidade-1');
atualizarAnoUniversidade('ano-universidade-2');

/* Baixar Meu PDF - Currículo */
document.getElementById("download-pdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("Meu Currículo", 10, 10); // Título do PDF
    doc.fromHTML(document.body, 15, 15); // Converte HTML para PDF
    doc.save("curriculo.pdf"); // Salva o arquivo
});

