
document.getElementById('mensagens').style.display = 'none';

function fecharMsg(event){
    event.currentTarget.parentElement.style.display = "none";
}


function abrirMensagem(classeMensagem, textoMensagem){
    var divMensagens = document.getElementById('mensagens')
    divMensagens.innerHTML = textoMensagem + '<span class="x" onclick="fecharMsg(event)">&times;</span>';
    divMensagens.className = 'mensagem' + classeMensagem;
    divMensagens.style.display = 'block';
}