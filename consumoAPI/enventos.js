function excluir(id){
    fetch('http://localhost:8000/compras/'+id,{
        method: 'DELETE'
    });
    atualizar()
  }



function atualizar(){
    fetch("http://localhost:8000/compras")
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(lista){
        lista.forEach(function
        (cadaItem)
        {
            document.getElementById("tabela_compras").innerHTML+= `
            <tr>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.item}</td>
                <td>${cadaItem.quantidade}</td>
                <td>
                <button class="btn btn-danger" onclick=excluir(${cadaItem.id})>Excluir</button>
                </td>
            </tr>`

        });  

        
    })
}
atualizar()