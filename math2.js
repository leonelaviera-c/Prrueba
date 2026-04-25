function calcularPropina(totalCuenta, porcentaje) {
  return totalCuenta / porcentaje;
}

function totalConPropina(totalCuenta, porcentaje) {
  return totalCuenta + calcularPropina(totalCuenta, porcentaje);
}
console.log(totalConPropina(1000, 20));
