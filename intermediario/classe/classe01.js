// Constructor

class Dev {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever () {
        console.log(`Desenvolvedor: ${this.nome}\nIdade: ${this.idade}\nAno de Nascimento: ${this.anoDeNascimento}`);
    }
}

const dev00 = new Dev('Vinicius', 29);

dev00.descrever();

dev00.idade = 30;

dev00.descrever();

