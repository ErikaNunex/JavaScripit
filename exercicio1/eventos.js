function addTarefa(){
    event.preventDefault(); //não atualizar pagina
    let titulo = document.getElementById('inputNovaTarefa').value;

    document.getElementById('inputNovaTarefa').value = "";

    document.getElementById('tarefas').innerHTML+=
   ` <div>
   <input type="checkbox">${titulo}
   </div>`
}