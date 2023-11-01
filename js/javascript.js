var numeroSecreto = parseInt(Math.random() * 1000);
var intentosN = 0

while (numeroDigitado != numeroSecreto) {
  var numeroDigitado = prompt(`Ingrese un número entre 1 y 1000. El número de intentos actual es de ${intentosN}.`);
  var intentosN = intentosN+1
  //si el numeroDigitado es igual al número secreto
  if (numeroDigitado == numeroSecreto) {
    alert('¡Acertaste!');
  } else if (numeroDigitado > numeroSecreto) {
    alert('Te equivocaste... el número secreto es menor');
  } else if (numeroDigitado < numeroSecreto) {
    alert('Te equivocaste... el número secreto es mayor');
  }
}