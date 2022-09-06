const nome = document.querySelector("#nome");
const dataNasc = document.querySelector("#dataNasc.value");
const email = document.querySelector("#email.value");
const senha = document.querySelector("#senha");
const confirma = document.querySelector("#confirmaSenha");
const mensagem = document.querySelector("#message");
const botao = document.querySelector(".submit");
const str = " ";

botao.addEventListener('click', () => {
    if(confirma.value != senha.value) {
       mensagem.innerHTML = 'As senhas não são iguais!';
    }
    if(senha.length < 4) {
       mensagem.innerHTML = 'Senha muito pequena, prefira uma senha com mais de 4 caracteres!';
    };
    if(nome.value.includes(str) == false) {
        mensagem.innerHTML = 'Por favor, informe seu nome INTEIRO!';
    }
    else {
        window.location.href = "file:///C:/Users/User/Documents/site-pw/inicial.html";
        alert(`${nome.value} , você foi cadastrado(a) com sucesso!`);
    }
});

