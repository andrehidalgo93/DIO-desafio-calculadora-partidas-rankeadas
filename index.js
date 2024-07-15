function calcularSaldoPartidas(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "";

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { nivel, saldo };
}

let resultado = calcularSaldoPartidas(80, 60);

console.log(
  `O Herói tem saldo de **${resultado.saldo}** e está no nível **${resultado.nivel}**`
);
