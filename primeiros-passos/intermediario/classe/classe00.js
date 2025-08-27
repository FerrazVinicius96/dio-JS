// Classes e Instâncias

class Dev {
    nome;
    idade;

    descrever () {
        console.log(`Desenvolvedor: ${this.nome}\nIdade: ${this.idade}`);
    }
}

const dev00 = new Dev();

dev00.nome = 'Vinicius';
dev00.idade = 29;

dev00.descrever();