function buscarEndereço(){
  if(cep.value.length !==8){
    return;
  }
  fetch(`http://viacep.com.br/ws/${cep.value}/json`)  //aqui realiza a busca
    .then((resposta)=> resposta.json())  //resposta chegou e extraimos o json dela
    .then((endereço)=>{ 
        if(endereço.erro){
            alert('CEP inválido');
            return;
        }                 //usamos o json extraído
        logradouro.value =endereço.logradouro
        bairro.value =endereço.bairro
        cidade.value =endereço.localidade
        uf.value =endereço.uf
    }); 
}
