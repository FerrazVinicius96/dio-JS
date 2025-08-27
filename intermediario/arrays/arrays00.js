const lista = [];

lista.push('Vinicius');
lista[2] = 'Yasmim';

lista.shift(); // Exclui o primeiro elemento da lista

lista.forEach((nome, indice) => {
    console.log(`${indice} ${nome}`);
});

// lista.pop(); //Exclui o último elemento da lista

