// Funcoes que recebem objetos

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    get anoDeNascimento() {
        return 2025 - this.idade;
    }

    descrever () {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nAno de Nascimento: ${this.anoDeNascimento}`);
    }
};

function cadastrarPessoa(nome, idade) {
    const pessoa = new Pessoa(nome, idade);
    pessoa.nome = nome;
    pessoa.idade = idade;

    console.log(`Nova pessoa cadastrada: ${pessoa.nome}`);
    return pessoa;
};

function main() {
    const listaDePessoas = [];
    
    const pessoa01 = cadastrarPessoa('Yasmim', 30);
    const pessoa02 = cadastrarPessoa('Vinicius', 29);

    listaDePessoas.push(pessoa01);
    listaDePessoas.push(pessoa02);

    console.log(listaDePessoas);

    listaDePessoas.forEach(p => p.descrever());
}

main();

