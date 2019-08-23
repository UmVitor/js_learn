// Tudo que vem após barras normais duplas é um comentário em linguagem natural.
// Leia os comentários atentamente: eles explicam o código JavaScript.
// variável é um nome simbólico para um valor.
// As variáveis são declaradas com a palavra-chave var:
var x; // Declara uma variável chamada x.
// Valores podem ser atribuídos às variáveis com o sinal =
x = 0; // Agora a variável x tem o valor 0
x // => 0: Uma variável é avaliada com seu valor.
// JavaScript aceita vários tipos de valores
x = 1; // Números.
x = 0.01; // Apenas um tipo Number para inteiros e reais.
x = "hello world"; // Strings de texto entre aspas.
x = 'JavaScript'; // Apóstrofos também delimitam strings.
x = true; // Valores booleanos.
x = false; // O outro valor booleano.
x = null; // Null é um valor especial que significa "nenhum valor".
x = undefined; // Undefined é como null.

/* Dois outros tipos muito importantes que programas em JavaScript podem manipular são objetos e
arrays. Esses são os temas do Capítulo 6, Objetos, e do Capítulo 7, Arrays, mas são tão importantes
que você vai vê-los muitas vezes antes de chegar a esses capítulos. */

// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
var book = { // Objetos são colocados entre chaves.
topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
fat: true // A propriedade "fat" tem o valor true.
}; // A chave marca o fim do objeto.
// Acesse as propriedades de um objeto com . ou []:
book.topic // => "JavaScript"
book["fat"] // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.
// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0] // => 2: o primeiro elemento (índice 0) do array.
primes.lenght // => 4: quantidade de elementos no array.
primes[primes.lenght-1] // => 7: o último elemento do array.
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
var empty = []; // [] é um array vazio, sem qualquer elemento.
empty.lenght // => 0
// Os arrays e objetos podem conter outros arrays e objetos:
var points = [ // Um array com 2 elementos.
{x:0, y:0}, // Cada elemento é um objeto.
{x:1, y:1}
];
var data = { // Um objeto com 2 propriedades
trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.
trial2: [[2,3], [4,5]], // Os elementos dos arrays são arrays.
};

/* A sintaxe ilustrada anteriormente para listar elementos de array entre chaves ou para mapear nomes
de propriedade de objeto em valores de propriedade entre colchetes é conhecida como expressão ini-
cializadora e é apenas um dos assuntos do Capítulo 4, Expressões e operadores. Uma expressão é uma
frase em JavaScript que pode ser avaliada para produzir um valor. O uso de . e [] para se referir ao va-
lor de uma propriedade de objeto ou a um elemento de array é uma expressão, por exemplo. Talvez
você tenha notado no código anterior que, quando uma expressão aparece sozinha em uma linha, o
comentário que se segue começa com uma seta (=>) e o valor da expressão. Essa é uma convenção
que você vai ver por todo o livro.
Uma das maneiras mais comuns de formar expressões em JavaScript é usar operadores, como segue */


// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são os mais comuns:
//3 + 2 // => 5: adição
//3 – 2 // => 1: subtração
//3 * 2 // => 6: multiplicação
//3 / 2 // => 1.5: divisão
points[1].x - points[0].x // => 1: operandos mais complicados também funcionam
//"3" + "2" // => "32": + soma números, ou concatena strings
// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count // => 6: nomes de variáveis também são expressões.
// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2, y = 3; // Esses sinais = são atribuições e não testes
// de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso
// Os operadores lógicos combinam ou invertem valores booleanos
(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. &&
// é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) // => verdadeiro: ! inverte um valor booleano