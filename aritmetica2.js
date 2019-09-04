else if
//A instrução if/else avalia uma expressão e executa um código ou outro, dependendo do resultado.
//Mas e quando é necessário executar um entre vários códigos? Um modo de fazer isso é com a instru-
//ção else if . else if não é realmente uma instrução JavaScript, mas apenas um idioma de programa-
//ção frequentemente utilizado que resulta da repetição de instruções if/else :
if (n == 1) {// Executa o bloco de código #1
}
else if (n == 2) {// Executa o bloco de código #2
}
	else if (n == 3) {// Executa o bloco de código #3
	}
	     else { // Se tudo falhar, executa o bloco #4
	     }
//Não há nada de especial nesse código. Trata-se apenas de uma série de instruções if , onde cada if su-
//cessivo faz parte da cláusula else da instrução anterior. Usar o idioma else if é preferível e mais legí-
//vel do que escrever essas instruções em sua forma totalmente aninhada e sintaticamente equivalente:
if (n == 1) { // Executa o bloco de código #1
}
else {
	if (n == 2) { // Executa o bloco de código #2
	}
	else {
		if (n == 3) { // Executa o bloco de código #3
		}
		else {// Se tudo falhar, executa o bloco #4
		}
	}
}
//Quando uma instrução switch é executada, ela calcula o valor da
//expressão e, então, procura um rótulo case cuja expressão seja avaliada com o mesmo valor (onde
//a semelhança é determinada pelo operador === ). Se encontra um, ela começa a executar o bloco de
//código da instrução rotulada por case . Se não encontra um case com um valor correspondente, ela
//procura uma instrução rotulada com default: . Se não houver um rótulo default: , a instrução switch
//pula o bloco de código completamente.
//switch é uma instrução confusa para explicar; seu funcionamento se torna muito mais claro com
//um exemplo. A instrução switch a seguir é equivalente às instruções if/else repetidas, mostradas na
//seção anterior:
switch(n) {
	case 1: // Começa aqui se n === 1
		// Executa o bloco de código #1.
		break;
		// Para aqui
	case 2: // Começa aqui se n === 2
		// Executa o bloco de código #2.
		break; // Para aqui
	case 3: // Começa aqui se n === 3
		// Executa o bloco de código #3.
		break; // Para aqui
	default:// Se tudo falhar...
		// Executa o bloco de código #4.
		break; // Para aqui
}
//Observe a palavra-chave break utilizada no final de cada case no código anterior. A instrução bre-
//ak , descrita posteriormente neste capítulo, faz o interpretador pular para o final (ou “escapar”) da
//instrução switch e continuar na instrução seguinte. As cláusulas case em uma instrução switch espe-
//cificam apenas o ponto de partida do código desejado; elas não especificam ponto final algum. Na
//ausência de instruções break , uma instrução switch começa a executar seu bloco de código no rótulo
//case correspondente ao valor de sua expressão e continua a executar as instruções até atingir o final
//do bloco. Em raras ocasiões, é útil escrever código como esse, que “passa” de um rótulo case para
//o seguinte, mas 99% das vezes deve-se tomar o cuidado de finalizar cada case com uma instrução
//break . (Entretanto, ao usar switch dentro de uma função, pode-se utilizar uma instrução return , em
//vez de uma instrução break . Ambas servem para finalizar a instrução switch e impedir que a execução
//passe para o próximo case .)
//Aqui está um exemplo mais realista da instrução switch ; ele converte um valor em uma string de um
//modo que depende do tipo do valor:
function convert(x) {
	switch(typeof x) {
		case 'number': // Converte o número para um inteiro hexadecimal
			return x.toString(16);
		case 'string': // Retorna a string colocada entre apóstrofos
			return '"' + x + '"';
		default: // Converte qualquer outro tipo da maneira usual
			return String(x);
	}
}

//
//Note que, nos dois exemplos anteriores, as palavras-chave case são seguidas por literais numéricas e
//strings literais, respectivamente. É assim que a instrução switch é mais frequentemente utilizada na
//prática, mas note que o padrão ECMAScript permite que cada case seja seguido por uma expressão
//arbitrária.
//A instrução switch avalia primeiro a expressão que vem após a palavra-chave switch e depois avalia
//as expressões case , na ordem em que aparecem, até encontrar um valor que coincida 1 . O case coin-
//cidente é determinado usando-se o operador de identidade === e não o operador de igualdade == , de
//modo que as expressões devem coincidir sem qualquer conversão de tipo.
//Como nem todas as expressões case são avaliadas sempre que a instrução switch é executada, você
//deve evitar o uso de expressões case que contenham efeitos colaterais, como chamadas de função
//ou atribuições. O caminho mais seguro é simplesmente limitar suas expressões case às expressões
//constantes.
//Co nforme explicado anteriormente, se nenhuma das expressões case corresponde à expressão
//switch , a instrução switch começa a executar seu corpo na instrução rotulada como default: .
//Se não há rótulo default: , a instrução switch pula seu corpo completamente. Note que, nos
//exemplos anteriores, o rótulo default: aparece no final do corpo de switch , após todos os rótulos
//case . Esse é um lugar lógico e comum para ele, mas pode aparecer em qualquer lugar dentro do
//corpo da instrução.
//
