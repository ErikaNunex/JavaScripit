function atualizarQuantidade(){
    // document.getElementById('numeros').innerHTML = .length;
}

function listarTarefas(){
    // let conteudo = buscar().map(function(tarefa){
    //     return `<div>
    //     <input type="checkbox">${tarefa.titulo}
    //     <span class="badge 
    //     ${tarefa.prioridade === 'baixa'&& 'bg-primary'} 
    //     ${tarefa.prioridade === 'Media'&& 'bg-warning'}
    //     ${tarefa.prioridade === 'Alta'&& 'bg-danger'}"
    //     >${tarefa.prioridade}</span></div>`
    // })
    fetch('https://62a4da7d47e6e4006399353b.mockapi.io/v1/tarefa3')
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (resposta) {
        if (typeof resposta !== "string") {
            let conteudo = resposta
                .sort()
                .map(function (tarefa) {
                    return `
                        <div>
                            <input type="checkbox"> ${tarefa.titulo}
                        </div>
                    `;
                });

            document.getElementById('tarefas').innerHTML = conteudo.join('');
        }
    })
    document.getElementById('tarefas').innerHTML= conteudo.join('');
}

function addTarefa(){
    event.preventDefault(); //não atualizar pagina
    let titulo = document.getElementById('inputNovaTarefa').value;
    
    // if(titulo.trim() === ''){
    //     alert('tarefa invalida');
    //     return;
    // }
    // if(listadeTarefas.includes(titulo)){
    //     alert('essa tarefa já existe');
    //     return;
    // }
    
    // salvar(titulo, inputPrioridade.value);
    fetch('https://62a4da7d47e6e4006399353b.mockapi.io/v1/tarefa3', {
        method: "POST",
        body: JSON.stringify({
            titulo,
            prioridade: "baixa"
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (resposta) {
            alert(JSON.stringify(resposta))
            document.getElementById('input_nova_tarefa').value = '';
            atualizarQuantidade();
            listarTarefas();
       
            document.getElementById('inputNovaTarefa').value = "";

            atualizarQuantidade();
            listarTarefas(); 
       
       
        })
} 

// vai acontecer assim oque o usoario entrar no site
listarTarefas()