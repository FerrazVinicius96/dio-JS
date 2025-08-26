// getter para permitir mudar a idade depois e sempre recalcular

class Dev {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    get anoDeNascimento() {
        return 2025 - this.idade;
    }

    descrever () {
        console.log(`Desenvolvedor: ${this.nome}\nIdade: ${this.idade}\nAno de Nascimento: ${this.anoDeNascimento}`);
    }
}

const dev00 = new Dev('Vinicius', 29);
dev00.descrever();

// Se mudar a idade depois, o ano recalcula
dev00.idade = 30;
dev00.descrever();