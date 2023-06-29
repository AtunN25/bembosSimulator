var PrecioFinal = 0.0;
var texto_precio = "";
var texto_pedido = "";

texto_pedido = localStorage.getItem("pedido");
texto_precio = localStorage.getItem("precio");
PrecioFinal = localStorage.getItem("precio_final");

var inputPrecioFinal = document.getElementById("Precio-pago");
var inputDineroIngresado = document.getElementById("dinero-ingresado");
var inputDineroDevuelto = document.getElementById("dinero-devuelto");

var botonGenerarVuelto = document.getElementById("generar-vuelto");

var textareaDescripcion_pago1 = document.querySelector('textarea[name="description-pago1"]');
var textareaDescripcion_pago2 = document.querySelector('textarea[name="description-pago2"]');
textareaDescripcion_pago1.value = texto_pedido;
textareaDescripcion_pago2.value = texto_precio;
inputPrecioFinal.value = PrecioFinal;

botonGenerarVuelto.addEventListener("click", () => {
  var Vuelto_aux = inputDineroIngresado.value - inputPrecioFinal.value;
  inputDineroDevuelto.value = Vuelto_aux.toFixed(2);
});
