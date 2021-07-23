// navbtn

const menuBtn = document.querySelector(".menu");
const navBar = document.querySelector("nav");
const mainContainer = document.querySelector("main");
menuBtn.addEventListener("click", () => {
  mainContainer.style.backgroundColor = "rgba(0,0,0,0.2)";
  navBar.classList.remove("active");
});

// navbtnclose

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  navBar.classList.add("active");
  mainContainer.style.backgroundColor = "transparent";
});

// carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slide");


  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  function screenFunction(x) {
    if (x.matches) { // If media query matches
      slides[slideIndex - 1].style.display = "flex";


    } else {
      slides[slideIndex - 1].style.display = "block";

    }
  }

  var x = window.matchMedia("(min-width: 1024px)")
  screenFunction(x)
  x.addListener(screenFunction) // Attach listener function on state changesonsole


}
