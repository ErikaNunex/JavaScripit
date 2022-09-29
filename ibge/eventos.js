fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regioes) => {
        regioes.forEach( (cadaRegiao) => {
            document.getElementById('regiao').innerHTML+=`
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>`;
    });
});

function pegarEstado(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados`)
    .then((resposta) => resposta.json())
    .then((estados) => {
        estado.innerHTML = '';
        estados.forEach( (cadaEstado) => {
            document.getElementById('estado').innerHTML+= `
            <option value="${cadaEstado.id}">${cadaEstado.nome}</option>`;
    });
});
}

function pegarCidade(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios`)
    .then((resposta) => resposta.json())
    .then((cidades) => {
        cidade.innerHTML = '';
        cidades.forEach( (cadaCidade) => {
            document.getElementById('cidade').innerHTML+= `
            <option>${cadaCidade.nome}</option>`;
    });
});
}

 