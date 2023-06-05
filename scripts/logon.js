function compararSenha() {
    var email = document.getElementById("gmail").value;
    var password = document.getElementById("senha").value;

    if (email === "sinuos@gmail.com" && password === "Sinuos") {
        window.location.href = "index.html";
    } else {
        alert("Senha ou email estão incorretos. Tente novamente.");
    }
}

function salvarDados() {
    var email = document.getElementById("gmail").value;
    var senha = document.getElementById("senha").value;
    var lembrar = document.getElementById("check").checked;

    if (lembrar) {
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("senha");
    }
  }

  function preencherCampos() {
    var emailSalvo = localStorage.getItem("email");
    var senhaSalva = localStorage.getItem("senha");
    var lembrarSalvo = emailSalvo && senhaSalva;

    document.getElementById("gmail").value = emailSalvo;
    document.getElementById("senha").value = senhaSalva;
    document.getElementById("check").checked = lembrarSalvo;
  }

  function comparar(){
    var senha1= getElementById("senha1").value;
    var senha2=getElementById("senha2").value;

    if(senha1 === senha2){
        window.location.href = "registrar.html";
    }
    else{
        alert("As senhas não corresponde");
    }
  }