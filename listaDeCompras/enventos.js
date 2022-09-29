function inserir(){
    event.preventDefault();
    
    let dados ={
        item: item.value,
        quantidade: parseInt(quantidade.value),
    };

    fetch('http://localhost:8000/compras', {
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
   await fetch('http://localhost:8000/compras/'+id,{
        method: 'DELETE'
    });
    atualizar()
}



function atualizar(){
    tabela_compras.innerHTML = '';
    fetch("http://localhost:8000/compras")
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(lista){
        lista.forEach(function
        (cadaItem)
        {
            tabela_compras.innerHTML+= `
            <tr>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.item}</td>
                <td>${cadaItem.quantidade}</td>
                <td>
                <button class="btn btn-warning btn-sm">Editar</button> 
                </td>
                <td>
                <button class="btn btn-danger" onclick=excluir(${cadaItem.id})>Excluir</button>
                </td>
            </tr>`

        });  
 
        
    })
}
atualizar()

function editar(){
    fetch
}