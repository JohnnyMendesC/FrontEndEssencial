function login() {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  // window.location.href = "../html/login.html";

  if (name == 'admin@admin.com' && password == 123) {
    salvarEmail(name);
    window.open('/aula/aula4-localstorage/home.html', '_self');
    // irParaHome();
  } else {
    alert('Credenciais invalidas!');
  }
}

function irParaHome() {
  window.open('/aula/aula4-localstorage/home.html', '_self')
  // window.open('./home.html', '_self');
  // window.open('./home.html', 'blank');    
}


function irParaLogin() {
  window.open('/aula/aula4-localstorage/login.html', '_self');
  // window.open('./login.html', 'blank');
}

function sair() {
  irParaLogin();
  removerEmail();
}
