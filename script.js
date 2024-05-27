let listaDeNotas = [];
let mensagemAlerta = document.querySelector('.alerta');
let nota = document.getElementById('mensagem-unitaria');

// listaDeNotas = [];

function excluirMensagem(index) {
    listaDeNotas.splice(index, 1);
    nota = document.getElementById('mensagem-unitaria');
    mostrarMensagem();
}

function adicionarMensagem() {
    let suaMensagem = document.getElementById('mensagem').value;
    
    if (suaMensagem != "") {
        listaDeNotas.push(suaMensagem);  
        while (listaDeNotas.length > 15) {
            listaDeNotas.shift();
        }
        mensagemAlerta.innerHTML = '';
    } else {
        mensagemAlerta.innerHTML = 'Write something';
        return; 
    }
    mostrarMensagem()
}

function mostrarMensagem() {
    document.getElementById('mensagem').value = '';
    let mensagensNaTela = listaDeNotas.toReversed();
    let notaNaTela = '';

    for (let i = 0; i < mensagensNaTela.length; i++) {
        notaNaTela += mensagensNaTela[i] + "<br><br><hr />";       
    }  
    nota.innerHTML = notaNaTela;
}

localStorage.setItem('notas', JSON.stringify(listaDeNotas));
 