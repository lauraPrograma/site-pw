const nome = document.querySelector("#nome");
const dataNasc = document.querySelector("#dataNasc");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirma = document.querySelector("#confirmaSenha");
const mensagem = document.querySelector("#message");
const botao = document.querySelector(".submit");

botao.addEventListener('click', () => {
    if(confirma.value != senha.value) {
       mensagem.innerHTML = 'As senhas não são iguais!';
    }

})

