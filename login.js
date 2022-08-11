const senha = document.querySelector(".senha");
const showBtn = document.querySelector(".show");

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