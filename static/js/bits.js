

$(document).ready(function(){
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
	    {
	        src: 'static/img/1_Recuerdos_Del_Pasado.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	        title: 'Recuerdos del pasado'  
	    },
	    {
	        src: 'static/img/2_Brisas_Marinas.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	        title: 'Brisas marinas' 
	    },
	    {
	        src: 'static/img/3_Sol_De_Medio_Dia.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	        title: 'Sol de medio dia' 
	    },
	    {
	        src: 'static/img/4_Otoño.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	       	title: 'Otoño' 
	    },
	    {
	        src: 'static/img/5_Sorpresas_De_La_Vida.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	       	title: 'Sorpresas de la vida' 
	    },
	    {
	        src: 'static/img/6_Alma_Vibrante.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	       	title: 'Alma vibante' 
	    },
	    {
	        src: 'static/img/7_Tiempos.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	       	title: 'Tiempos' 
	    },
	    {
	        src: 'static/img/8_Ambiente.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	       	title: 'Ambiente' 
	    },
	    {
	        src: 'static/img/9_Vision_Interior.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	        title: 'Vision interior' 
	    },
	    {
	        src: 'static/img/10_Naturaleza.jpg',
	        w: 600,
	        h: 400,
	        msrc: 'static/img/1_Recuerdos_Del_Pasado.jpg', 
	        title: 'Naturaleza' 
	    },
	    

	];

	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: 0 // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	//gallery.init();
});


