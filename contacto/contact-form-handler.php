<?php

		$sendto  = 'davidserna08@gmail.com';
		$subject = "Formulario de contacto";
	
		$corps="Nombre: ".$_REQUEST['name']."\n".
		"Email: ".$_REQUEST['email']."\n".
		"Comentarios: ".$_REQUEST['message']."\n"."\n";
	
		$From = "From: ".$_REQUEST['name']." <".$_REQUEST['email'].">\n";
		$From .= "Reply-To: ".$_REQUEST['name']." <".$_REQUEST['email'].">\n";

		@mail($sendto,$subject,$corps,$From);

		header("Location: contacto_form.html");

?>