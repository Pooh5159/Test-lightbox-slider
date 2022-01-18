var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(id,n) {
  let test = document.getElementById(id);
  test.childNodes[1].style.opacity = "0.5";
  showSlides(slideIndex += n);
  console.log(test, test.childNodes);
}

function currentSlide(id,n) {
  document.getElementById(id);
  showSlides(slideIndex = n);
}

function showSlides(n) {  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}