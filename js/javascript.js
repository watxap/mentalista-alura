var numeroSecreto = parseInt(Math.random() * 1000);
var intentos = 0
var intentosMax = prompt(`Te doy la bienvenida al MENTALISTA, un juego donde deberás adivinar un número secreto entre el 1 al 1000.
Vamos a definir la dificultad: por favor, ingresá el número de intentos para adivinar el número misterioso:`)



while (numeroDigitado != numeroSecreto) {
  var numeroDigitado = prompt(`Ingrese un número entre 1 y 1000. Te quedan ${intentosMax-intentos} intentos extra.`);
  //es igual a volver a declarar la variable sumándole 1:
  intentos += 1;
  if ((intentosMax-intentos)==-1) {
    alert ('Lo siento, superaste el número de intentos máximo. Vuelve a intentarlo.')
    break;
  }
  //si el numeroDigitado es igual al número secreto:
  if (numeroDigitado == null) {
    alert("Has cancelado el juego. ¡Hasta luego!");
    break;
  } else if (numeroDigitado == numeroSecreto) {
    alert('¡Acertaste!');
  } else if (numeroDigitado > numeroSecreto) {
    alert('Te equivocaste... el número secreto es menor');
  } else if (numeroDigitado < numeroSecreto) {
    alert('Te equivocaste... el número secreto es mayor');
  }
} 