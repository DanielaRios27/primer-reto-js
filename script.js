function calcularPrecio(precioBase, descuento) {
  if (precioBase <= 0 || descuento < 0 || descuento > 100) {
    return "Los valores ingresados son inválidos";
  } else if (descuento == 0) {
    return precioBase;
  } else {
    let precioFinal = precioBase - precioBase * (descuento / 100);
    return "El precio final con descuento es $" + precioFinal;
  }
}

//Probando el primer condicional "Los valores ingresados son inválidos"
console.log(calcularPrecio(-100000, 20));
//Retornando el precioBase si el descuento es igual a cero
console.log(calcularPrecio(10000, 0));
//Calculando el precio final con descuento
console.log(calcularPrecio(100000, 50));
