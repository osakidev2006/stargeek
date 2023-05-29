const nome = document.getElementById("inome");
const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");
const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) =>{
    if(email.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu email! <p>"
        email.focus();
        return null;
    }

    if(senha.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite sua senha! <p>"
        senha.focus();
        return null;
    }

    if(nome.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu nome! <p>"
        nome.focus();
        return null;
    }


    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        email : email.value,
        senha : senha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML = "<p> Parabéns Cadastro feito com sucesso <p>";

    setTimeout(() =>{
        window.location.assign("index.html");
    }, 3000);
}
