const base_url = 'https://mockapi.io/projects/66f75308b5d85f31a34277a3#/users'

//  {
//     "requestId": "$datatype.uuid",
//     "items": "$mockData",
//     "count": "$count",
//     "anyKey": "anyValue"
//   }

function cadastro() {
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value


    const user = {
        name: name,
        password: password
    }
    fetch(base_url, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resposta => resposta.json())
    .then(resultado => alert('Usuario cadastrado com sucesso', resultado))
    .catch(error => console.log(error));    
}

function deletarUsuario(){
    let id = document.getElementById(`deletar`).value
    const base_url = `https://mockapi.io/projects/66f75308b5d85f31a34277a3#/users${id}`
    fetch(base_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id:id })
    })
    .then(resposta => resposta.json())
    .then(resultado => alert('Usuario deletado com sucesso', resultado))
    .catch(error => console.log(error)); 
}