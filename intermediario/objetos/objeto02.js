// Anotacao de colecao

const dev = {
    nome: 'Vinicius',
    idade: 29,

    descrever: function(){
        console.log(`Desenvolvedor: ${this.nome}\nIdade: ${this.idade}`);
    }
};

dev.descrever();