// const base_url = 'https://66f4ad8277b5e889709a2787.mockapi.io/api/v1'
const base_url = 'https://66f4ad8277b5e889709a2787.mockapi.io/api/v1/users'

// fetch(`${base_url}/users`)
//     .then(response => response.json())
//     .then(dados => {
//         if (dados.length > 0) {
//             let listaUser = document.getElementById('lista');
//             dados.map((user) => {
//                 listaUser.innerHTML +=
//                     `
//                     <div>
//                     <h2>Nome: ${user.name ? user.name : "Usuário sem nome"}</h2>
//                     <span> ${user.email ? user.email : "Usuário sem e-mail"} </span>
//                     </div>
//                     `
//             })
//             // console.log(`Dados`, dados)
//         } else {
//             return []
//         }
//     })
//     .catch(error => console.log(error))


// fetch(base_url)
// fetch(`${base_url}/receitas`)
// fetch(`${base_url}/users/postagens`)
// fetch(`${base_url}/login`)
// fetch(`${base_url}/verification`)

function carregarDadosApi() {
    const base_url = 'https://narutodb.xyz/api/character'
    let listaUser = document.getElementById('lista');
    fetch(base_url)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.characters.length > 0) {
                let listaUser = document.getElementById('lista');

                listaUser.innerHTML = dados.characters.map(
                    (user) => (
                        `
                    <div>
                        <h2>Nome:${user.name ? user.name : "Usuário sem nome"}
                        <img src=${user.images ? user.images[0] : "Sem foto"} alt="Foto de Perfil Ninja"/>
                    </div>
                        `

                    ))

            }
            // console.log(`dados`, dados)

        })
        .catch(error => console.log(error));
}
carregarDadosApi()


function cadastro() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    const user = {
        name: name,
        email: email
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
    const base_url = `https://66f4ad8277b5e889709a2787.mockapi.io/api/v1/users${id}`

    // const userId = {
    //     id: id
    // }
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