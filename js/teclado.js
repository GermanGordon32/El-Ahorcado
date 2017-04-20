var teclado = {
	teclas: new Array(),
	iniciar: function() {
		document.onkeydown = teclado.guardarTecla;
	},
	guardarTecla: function(e) {
		teclado.teclas.push(e.key);
		var fKey = e.key;
		var key = fKey.toUpperCase();
		console.log(key);
		if (key == "A" || key == "B" || key == "C" || key == "D" || key == "E" || key == "F" || key == "G" || key == "H" || key == "I" || key == "J" || key == "K" || key == "L" || key == "M" || key == "N" || key == "Ñ" || key == "O" || key == "P" || key == "Q" || key == "R" || key == "S" || key == "T" || key == "U" || key == "V" || key == "W" || key == "X" || key == "Y" || key == "Z") {
			miLetra(key);
		};
	},
	teclaPulsada: function(codigoTecla) {
		return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
	},
	reiniciar: function() {
		teclado.teclas = new Array();
	}
};