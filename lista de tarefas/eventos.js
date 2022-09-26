function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = listadeTarefas.length;
}

function listarTarefas(){
    let conteudo = buscar().map(function(tarefa){
        return `<div><input type="checkbox">${tarefa.titulo}
        <span class="badge 
        ${tarefa.prioridade === 'baixa'&& 'bg-primary'} 
        ${tarefa.prioridade === 'Media'&& 'bg-warning'}
        ${tarefa.prioridade === 'Alta'&& 'bg-danger'}"
        >${tarefa.prioridade}</span></div>`
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
    salvar(titulo, inputPrioridade.value);

    document.getElementById('inputNovaTarefa').value = "";

    atualizarQuantidade();
    listarTarefas(); 
} 

// vai acontecer assim oque o usoario entrar no site
listarTarefas()