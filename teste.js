var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


 /*Hamburger*/
 function myFunction(x) {
  x.classList.toggle("change");
}











/*Curtain*/

  /* Open when someone clicks on the span element*/ 




  function myTeste() {
document.getElementById("myNav").style.height = "100%";
  } 



  /* Close when someone clicks on the "x" symbol inside the overlay */


 function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  