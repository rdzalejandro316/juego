

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var p = document.getElementById('puntos');
var precion = document.getElementById('precionT');
var tie1 = document.getElementById('tiem');
var tim = 0;



var x = 10,
	y = 10,
	wid = 10,
	hei = 10;

 	var whit = "white";
 	var jugador = "black";
 	var enemigo = "red";
	var x1 = 0;
	var y1 = 0;

	var v1 = valorAleatorio(1,10)*20;
	var v2 = valorAleatorio(1,10)*10;

	var puntaje = 0;

function drawRect(x,y,wid,hei,col) {//funcion para crear un cuadrado
    	ctx.fillStyle = col;
    	ctx.fillRect(x, y, wid, hei);
}

drawRect(x,y,wid,hei,jugador);



window.onkeydown = function(event) {

		var tecla = event.keyCode;

    	if(tecla === 39 /* && x < 290*/){//derecha
    		x = x+10;
    		y1 = y
    		x1 = x-10;
	    }
    	else if(tecla === 37 /*&& x > 0*/){//izquierda
        	x = x-10;
        	y1 = y
        	x1 = x+10;
    	}
    	else if(tecla === 38 /*&& y > 0*/) {//arriba
        	y = y-10;
        	x1 = x
        	y1 = y+10;
    	}
    	else if(tecla === 40 /*&& y < 140*/){//abajo
        	y = y+10;
        	x1 = x
        	y1 = y-10;

	    }
	pared();




    drawRect(x,y,wid,hei,jugador);//dibuja el nuevo cuadrado con las cordenadas que le estamos dando

    drawRect(x1,y1,wid,hei,whit);//dibuja un nuevo cuadro blanco que cumple con la funcion de hacer que borra la estela que deja el cuadro primero

	dectectar();
	div(v1,v2);


};


function valorAleatorio(x,y){
    return (x + Math.floor(Math.random() * y) );
};



function div(v1,v2){//aleatorios
	drawRect(v1,v2,wid,hei,enemigo);
}

function dectectar(){

	if (x == v1 && y == v2) {

		puntaje += 1;
		p.innerHTML = puntaje;

		v1 = valorAleatorio(1,9)*30;
		v2 = valorAleatorio(1,7)*20;
	}
}


function tiempo(){
	if (puntaje > 0 && puntaje <10) {
		alert ("perdiste  tu puntaje fue de: "+puntaje);
		alert ("continuar");
		window.location = "juego.html";
	}

	if (puntaje >= 10) {
		alert ("felicitaciones ganaste tu puntaje fue "+puntaje);
		alert ("continuar");
		window.location = "juego.html";
	}
}
function pared(){
	if (precion.style.display == "none") {
		if (x > 290	|| x < 0 || y < 0 || y > 140) {
			alert("tocaste la pared perdiste");
			window.location = "juego.html";
		}
	}
}

function aumentoTiempo(){
	tim = tim +1;
	tie1.innerHTML = tim;
}

/*window.onkeyup = function() {

	if (precion.style.display == "none") {
		alert("aaaaaa")
	}
}
*/



function una(event){
		var t = event.keyCode;

		if (t == 16) {
			precion.style.display = "none";
			setInterval(aumentoTiempo, 1000);
			setTimeout(tiempo,20000);
		}
}
