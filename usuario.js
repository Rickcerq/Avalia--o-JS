function registrarMensagem() {


    var txtNome = document.getElementById("txtNome").value
    var txtEmail = document.getElementById("txtEmail").value
    var txtMensagem = document.getElementById("txtMensagem").value

    var Mensagem = {
        nome: txtNome,
        email: txtEmail,
        mensagem: txtMensagem
    }

    
    if (txtNome == "" || txtEmail == "" || txtMensagem == "") {
        alert("Digite os campos abaixo!")
    }

    else {
        inserirMensagem(Mensagem)
        alert("Mensagem registrada com sucesso!")
    }
}