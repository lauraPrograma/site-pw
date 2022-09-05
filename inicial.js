const entrar = document.querySelector("#entrar");
const criaConta = document.querySelector("#criaconta");
const sobre = document.querySelector("#sobre");
const contato = document.querySelector("#contato");


entrar.addEventListener('click', () => {
  window.location.href = "file:///C:/Users/User/Documents/site-pw/login.html";
})

criaConta.addEventListener('click', () => {
  window.location.href = "file:///C:/Users/User/Documents/site-pw/cadastro.html";
});

sobre.addEventListener('click', () => {
  document.querySelector("#navbar").classList.add('hidden');
  document.querySelector("#nav2").classList.add('active');
});

contato.addEventListener('click', () => {
  document.querySelector("#navbar").classList.add('hidden');
  document.querySelector("#nav2").classList.remove('active');
  document.querySelector("#nav3").classList.add('active');
});