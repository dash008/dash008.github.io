var eggs_quant_recip = 0;
var milk_quant_recip = 0; 
var sugar_quant_recip = 0; 
var min_aux =0;
var min = 0;
var eggs_rest ="";
var milk_rest ="";
var sugar_rest = "";

function calcular(){
	var eggs_quant = Number(document.getElementById("eggsfield").value);
	var milk_quant = Number(document.getElementById("milkfield").value);
	var sugar_quant = Number(document.getElementById("sugarfield").value);
	var molds_quant = Number(document.getElementById("moldsfield").value);

	eggs_quant_recip = Number(document.getElementById("eggsfield_recip").value);
	milk_quant_recip = Number(document.getElementById("milkfield_recip").value); 
	sugar_quant_recip = Number(document.getElementById("sugarfield_recip").value);

	if(!Number.isInteger(eggs_quant) || !Number.isInteger(milk_quant) || !Number.isInteger(sugar_quant)){
		document.getElementById("mensaje").innerHTML = "Mensaje: Los datos ingresados son incorrectos!" ;
		document.getElementById("total_flan").innerHTML = "Cantidad Total de flanes: 0";
		document.getElementById("eggs_rest").innerHTML = "Huevos restantes: "+eggs_quant;
		document.getElementById("milk_rest").innerHTML = "Leche restante: "+milk_quant;
		document.getElementById("sugar_rest").innerHTML = "Azucar restante: "+sugar_quant;
		document.getElementById("time").innerHTML = "Tiempo aproximado de preparacion: 0 minutos";	
	}
	else{
		
		if(eggs_quant< eggs_quant_recip || milk_quant <milk_quant_recip || sugar_quant <sugar_quant_recip){
			document.getElementById("mensaje").innerHTML = "Mensaje: Las cantidades son insuficientes para preparar!" ;
			document.getElementById("total_flan").innerHTML = "Cantidad Total de flanes: 0";
			document.getElementById("eggs_rest").innerHTML = "Huevos restantes: "+eggs_quant;
			document.getElementById("milk_rest").innerHTML = "Leche restante: "+milk_quant;
			document.getElementById("sugar_rest").innerHTML = "Azucar restante: "+sugar_quant;
			document.getElementById("time").innerHTML = "Tiempo aproximado de preparacion: 0 minutos";
		}
		else{
			var min_eggs = Math.floor(eggs_quant/eggs_quant_recip);
			var min_milk = Math.floor(milk_quant/milk_quant_recip);
			var min_sugar = Math.floor(sugar_quant/sugar_quant_recip);

			min_aux = Math.min(min_eggs, min_milk);
			min = Math.min(min_aux,min_sugar);
			
			eggs_rest = eggs_quant - (eggs_quant_recip * min);
			milk_rest = milk_quant - (milk_quant_recip * min);
			sugar_rest = sugar_quant - (sugar_quant_recip * min);

			if(min < 50){
				document.getElementById("mensaje").innerHTML ="<strong>Mensaje:</strong>  Van a ser los flanes mas ricos del planeta! <br>";
			}
			else{
				document.getElementById("mensaje").innerHTML ="<strong>Mensaje:</strong> Vas a alimentar a toda Asia con tus flanes! <br>";
			}

			
			document.getElementById("total_flan").innerHTML = "Cantidad Total de flanes: "+min;
			document.getElementById("eggs_rest").innerHTML = "Huevos restantes: "+eggs_rest;
			document.getElementById("milk_rest").innerHTML = "Leche restante: "+milk_rest;
			document.getElementById("sugar_rest").innerHTML = "Azucar restante: "+sugar_rest;
			if(molds_quant>0){
				var time =  min*60 / molds_quant ;
				document.getElementById("time").innerHTML = "Tiempo aproximado de preparacion: "+time +" minutos";
			}
			document.getElementById('caramel').innerHTML = "Cantidad de porciones de caramelo con azucar restante: Aún sin calcular";

		}
	}


}
function calcularCaramelo(){
	var caramel = Math.floor(sugar_rest/50); 
	document.getElementById('caramel').innerHTML = "Cantidad de porciones de caramelo con azucar restante: "+caramel +" porciones de caramelo";
}