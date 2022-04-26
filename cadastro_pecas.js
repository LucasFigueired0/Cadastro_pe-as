var listaDepecas = [
  "Amortecedor",
  "Motor",
  "Filtro de ar",
  "Amortecedor",
  "Motor",
  "Filtro de ar",
  "Amortecedor",
  "",
  "Filtro de ar",
  "Amortecedor",
  "Motor",
  "Filtro de ar",
  "pc",
];

console.log(listaDepecas[12].length);
let peso = 50;

if (peso < 100) {
  console.log("A peça deve pesar no mínimo 100g");
} else {
  console.log("A peça possui peso adequado!");
}

if (listaDepecas.length > 10) {
  console.log("Limite de peças excedido!");
} else {
  console.log("Espaço disponível!");
}

for (let i = 0; i < listaDepecas.length; i++) {
  if (listaDepecas[i].length >= 3) {
    console.log(`${i + 1} - ${listaDepecas[i]}`);
  } else if (listaDepecas[i].length === 0) {
    console.log(`${i + 1} - ---Campo vazio---`);
  } else {
    console.log(`${i + 1} - ---Nome precisa ter no mínimo 3 caracteres---`);
  }
}
