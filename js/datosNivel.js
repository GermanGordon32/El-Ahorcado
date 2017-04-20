function arbol (f) {
	this.f = f;
	var arbolito = document.getElementById("arbol");
	if (f == 1) {
		arbolito.style.background = "url('../src/Juego/arbol/1.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 2){
		arbolito.style.background = "url('../src/Juego/arbol/2.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 3){
		arbolito.style.background = "url('../src/Juego/arbol/3.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 4){
		arbolito.style.background = "url('../src/Juego/arbol/4.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 5){
		arbolito.style.background = "url('../src/Juego/arbol/5.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 6){
		arbolito.style.background = "url('../src/Juego/arbol/6.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 7){
		arbolito.style.background = "url('../src/Juego/arbol/7.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 8){
		arbolito.style.background = "url('../src/Juego/arbol/8.png')";
		arbolito.style.backgroundSize = "200px 300px";
	}else if(f == 9){
		arbolito.style.background = "url('../src/Juego/arbol/9.png')";
		arbolito.style.backgroundSize = "200px 300px";
	};
}
var izq = 100;
function intentosCont(f, letra){
	this.f = f;
	this.letra = letra;
	var intentos = document.getElementById("intentos");
	intentos.innerHTML = "Intentos: " + f + "/9";

	console.log(letra);
	var letraE = document.createElement("div");
	letraE.setAttribute("id","E" + izq);
	letraE.style.backgroundColor = "blue";
	letraE.style.top = 350+"px";
	letraE.style.left = izq +"px";
	letraE.style.position = "fixed";
	letraE.innerHTML = letra;
	document.body.appendChild(letraE);

	izq = izq + 15;
}
var puntuacion= localStorage.getItem("puntuacion");
if (puntuacion>=1) {
    console.log("Puntuacion: " + puntuacion);
}else{
	var puntuacion = 0;
    console.log("Puntuacion: " + puntuacion);
}
function puntua(p){
	if (p == true) {
		puntuacion = parseInt(puntuacion) +10;
	};
	if (p == false) {
		puntuacion = parseInt(puntuacion) -10;
	};
	console.log(puntuacion);
	var puntuacionPantalla = document.getElementById("puntuacion");
	puntuacionPantalla.innerHTML = "Puntuacion: " + puntuacion;
}
function nive (nivel) {
	var nivelPantalla = document.getElementById("nivel");
	nivelPantalla.innerHTML = "Nivel: " + nivel;
}

function guardarDatos (nivel, puntuacion) {
	// guardar datos
	nivel = parseInt(nivel) + 1;
	console.log(nivel);
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("puntuacion", puntuacion);
}
function reiniciarDatos (nivel, puntuacion) {
	var puntuacion = 0;
	localStorage.setItem("nivel", 1);
    localStorage.setItem("puntuacion", 0);
}
