function maiorNumero(lista) {
  let maiorNumero = lista[0];

  for (let x = 0; x < lista.length; x++) {
    if (lista[x] > maiorNumero) {
      maiorNumero = lista[x];
    }
  }
  return maiorNumero;
}

module.exports = { maiorNumero };
