

// Open the Modal
function openModal(n) {
	document.getElementById('myModal').style.display = "block";
  	if (document.readyState === "complete") { 
  		currentSlide(n);
  		var slideIndex = 1;
		showSlides(slideIndex); 
  	}
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
    
  slides[slideIndex-1].style.display = "block";
 
  
}

var frmvalidator  = new Validator("contactform");
	frmvalidator.addValidation("name","req","Por favor ingresa un nombre");
	frmvalidator.addValidation("email","req","Por favor ingresa un email");
	frmvalidator.addValidation("email","email","Por favor ingresa un email valido");





