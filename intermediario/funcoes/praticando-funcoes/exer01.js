function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    }
    else {
        console.log('Menor de idade');
    }
}

function main() {
    let idade = 29;

    verificarIdade(idade);
}

main();