const ingredientes = ['Pão', 'Queijo', 'Café']

ingredientes.forEach(ingrediente => {
    console.log(ingrediente)
})

ingredientes.map(ingrediente => {   //map não altera, ele cria uma copia e voce 
    console.log(ingrediente)        //modifica ela, mantendo a original intacta
})