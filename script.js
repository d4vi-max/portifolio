/* Minha Idade */
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

/* Meu ano na Universidade */
{
// Função para calcular e atualizar o ano na universidade
function atualizarAnoUniversidade(idElemento) {
    
    const anoIngresso = 2025;
    const anoFormatura = 2029;

    
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    
    let anoNaUniversidade = anoAtual - anoIngresso + 1; // +1 porque você está no 1º ano em 2024

    // Verifique se já se formou
    if (anoAtual > anoFormatura) {
        anoNaUniversidade = "Formado";
    } else {
        // Formate o texto (ex: "1º ano", "2º ano")
        anoNaUniversidade = anoNaUniversidade + "º ano";
    }

    // Atualize o conteúdo do elemento HTML com o ID fornecido
    document.getElementById(idElemento).textContent = anoNaUniversidade;
}

// Chame a função para cada elemento que deseja atualizar
atualizarAnoUniversidade('ano-universidade-1');
atualizarAnoUniversidade('ano-universidade-2');

}


/* Baixar Meu PDF - Curriculo */
    document.getElementById("download-pdf").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.text("Meu Currículo", 10, 10); // Título do PDF
        doc.fromHTML(document.body, 15, 15); // Converte HTML para PDF
        doc.save("curriculo.pdf"); // Salva o arquivo
    });