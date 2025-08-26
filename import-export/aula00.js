export function hello(nome) {
  return `Olá, ${nome}`;
}

function main() {
  const nome = "Vinicius";

  console.log(hello(nome));
}

main();
