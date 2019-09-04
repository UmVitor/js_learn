//O objeto global é um objeto normal de JS que tem um objetivo muito importante: as propriedades desse objeto são simbolos definidos
//globalmente que estão disponiveis.
//No código de nivel superior - código em JS que não faz parte de uma função, pose-se usar a palavra chave "this" para se referir ao objeto global
var global = this // define uma variavel global para se referir ao objeto global
//Em JS do lado do cliente, o objeto Window serve como objeto global para todo o código JS contido na janela do navegador que ele representa 
//Esse objeto global Window tem uma propriedade de autoreferência window pdode ser usada no lugar de this para se referir ao objeto global.
//O objeto window define as propriedades básicas, mas também define muito outros globais que são especificos para navegadores WEB e para JS
//do lado do cliente.
//Ao ser criado, o objeto global define todos os valores predefinidos em JS. Mas esse objeto especial também contem globais definidos pelo
//programa. Se seu código declara uma variável global, essa variável é uma propriedade do objeto global.
