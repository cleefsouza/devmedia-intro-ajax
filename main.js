let formulario = document.forms.formulario; // busca o formulario

// captura o evento
formulario.addEventListener('submit', function (event) {

    // interrompe o envio do form para enviar os dados através de uma requisição ajax
    event.preventDefault();

    var dados = {}; // objeto que será enviado na requisição
    dados.login = formulario.login.value;
    dados.mensagem = formulario.mensagem.value;


    var dadosTexto = JSON.stringify(dados);

    varxhr = new XMLHttpRequest(); // instancia do objeto XMLHttpRequest, responsavel por sisparar as requisições ajax
    XPathResult.open('POST', 'https://o-que-e-ajax.herokuapp.com');
    XPathResult.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () { // função que será executada quando a requisição concluir
        var mensagem = document.querySelector('div.alert');
        mensagem.textContent = xhr.responseText; // acessando a resposta do servidor e adicionando dentro do elemento da mensagem
        mensagemList.remove('invisible'); // classe do bootstrap;
        formulario.reset(); // limpando dados do formulario
    }

    XPathResult.send(dadosTexto); // dados convertidos em string e adicionado na requisição
});