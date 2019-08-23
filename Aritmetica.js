var a = 1 + 2 //soma a === 3
var a = 2 - 1 //subtracao a === 1
var a = 1 * 2 //multiplicacao a === 2
var a = 5 / 2 //Divisao a === 2.5
var a = 5 % 2 //Resto da divisao inteira a === 2
var a = 5 ** 2 // potencia a === 25

//Além dos operadores aritmeticos basicos o JS aceita operacoes matematicas mais complexas por meio de um conjunto de funcoes e constantes definidas como propriedades do objeto Math:

Math.pow(2,53) // => 9007199254740992: 2 elevado à potência 53
Math.round(.6) // => 1.0: arredonda para o inteiro mais próximo
Math.ceil(.6) // => 1.0: arredonda para cima para um inteiro
Math.floor(.6) // => 0.0: arredonda para baixo para um inteiro
Math.abs(-5) // => 5: valor absoluto
Math.max(x,y,z) // Retorna o maior argumento
Math.min(x,y,z) // Retorna o menor argumento
Math.random() // Número pseudoaleatório x, onde 0 <= x < 1.0
Math.PI // π: circunferência de um círculo / diâmetro
Math.E // e: A base do logaritmo natural
Math.sqrt(3) // A raiz quadrada de 3
Math.pow(3, 1/3) // A raiz cúbica de 3
Math.sin(0) // Trigonometria: também Math.cos, Math.atan, etc.
Math.log(10) // Logaritmo natural de 10
Math.log(100)/Math.LN10 // Logaritmo de base 10 de 100
Math.log(512)/Math.LN2 // Logaritmo de base 2 de 512
Math.exp(3) // Math.E ao cubo

//A aritmetica em JS nao gera erros em casos de estouro, estouro negativo ou divisao por zero. Quando o resultado de uma operacao numerica eh maior do que o numero representavel (estouro), o resultado eh um valor infinito especial, que JS inidica como Infinity. Da mesma forma, quando um valor negativo se torna maior do que o maior numero negativo representavel, o resultado eh infinito negativo, indicado por -infinity. Os valores infinitos se comportam conforme o esperado: somah-los (and so on) por qualquer coisa resulta em um valor infinito (possivelmente com sinal invertido)
// Divisao por zero nao eh erro em JS: ela simplismente retorna infinito ou infinito negativo. Contudo, ha uma execucao: zero dividido por zero nao tem um valor bem definido e o resultado dessa operacao eh o valor especial not-a-number NaN. NaN tambem surge se voce tenta dividir infinito por infinito, extrai a raiz quadrada de um numero negativo, ou usa operadores aritmeticos com operandos nao numericos que nao podem ser convertidos em numeros


// No entanto as saidas podem gerar valores nao definidos
Infinity // Uma variável de leitura/gravação inicializada como
// Infinity.
Number.POSITIVE_INFINITY // O mesmo valor, somente para leitura.
1/0 // Este também é o mesmo valor.
Number.MAX_VALUE + 1 // Isso também é avaliado como Infinity.
Number.NEGATIVE_INFINITY // Essas expressões são infinito negativo.
-Infinity
-1/0
-Number.MAX_VALUE – 1
NaN // Uma variável de leitura/gravação inicializada como NaN.
Number.NaN // Uma propriedade somente para leitura contendo o mesmo
// valor.
0/0 // Avaliado como NaN.
Number.MIN_VALUE/2 // Estouro negativo: avaliado como 0
-Number.MIN_VALUE/2 // Zero negativo
-1/Infinity // Também 0 negativo
-0

//O valor zero negativo também é um pouco incomum. Ele é comparado como igual (mesmo usando-se o teste restrito de igualdade de JavaScript) ao zero positivo, isto é, os dois valores são quase indistinguíveis, exceto quando usados como divisores:

var zero = 0; // Zero normal
var negz = -0; // Zero negativo
zero === negz // => verdadeiro: zero e zero negativo são iguais
1/zero === 1/negz // => falso: infinito e -infinito não são iguais
