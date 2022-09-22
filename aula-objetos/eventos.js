let aluno = {
    Nome:"Beatriz",
    CPF: "051.409.255.09",
    dataDeNascimento:"05.02.2000",
    endereço: {
        lagradouro:"av. Bez M",
        numero: 23,
        cidade: "caucaia"
    },
    frequentar: function(){
        console.log("presente")
    },
    concluirMatricula: function(){
        console.log("conculindo matricula")
    },
    cancelarMatricula: function(){
        console.log("desistindo")
    }
}
console.log(aluno.Nome)
console.log(aluno.endereço.cidade)

aluno.concluirMatricula();
aluno.frequentar();





/*let valor = 326.7896;
document.write(
    Math.round(valor)
);

let carro = {
    cor:"vermelho",
    modelo:"Fusca",
    acelerar: function(velocidade){
        console.log(`${velocidade} vrum vrum...`);
    },
     frear: function (){
        console.log("freando...");
     }
}
console.log(carro.cor)

carro.acelerar(100);
carro.acelerar(150)*/