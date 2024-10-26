const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Fernandes',
    saudacao: () => {
        const mensagem = `Ola ${pessoa.nome} ${pessoa.sobrenome}`
        return mensagem;
    }
}
console.log(pessoa.saudacao());

