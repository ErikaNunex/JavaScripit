let listadeTarefas = []

function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = listadeTarefas.length;
}

function listarTarefas(){
    let conteudo = listadeTarefas.sort().map(function(tarefa){
        return `<div><input type="checkbox">${tarefa}</div>`
    })

    document.getElementById('tarefas').innerHTML= conteudo.join('');
}

function addTarefa(){
    event.preventDefault(); //não atualizar pagina
    let titulo = document.getElementById('inputNovaTarefa').value;
    
    if(titulo.trim() === ''){
        alert('tarefa invalida');
        return;
    }
    if(listadeTarefas.includes(titulo)){
        alert('essa tarefa já existe');
        return;
    }
    listadeTarefas.push(titulo);

    document.getElementById('inputNovaTarefa').value = "";

    atualizarQuantidade();
    listarTarefas();
} 