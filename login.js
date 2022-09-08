const loginbtn = document.querySelector(".submit");
const mensagem = document.querySelector("#message");
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");

loginbtn.addEventListener('click', () => {
    if ((user.value == 'thais' && pass.value == '1234') || (user.value == 'laura' && pass.value == '1234')) {
        window.location.href = "file:///C:/Users/User/Documents/site-pw/inicial.html";
        alert(`${user.value} , seu login foi efetuado com sucesso!`);
    }
    else {
        mensagem.innerHTML = 'Usuário ou senha inválidos';
    }
});