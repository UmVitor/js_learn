try{
	//Normalmente esse codigo eh executado do inicio ao fim do bloco
	//Sem problemas. Mas às vezes pode disparar uma exceção
	//diretamente, com uma instrução throw, ou indiretamente, pela
	//chamada de um metodo que lança uma exceção. 
}
catch{
	//As instruções desse bloco são executadas se, e somente se, o bloco
	//try dispara uma exceção. Essas instruções podem usar variavel local
	//e se referir ao objeto Error ou a outro valor que foi lançado.
	//Este bloco pode tratar da exceção de algum modo, pode ignorá-la
	//não fazendo nada ou pode lançar a exceção novamente com throw 
}
finally{
	//Este bloco contém instruções que são sempre executadas, independente
	//do que aconteça no bloco try. Elas são executadas se o bloco try terminar:
	//	1) normamente, apos chegar ao final do bloco
	//	2) por causa de uma instrução break, continue ou return 
	//	3) com uma exceção que é tratada por uma cláusula catch anterior
	//	4) com uma exceção não capturada que ainda está se propagando
}
