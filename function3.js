function saludo(hora) {
  if (hora >= 6 && hora <= 11) {
    return "Buenos días";
  } else if (hora >= 12 && hora <= 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

console.log(saludo(8));
console.log(saludo(14));
console.log(saludo(22));
