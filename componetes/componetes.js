


function mostrarSenha(){
    var txtsenha = document.getElementById("txtsenha");
    var checkmostrarsenha = document.getElementById("checkmostrar");
    if(txtsenha.type == 'password' && checkmostrarsenha.checked == true) {
         txtsenha.type = "text";
    } else{
        txtsenha.type = "password"
    }
   
}