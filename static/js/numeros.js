
	var mensaje = "";
	var numeros = [];
	var max = 0;
	var suma = 0;
	var divmascercano=0;
	var clickcounter = 0;
	function ingresarNumero(id){

		var num = parseInt(document.getElementById("field").value);
		if(isNaN(num)|| num==""){
			mensaje = "Mensajes: El dato ingresado es invalido";
		}
		else{
			numeros.push(num);
			mensaje = "Mensajes: Numero ingresado correctamente! Numero de datos ingresados "+ numeros.length;
			clickcounter++;
			verificar();
		}
		document.getElementById('field').value = "";
		document.getElementById(id).innerHTML = mensaje;
		
	}
	function calcularSuma(){
		for (var i = 0; i < numeros.length; i++) {		

			suma = parseInt(numeros[i]) + suma;

		}
		document.getElementById("sumatoria").innerHTML = "Sumatoria del arreglo: "+suma;
	}

	function calcularMayor(){
		max = numeros[0];
		for (var i = 0; i < numeros.length; i++) {
			if(max< numeros[i]){
				max = numeros[i];			
			}
		}
		document.getElementById('maximo').innerHTML = "Maximo valor:"+max;
	}

	function divisorSuma(){

		if(suma%max == 0){
			
			document.getElementById('divisor').innerHTML = "Divisor: "+max;

		}
		else{
			
			for (var i = max; i >= 1; i--) {
				if(suma%i==0){
					divmascercano = i;					
					document.getElementById('divisor').innerHTML = "Divisor: "+divmascercano;
					break;
				}
				
			}
		}
	}

	function mostrarMultiplos(){
		var multip = []
		if(divmascercano == 0){
			divmascercano = max;
		}
		for (var i = suma; i >= divmascercano; i=i-divmascercano) {
			multip.push(i);
		}		
		document.getElementById('multiplos').innerHTML ="Multiplos:"+multip;
	}

	function clearAll(){
		document.getElementById("sumatoria").innerHTML = "Sumatoria del arreglo: ";
		document.getElementById('multiplos').innerHTML ="Multiplos:";
		document.getElementById('divisor').innerHTML = "Divisor: ";
		document.getElementById('maximo').innerHTML = "Maximo valor:";
		document.getElementById('mensajes').innerHTML = "Mensaje:";
		document.getElementById('field').value = "";
		multip=[];
		numeros=[];
		suma = 0;
		divmascercano =0;
	}

	function verificar(){
		if(clickcounter==5){
			for (var i = 1; i <= 5; i++) {
				document.getElementById('button'+i).disabled = false;
			}
		}
	}