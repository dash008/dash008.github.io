
//Definicion de variables a usar
var players = [];
var dados = new Array(5);
var flag = true;
var contador = 0;
var juego_terminado = false;
var count_disable = 0;
var count_aux = 0;
var cant_players=0;
var round = 1;
var sum = 0;
var text = "";

//Funcion play no recibe argumentos y no tiene retornos, inicia el juego.
function play(){
	//Se captura la cantidad de jugarores que hay en el campo de texto
	cant_players = parseInt(document.getElementById('players_field').value);
	//Se verifica que la cantidad de jugadores sea un numero mayor a 2
	if(isNaN(cant_players) || cant_players< 2){
		document.getElementById('mensajes').innerHTML = "Mensajes: La cantidad de jugadores es erronea!";
	}
	else{
		//Si cumple con las condiciones lanza los dados para el jugador
		lanzarDados();	
		document.getElementById('mensajes').innerHTML = "Mensajes: el jugador numero "+ (contador +1) +" inicia su turno";
		//Si ya esta es la primera vez que se inicia la partida llena un arreglo que contiene los puntajes segun la cantidad de jugadores
		if(flag){
			
			document.getElementById('players_field').disable = true;
			for (var i = 0; i < cant_players; i++) {
				players[i]=0;
			}
			max = players[0];		
			flag = false;    
		}	
	}
	update();
}
      
//lanza los dados por primera vez por ronda 
function lanzarDados(){
	//Se deshabilitan y habilitan los botones indicados 
	document.getElementById("play_button").disabled = true;
	document.getElementById("lanzar_button").disabled = false;	
	document.getElementById("players_field").disabled = true;
	//Se inicializan variables 
	count_aux = 0;
	sum = 0;		
	for (var i = 0; i < 5; i++) {
		dados[i] = parseInt(Math.random()*5)+1;
		//Si el dado es distinto de 5 o 2 coloca la imagen correspondiente y suma los puntos 
		if(dados[i]!= 5 &&  dados[i]!= 2){
			document.getElementById('dado_view'+i).src="static/img/"+dados[i]+".png";
			sum = sum + dados[i];
		}
		//Si no cambia el 2 o el 5 por su imagen correspondiente, ademas se le asigna el numero 7 que representa que esta "bloqueado"
		else{
			switch (dados[i]){
				case 5:
					document.getElementById('dado_view'+i).src="static/img/dis-5.png";
					dados[i]=7;
					//Aumenta en uno la cantidad de dados deshabilitados que hay
					count_disable++;
					//Aumenta en uno la cantidad de dados deshabilitados que hay para comprobar que no habian desde antes dados bloqueados
					count_aux++;										
					break;
				case 2:
					document.getElementById('dado_view'+i).src="static/img/dis-2.png";
					dados[i]=7;
					count_disable++;
					count_aux++;							
					break;
			}
		}
	}
	//Si no hay dados bloqueados suma los puntos acumulados al puntaje del jugador
	if(count_aux==0){
		players[contador] = players[contador] + sum;
	}
	update();
}
function lanzarnuevamente(){
		count_aux = 0;
		sum = 0;
		//Si el numero de dados bloqueados es distinto de 5
		if(count_disable !=5){		
			for (var i = 0; i < 5; i++) {
				//Ademas si el dado en el que estoy actualmente es diferente de 7 es decir, no esta bloqueado
				if(dados[i] != 7){
					//Asignarle un valor aleatorio entre 1 y 6 al dado
					dados[i] = parseInt(Math.random()*5)+1;
					//Si ese valor es distinto de 5 o 2 guardar el puntaje
					if(dados[i]!= 5 &&  dados[i]!= 2){
						document.getElementById('dado_view'+i).src="static/img/"+dados[i]+".png";
						sum = sum + dados[i];
						
					}
					//Si es igual a 5 o a 2 repite el proceso de cambiar las imagenes aumentar de valor los contadores
					else{
						switch (dados[i]){
							case 5:
								document.getElementById('dado_view'+i).src="static/img/dis-5.png";
								dados[i]=7;
								count_disable++;
								count_aux++;										
								break;
							case 2:
								document.getElementById('dado_view'+i).src="static/img/dis-2.png";
								dados[i]=7;
								count_disable++;
								count_aux++;							
								break;
						}
					}			
				}
				
			}
			//Si el contador de dados deshabilitados es igual a 0, adiciona los puntos a el puntaje del jugador
			if (count_aux ==  0) {
				players[contador] = players[contador] + sum;
			}
		}
		//Si despues de realizar el for todos los dados estan bloqueados,comienza el turno del siguiente jugador y se reinicia la cuenta de dados deshabilitados
		if(count_disable ==5){			
			document.getElementById('mensajes').innerHTML = "Mensajes: el jugador numero "+ (contador +1) +" inicia su turno";
			document.getElementById("play_button").disabled = false;
			document.getElementById("lanzar_button").disabled = true;
			count_disable =0;
			contador++;
		}
		//Si termina el turno del jugador y ademas de eso el numero de jugadores es igual a el contador del jugador actual, quiere decir que se termina la ronda
		if(cant_players == contador){
			//Llama a la funcion verificar que calcula si se alcanzaron los puntos requeridos  y regresa true si se alcanzaron y false si no
			if(verificar()){
				//Se busca al jugador que gano la partida y se coloca el mensaje
				var nro_jugador = parseInt(players.indexOf(max))+1;
				document.getElementById('mensajes').innerHTML = "Mensajes: La partida ha finalizado. El jugador numero "+ nro_jugador+" ganó!";
				document.getElementById("play_button").disabled = true;
				document.getElementById("lanzar_button").disabled = true;
			}else{
				//Si aun no se alcanzaron los puntos inicia una nueva ronda reinciando los contadores
				contador = 0;
				count_disable =0;
				round++;
				document.getElementById('mensajes').innerHTML = "Mensajes: La ronda numero "+round+" ha iniciado.";
				document.getElementById("play_button").disabled = false;
				document.getElementById("lanzar_button").disabled = true;
			}			
		}
		update();
}
//Verificar no recibe argumentos pero retorna verdadero si alguno de los jugadores alcanzo los 100 puntos ademas de eso guarda el puntaje maximo de la partida
function verificar(){
	for (var i = 0; i < cant_players; i++) {
		if(players[i] >= 100){
			if( max < players[i]){
				max = players[i];
			}
			juego_terminado = true;	
			return true;
				
		}
	}
}
//La funcion iniciar de nuevo reinicia los mensajes, la variable flag y las imagenes.
function iniciarDeNuevo(){
	flag = true;
	contador=0;
	count_disable = 0;
	count_aux = 0;
 	cant_players=0;

	for (var i = 0; i < 5; i++) {
		document.getElementById('dado_view'+i).src ="static/img/dados.png";	
	}
	document.getElementById("play_button").disabled = false;
	document.getElementById("lanzar_button").disabled = true;
	document.getElementById("players_field").disabled = false;	
	document.getElementById("players_field").value = "";
	document.getElementById("mensajes").innerHTML= "Mensajes:";
	document.getElementById("players_section").innerHTML="";
}

function update(){
	text ="";
	for (var i = 0; i < players.length; i++) {
		text = text +"<p><span style='font-weight: bold;'>Jugador "+(i+1)+":</span> "+players[i]+" puntos</p> <br>";
	}
	document.getElementById("players_section").innerHTML=text;
}
