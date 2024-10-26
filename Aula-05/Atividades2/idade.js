function calcularIdade(){
    let dataNascimento = new Date(document.getElementById(`dataNascimento`).value);

    const anoAtual = new Date();

    let idade = anoAtual.getFullYear() - dataNascimento.getFullYear();

    document.getElementById(`resultado`).innerText = `<p>A idade é: ${idade}</p>`;
}