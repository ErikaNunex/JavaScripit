fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regioes) => {
        regioes.forEach( (cadaRegiao) => {
            document.getElementById('regiao').innerHTML+=`
            <option>${cadaRegiao.nome}</option>`;
    });
});

