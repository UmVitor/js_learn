Os objetos JavaScript são valores compostos: eles são um conjunto de propriedades ou valores no-
meados. Ao usarmos a notação . fazemos referência ao valor de uma propriedade. Quando o valor
de uma propriedade é uma função, a chamamos de método. Para chamar o método m de um objeto
o , escrevemos o.m() .
Também vimos que as strings têm propriedades e métodos:
var s = "hello world!"; // Uma string
var word = s.substring(s.indexOf(" ")+1, s.length); // Usa propriedades da string
/* Contudo, as strings não são objetos. Então, por que elas têm propriedades? Quando você tenta se
referir a uma propriedade de uma string s , JavaScript converte o valor da string em um objeto como
se estivesse chamando new String(s) . Esse objeto herda (consulte a Seção 6.2.2) métodos da string e
é utilizado para solucionar a referência da propriedade. Uma vez solucionada a propriedade, o objeto
recentemente criado é descartado. (As implementações não são obrigadas a criar e descartar esse
objeto transitório – contudo, devem se comportar como se fossem.)
Números e valores booleanos têm métodos pelo mesmo motivo que as strings: um objeto tempo-
rário é criado com a construtora Number() ou Boolean() e o método é solucionado por meio desse
objeto temporário. Não existem objetos empacotadores (wrapper) para os valores null e undefined :
qualquer tentativa de acessar uma propriedade de um desses valores causa um TypeError .
Considere o código a seguir e pense no que acontece quando ele é executado: */
var s = "test"; // Começa com um valor de string.
s.len = 4; // Configura uma propriedade nele.
var t = s.len; // Agora consulta a propriedade.
/* Quando esse código é executado, o valor de t é undefined . A segunda linha de código cria um objeto
String temporário, configura sua propriedade len como 4 e, em seguida, descarta esse objeto. A ter-
ceira linha cria um novo objeto String a partir do valor da string original (não modificado) e, então,
tenta ler a propriedade len . Essa propriedade não existe e a expressão é avaliada como undefined . Esse
código demonstra que strings, números e valores booleanos se comportam como objetos quando se
tenta ler o valor de uma propriedade (ou método) deles. Mas se você tenta definir o valor de uma
propriedade, essa tentativa é ignorada silenciosamente: a alteração é feita em um objeto temporário
e não persiste.
Os objetos temporários criados ao se acessar uma propriedade de uma string, número ou valor bo-
oleano são conhecidos como objetos empacotadores (wrapper) e ocasionalmente pode ser necessário
diferenciar um valor de string de um objeto String ou um número ou valor booleano de um objeto
Number ou Boolean. Normalmente, contudo, os objetos wrapper podem ser considerados como
Capítulo 3 Tipos, valores e variáveis 43
JavaScript básica
um detalhe de implementação e não é necessário pensar neles. Basta saber que string, número e valo-
res booleanos diferem de objetos pois suas propriedades são somente para leitura e que não é possível
definir novas propriedades neles.
Note que é possível (mas quase nunca necessário ou útil) criar objetos wrapper explicitamente, cha-
mando as construtoras String() , Number() ou Boolean() : */
var s = "test", n = 1, b = true; // Uma string, um número e um valor booleano.
var S = new String(s); // Um objeto String
var N = new Number(n); // Um objeto Number
var B = new Boolean(b); // Um objeto Boolean
/* JavaScript converte objetos wrapper no valor primitivo empacotado, quando necessário; portanto,
os objetos S , N e B anteriores normalmente (mas nem sempre) se comportam exatamente como os
valores s , n e b . O operador de igualdade == trata um valor e seu objeto wrapper como iguais, mas é
possível diferenciá-los com o operador de igualdade restrito === . O operador typeof também mostra
a diferença entre um valor primitivo e seu objeto wrapper. */