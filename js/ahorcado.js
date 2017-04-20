var nivel= localStorage.getItem("nivel");
if (nivel>=2) { 
    if (nivel>=11) {
    	nivel = 1;
    	puntacion = 0;
    	reniciarDatos();
    };
    console.log("Nivel: " + nivel);
    var nive = document.getElementById("nivel");
	nive.innerHTML = "Nivel: " + nivel;
}else{
	var nivel = 1;
    console.log("Nivel: " + nivel);
    reiniciarDatos();
}
	puntuacion = localStorage.getItem("puntuacion");
	var puntuas = document.getElementById("puntuacion");
	puntuas.innerHTML = "Puntuacion: " + puntuacion;
//ARRAYS
if (nivel == 1) {
	var palabras = ["ESCUELA", "LAPIZ", "PLUMA", "BORRADOR", "LIBRO"];
}else{
	if (nivel == 2) {
	var palabras = ["CABAÑA", "ACORDEON", "ANGEL", "COLOR", "CACHORRO"];
	}else{
		if (nivel == 3) {
			var palabras = ["CABEZA", "CABALLO", "BIOGRAFO", "PERRO", "DEDOS"];
		}else{
			if (nivel == 4) {
				var palabras = ["ACEITUNA", "PUBLICAR", "ARENA", "SILLA", "DECORAR"];
			}else{
				if (nivel == 5) {
					var palabras = ["BLINDAJE", "SOÑAR", "HIELO", "PUBERTAD", "LIBRO"];
				}else{
					if (nivel == 6) {
						var palabras = ["ESCUELA", "LAPIZ", "PLUMA", "BORRADOR", "LIBRO"];
					}else{
						if (nivel == 7) {
							var palabras = ["CABAÑA", "ACORDEON", "ANGEL", "COLOR", "CACHORRO"];
						}else{
							if (nivel == 8) {
								var palabras = ["CABEZA", "CABALLO", "BIOGRAFO", "PERRO", "DEDOS"];
							}else{
								if (nivel == 9) {
									var palabras = ["ACEITUNA", "PUBLICAR", "ARENA", "SILLA", "DECORAR"];
								}else{
									if (nivel == 10) {
										var palabras = ["BLINDAJE", "SOÑAR", "HIELO", "PUBERTAD", "LIBRO"];
									}
								}
							}
						}
					}
				}
			}
		}
	}
}


//PALABRA ALEATOREA
var palabraJuego=Math.round(Math.random()*4) 
if (palabraJuego==0) palabraJuego=palabras[0] 
else if (palabraJuego==1) palabraJuego=palabras[1] 
else if (palabraJuego==2) palabraJuego=palabras[2] 
else if (palabraJuego==3) palabraJuego=palabras[3] 
else palabraJuego=palabras[4]  

//CALCULAR LONGITUD DE LA PALABRA
var longitud = palabraJuego.length;

console.log("Palabra: " + palabraJuego + " | Longitud: " + longitud);

//SEPARAR CADA LETRA EN UN ARRAY
var letraXLetra = palabraJuego.split("");

//IMPRIMIR CADA LETRA UNA POR UNA
var aum = 0;
var izq = 300;
for (i = longitud; i>=1 ;i=i-1) {
		console.log(letraXLetra[aum]);

		//IMPRIME EN EL HTML, CADA LETRA EN UN DIV DIFERENTE
		var midiv = document.createElement("div");
		midiv.setAttribute("id","L" + aum);
		midiv.style.backgroundColor = "red";
		midiv.style.top = 130+"px";
		midiv.style.left = izq+"px";
		midiv.style.position = "fixed";

		//OCULTAMOS LAS LETRAS PARA LUEGO MOSTRARLAS
		midiv.style.display = 'none';

		midiv.innerHTML = letraXLetra[aum];
		document.body.appendChild(midiv);
	izq = izq + 50;
	aum = aum + 1;
}
//OBTIENE LA LETRA QUE ELEGIO EL JUGADOR Y LA COMPARA CON LAS LETRAS DE LA PALABRA EN JUEGO.
var fallos = 0;

var easter = false;
var sonidoSecreto = new Audio('../src/Toasty.mp3');

function miLetra(key) {
	var aum = 0;
	var acierto = false;
	for (i = longitud; i>=1 ;i=i-1) {
		if (key == letraXLetra[aum]) {
			var divActual = document.getElementById("L" + aum);
			divActual.style.display = 'inline';
			acierto = true;
			puntua(acierto);
		};
	aum = aum + 1;
	};	
	if (acierto == false) {
		fallos = fallos + 1;
		console.log("Fallos: " + fallos);
		arbol(fallos);
		puntua(acierto);
		intentosCont(fallos, key);
		if (fallos == 9) {
			perdiste();
		};
	};
	

	terminaste();
	//Easter Egg de PoPo
	if (easter == true) {
		if (key == "L") {
			easterPoPo();
			easter = false;
		}else{
			easter = false;
		};
	};
	if (key == "A") {
		easter = true;
	};

}
function easterPoPo () {
	sonidoSecreto.play();
	var divPo = document.getElementById("easterPop");
	divPo.style.display = 'inline';
	window.setTimeout( function(){divPo.style.display = 'none'}, 800)
}

//AQUI ESCRIBIREMOS UNA FUNCION QUE COMPROBARA SI TODAS LAS LETRAS HAN SIDO ACERTADAS
//SI ES ASI TERMINARA EL JUEGO
function terminaste() {
	var aum = 0;	
	var L0 = document.getElementById('L0');
	var L1 = document.getElementById('L1');
	var L2 = document.getElementById('L2');
	var L3 = document.getElementById('L3');
	var L4 = document.getElementById('L4');
	var L5 = document.getElementById('L5');
	var L6 = document.getElementById('L6');
	var L7 = document.getElementById('L7');

	for (i = longitud; i>=1 ;i=i-1) {

		if (longitud == 5) {
			if (L0.style.display == 'inline' && L1.style.display == 'inline' && L2.style.display == 'inline' && L3.style.display == 'inline' && L4.style.display == 'inline') {
				ganaste();
			};
		}else if(longitud == 6){
			if (L0.style.display == 'inline' && L1.style.display == 'inline' && L2.style.display == 'inline' && L3.style.display == 'inline' && L4.style.display == 'inline' && L5.style.display == 'inline') {
				ganaste();
			};
		}else if(longitud == 7){
			if (L0.style.display == 'inline' && L1.style.display == 'inline' && L2.style.display == 'inline' && L3.style.display == 'inline' && L4.style.display == 'inline' && L5.style.display == 'inline' && L6.style.display == 'inline') {
				ganaste();
			};
		}else if (longitud == 8){
			if (L0.style.display == 'inline' && L1.style.display == 'inline' && L2.style.display == 'inline' && L3.style.display == 'inline' && L4.style.display == 'inline' && L5.style.display == 'inline' && L6.style.display == 'inline' && L7.style.display == 'inline') {
				ganaste();
			};
		};

		aum = aum + 1;
	}
}

//AQUI ESTA ESCRITO LA FUNCION QUE TERMINARA EL JUEGO

function perdiste() {
	guardarDatos(nivel, puntuacion);
	console.log("perdiste");

	var pagina="findeljuego.html" 

	window.setTimeout( function(){location.href=pagina}, 800)
	
}
function ganaste() {
	guardarDatos(nivel, puntuacion);
	if (nivel == 10){
		var fin="findeljuego.html" 
		location.href=fin
		i=0;
	}else{
		console.log("Ganaste");

		var pagina="ganaste.html" 
		location.href=pagina
		i=0;
	}
	
	
	
}

