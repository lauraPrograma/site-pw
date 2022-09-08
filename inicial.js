const entrar = document.querySelector("#entrar");
const criaConta = document.querySelector("#criaconta");
const sobre = document.querySelector("#sobre");
const contato = document.querySelector("#contato");
const mostrar = document.querySelector("#mostrar");

entrar.addEventListener('click', () => {
  window.location.href = "file:///C:/Users/User/Documents/site-pw/login.html";
})

criaConta.addEventListener('click', () => {
  window.location.href = "file:///C:/Users/User/Documents/site-pw/cadastro.html";
});

sobre.addEventListener('click', () => {
  document.querySelector("#navbar").classList.add('hidden');
  document.querySelector("#nav2").classList.add('active');
  document.querySelector("#nav4").classList.add('hidden');
  document.querySelector("#back-to-top").classList.add('hidden');

});

contato.addEventListener('click', () => {
  document.querySelector("#navbar").classList.add('hidden');
  document.querySelector("#nav2").classList.remove('active');
  document.querySelector("#nav3").classList.add('active');
  document.querySelector("#nav4").classList.add('hidden');
  document.querySelector("#back-to-top").classList.add('hidden');

});


let state = 0;
mostrar.addEventListener('click', () => {
  if(state == 0) {
    document.querySelector("#categ").classList.add('active');
  }else if(state==1) {
    document.querySelector("#categ").classList.remove('active');
  }
  state++;
});


 var btn = document.querySelector("#back-to-top");
 btn.addEventListener("click", function() {
  window.scrollTo({
        top: 0,
         behavior: 'smooth'
  })
});

var mostra = document.querySelector("#mostra");

mostra.addEventListener('click', function() {
  window.scrollTo({
    top: 600,
    behavior: 'smooth'
  })
});