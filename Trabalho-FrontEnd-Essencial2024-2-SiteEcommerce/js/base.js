function salvarEmail(name) {
    // localStorage.setItem(`token`, token) se for api
    localStorage.setItem(`chaveEmail`, name) // => (`chave`, valor)
}

function removerEmail() {
    localStorage.removeItem(`chaveEmail`)
}

function pegarEmail() {
    return localStorage.getItem(`chaveEmail`)
}

function usuarioLogado() {
    let chaveEmail = pegarEmail();
    return !!chaveEmail; // !! é para tirar a prova real
}

function irParaHome2() {
    window.open('../html/home.html', '_self');
}


function irParaLogin2() {
    window.open('../html/login.html', '_self');
}
function validarUsuario() {
    let logado = usuarioLogado();
    const caminho = window.location.pathname;

    if (caminho === '/aula/aula4-localstorage/login.html') {
        if (logado) {
            irParaHome2();
        }
    }
    else if (caminho != '/aula/aula4-localstorage/login.html') {
        if (!logado) {
            irParaLogin2();
        }
    }
}