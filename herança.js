//Suponha que você consulte a propriedade x do objeto o . Se o não tem uma propriedade própria com
//esse nome, a propriedade x é consultada no objeto protótipo de o . Se o objeto protótipo não tem
//uma propriedade própria com esse nome, mas ele próprio tem um protótipo, a consulta é feita no
//protótipo do protótipo. Isso continua até que a propriedade x seja encontrada ou até que seja pes-
//quisado um objeto com um protótipo null . Como você pode ver, o atributo protótipo de um objeto
//cria um encadeamento ou lista encadeada das propriedades herdadas.

var o = {} // o herda métodos de objeto de Object.prototype
o.x = 1; // e tem uma propriedade própria x.
var p = inherit(o); // p herda propriedades de o e Object.prototype
p.y = 2; // e tem uma propriedade própria y.
var q = inherit(p); // q herda propriedades de p, o e Object.prototype
q.z = 3; // e tem uma propriedade própria z.
var s = q.toString(); // toString é herdado de Object.prototype
q.x + q.y // => 3: x e y são herdados de o e p

//Agora, suponha que você atribua um valor à propriedade x do objeto o . Se o já tem uma proprieda-
//de própria (não herdada) chamada x , então a atribuição simplesmente altera o valor dessa proprie-
//dade já existente. Caso contrário, a atribuição cria uma nova propriedade chamada x no objeto o . Se
//o herdou a propriedade x anteriormente, essa propriedade herdada é agora oculta pela propriedade
//própria recém-criada de mesmo nome.
//A atribuição de propriedades examina o encadeamento de protótipos para determinar se a atribuição
//é permitida. Se o herda uma propriedade somente de leitura chamada x , por exemplo, então a atri-
//buição não é permitida.Contudo, se a atribuição é permitida, ela sempre cria ou configura uma propriedade
//no objeto original e nunca modifica o encadeamento de protótipos. O fato de a herança ocorre ao se
//consultar propriedades, mas não ao configurá-las, é um recurso importante de JavaScript, pois isso
//nos permite anular propriedades herdadas seletivamente:

