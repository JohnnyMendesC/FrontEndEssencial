
var nome = 'J'              //acessivel global
let sobreNome = 'M'         //limitada a bloco de codigo {} *let usa mais que o var
const nome2 = 'C'           //constante não pode ser alterada após definida


console.log(nome)

var nome = 'L'

console.log(nome)

{
    console.log('Nome dentro do bloco de codigo') //frase
    console.log('Nome dentro do bloco de codigo') //frase
    
}// o bloco{} todo é um paragrafo

if(nome == 'J'){
    console.log('O nome é J')
} else if (nome == 'L'){
    console.log('O nome é L')
} else {
    console.log('Sem nome')
}

//bloco para pares

//bloco para impares