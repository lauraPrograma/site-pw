const senha = document.querySelector(".senha");
const showBtn = document.querySelector(".show");
const loginBtn = document.querySelector("button");
const user = document.querySelector(".user")

showBtn.addEventListener("click", function () {
    if(senha.type === "password") {
        senha.type = "text";
        showBtn.textContent = "ocultar";
        showBtn.style.color = "#3498db"
    }else {
        senha.type = "password";
        showBtn.textContent = "mostrar";
        showBtn.style.color = "#222";
    }
});


loginBtn.addEventListener("click", function () {
    if(user.value == 'Thais' || user.value == 'Sofia' || user.value == 'Laura' || user.value == 'Pablo') {
        window.location.href = "file:///C:/Users/User/Documents/site-pw/inicial.html";
        alert(`${user.value} , seu login foi efetuado com sucesso!`);
    }
})