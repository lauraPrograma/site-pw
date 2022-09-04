

button.addEventListener('click', () => {
    if ((user.value == 'Thais' && pass == '1234') || (user == 'Laura' && pass == '1234')) {
        window.location.href = "file:///C:/Users/User/Documents/site-pw/inicial.html";
        alert(`${user.value} , seu login foi efetuado com sucesso!`);
    }
    else {
        document.querySelector('#message').innerHTML = 'Usuário ou senha inválidos';
    }
});