if (localStorage.getItem("token") == null) {

    alert("você precisa estar logado para acessar essa pagína");
    window.location.href = "registro.html";
}
let userlogado = JSON.parse(localStorage.getItem("userlogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = 'Olá $userLogado.nome)'

function sair(){
localStorage.removeItem("token");
localStorage.removeItem("userLogado");
window.location.href = "registro.html";

}