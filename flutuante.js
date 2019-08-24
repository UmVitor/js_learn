//Os números em JavaScript têm muita precisão e podem se aproximar bastante de 0.1.
//Mas o fatode esse número não poder ser representado de forma exata pode causar problemas. Considere este código:

var x = .3 – .2; // trinta centavos menos 20 centavos
var y = .2 – .1; // vinte centavos menos 10 centavos
x == y // => falso: os dois valores não são os mesmos!
x == .1 // => falso: .3-.2 não é igual a .1
y == .1 // => verdadeiro: .2-.1 é igual a .1


