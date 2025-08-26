// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.


function imprimaPar(lista) {
    for(let x = 0; x <= lista.length; x++){
        if(lista[x] % 2 == 0){
            console.log(lista[x]);
        }
        else {
            continue;
        }
    }
}

function main() {
    const lista = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

    imprimaPar(lista);
}

main();