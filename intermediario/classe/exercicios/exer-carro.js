/*

    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dado a quantidade de quilometros e o preco de combustivel nos de o valor
    gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    valorPercurso(kilometrosRodados, preco) {
        const litrosGastos = kilometrosRodados / this.gastoMedioPorKm;
        const valor = litrosGastos * preco;

        return `Valor gasto de combustível: R$ ${valor.toFixed(2)}`;
    }
}

function main() {
    const tracker = new Carro('Chevrolet', 'Preto', 10);
    console.log(tracker.valorPercurso(400, 6.47));
}

main();