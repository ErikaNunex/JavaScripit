const API_URL = 'http://localhost:8000'

function marcarTodos(){
    let todos = document.querySelectorAll('[data-check="acao"]');
    todos.forEach((cadaCheck) =>{
        cadaCheck.checked = checkAll.checked;
    })
    acionarButaoExcluir()
}
 

function buscarParaEditar(id){
    fetch(API_URL+'/compras/'+id)
        .then(resposta => resposta.json()) 
        .then(itens =>{
            inputEditarId.value = itens.id;
            inputEditarItem.value = itens.item;
            inputEditarQuantidade.value = itens.quantidade;
        });

}

function editar(){
    console.log(2)
    event.preventDefault();
    
    let dados = {
        item:inputEditarItem.value,
        quantidade:inputEditarQuantidade.value,
    };
    fetch(API_URL+'/compras/'+inputEditarId.value,{
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers:{
            'Content-Type':'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(() => atualizar());
    let x =document.querySelector('[data-bs-dismiss="offcanvas"]');
    x.dispatchEvent(new Event('click'));
}

function inserir(){
    event.preventDefault();
    
    let dados ={
        item: item.value,
        quantidade: parseInt(quantidade.value),
    };

    fetch(API_URL+'/compras', {
       method: 'POST',
       body:JSON.stringify(dados),
       headers: {
        'Content-Type': 'application/json'
       }
    })
    .then(resposta => resposta.json())
    .then(resposta => atualizar());
    formADD.resert();
}

async function excluir(id){
   let resposta = confirm('voce tem certeza?')
   if(resposta !== true){
    return;
   }
   await fetch(API_URL+'/compras/'+id,{
        method: 'DELETE'
    });
    atualizar()
}



function atualizar(){
    tabela_compras.innerHTML = '';
    fetch(API_URL+'/compras')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(lista){
        lista.forEach(function
        (cadaItem)
        {
            tabela_compras.innerHTML+= `
            <tr>
                <td><input onclick="acionarButaoExcluir()" value=${cadaItem.id} data-check="acao" type="checkbox"></td>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.item}</td>
                <td>${cadaItem.quantidade}</td>
                <td>
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" onclick="buscarParaEditar(${cadaItem.id})" class="btn btn-warning btn-sm">Editar</button>
                <button class="btn btn-danger" onclick=excluir(${cadaItem.id})>Excluir</button> 
                </td>
            </tr>`

        });  
 
        
    })
}
atualizar()
