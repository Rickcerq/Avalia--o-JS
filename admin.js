function enviarUsuario() {
    var txtEmail = document.getElementById("txtEmail").value
    var txtSenha = document.getElementById("txtSenha").value

    ObjSenhaLogin = {
        email: txtEmail,
        senha: txtSenha
    }

    if (txtEmail == "" || txtSenha =="") {
        alert("Por favor, insira os campos abaixo!")
    }
    else {
        if (validarUsuario(ObjSenhaLogin) == true){
            window.open("mensagens.html")
        }
        else {
            alert("Senha ou email incoretos, digite novamente")
        }
    }
}