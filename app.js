//Área de un triangulo

//Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

let base = Number(prompt("Por favor ingresa el valor de la base del triángulo"));
let altura = Number(prompt("Por favor ingresa  el valor de la altura del triángulo"));
//alert("El área del triángulo es: " + base * altura / 2);


let area = (base * altura) / 2;
alert(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);

