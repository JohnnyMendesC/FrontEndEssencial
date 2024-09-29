function login() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
  
    if (name == 'retroloja' && password == 123) {
      salvarEmail(name);
      window.open('../html/home.html', '_self');
    } else {
      alert('Credenciais invalidas!');
    }
  }
  
  function irParaHome() {
    window.open('../html/home.html', '_self')
  }
  
  
  function irParaLogin() {
    window.open('../html/login.html', '_self');
  }
  
  function sair() {
    irParaLogin();
    removerEmail();
  }
  