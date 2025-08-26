// Faça um programa que dado um número, imprima a sua tabuada

function tabuada(numero){
    const listaMultiplos = [];
    for(let x = 0; x <= 10; x++){
        listaMultiplos.push(numero * x);
    }
    console.log(listaMultiplos);
}

function main(){

    tabuada(7);

}

main();