//As instruções condicionais executam ou pulam outras instruções, dependendo do valor de uma
//expressão especificada. Essas instruções são os pontos de decisão de seu código e às vezes também
//são conhecidas como “ramificações”. Se você imaginar um interpretador JavaScript seguindo um
//caminho através de seu código, as instruções condicionais são os lugares onde o código se ramifica
//em dois ou mais caminhos e o interpretador deve escolher qual caminho seguir.
//As subseções a seguir explicam a condicional básica de JavaScript, a instrução if/else e também
//abordam switch , uma instrução de ramificação em múltiplos caminhos, mais complicada.
//A instrução if é a instrução de controle fundamental que permite à linguagem JavaScript tomar
//decisões ou, mais precisamente, executar instruções condicionalmente. Essa instrução tem duas for-
//mas. A primeira é:
if (expressão)
	instrução
//Nessa forma, a expressão é avaliada. Se o valor resultante é verdadeiro, a instrução é executada.
//Se a expressão é falsa, a instrução não é executada. (Consulte a Seção 3.3 para ver uma definição
//de valores verdadeiros e falsos.) Por exemplo:
if (username == null) // Se username é null ou undefined,
	username = "John Doe"; // o define
//Ou, de modo similar:
// Se username é null, undefined, false, 0, "" ou NaN, fornece a ele um novo valor
if (!username) 
	username = "John Doe";
//Note que os parênteses em torno da expressão são uma parte obrigatória da sintaxe da instrução if .
//A sintaxe de JavaScript exige uma instrução após a palavra-chave if e a expressão entre parênteses,
//mas pode-se usar um bloco de instruções para combinar várias instruções em uma só. Portanto, a
//instrução if também poderia ser como segue:
if (!address) {
	address = "";
	message = "Please specify a mailing address.";
}
///A segunda forma da instrução if introduz uma cláusula else , que é executada quando a expressão éfalse . Sua sintaxe é:
if (expressão)
	instrução1
else
	instrução2
//Essa forma da instrução executa a instrução1 se a expressão é verdadeira e executa a instrução2
//se a expressão é falsa. Por exemplo:
if (n == 1)
	console.log("You have 1 new message.");
else
	console.log("You have " + n + " new messages.");
//Quando instruções if com cláusulas else forem aninhadas, é necessário um certo cuidado para
//garantir que a cláusula else combine com a instrução if apropriada. Considere as linhas a seguir:
i = j = 1;
k = 2;
if (i == j)
	if (j == k)
		console.log("i equals k");
	else
		console.log("i doesn't equal j"); // ERRADO!!

//Nesse exemplo, a instrução if interna forma a instrução única permitida pela sintaxe da instrução if
//externa. Infelizmente, não está claro (a não ser pela dica dada pelo recuo) com qual if a cláusula else
//está relacionada. E, nesse exemplo, o recuo está errado, pois um interpretador JavaScript interpreta
//o exemplo anterior como:
if (i == j) {
	if (j == k)
		console.log("i equals k");
	else
		console.log("i doesn't equal j"); // OPA!
}
//A regra em JavaScript (assim como na maioria das linguagens de programação) é que, por padrão,
//uma cláusula else faz parte da instrução if mais próxima. Para tornar esse exemplo menos ambíguo
//e mais fácil de ler, entender, manter e depurar, deve-se usar chaves:
if (i == j) {
	if (j == k) {
		console.log("i equals k");
	}
}
else { // Que diferença faz a posição de uma chave!
	console.log("i doesn't equal j");
}
//Embora não seja o estilo utilizado neste livro, muitos programadores se habituam a colocar os cor-
//pos de instruções if e else (assim como outras instruções compostas, como laços while ) dentro de
//chaves, mesmo quando o corpo consiste em apenas uma instrução. Fazer isso sistematicamente pode
//evitar o tipo de problema que acabamos de ver
