const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");
const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
    let logado;
    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value) {
            evento.preventDefault();
           window.location.assign ("catalogo.html");
           let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
           dados.push(
            {
                email : email.value
            }
           )
           sessionStorage.setItem("logado", JSON.stringify(dados));

            return true;
        } else {
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail incorreto"
        }

    });
}