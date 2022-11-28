const tapToTop = document.querySelector(".container__arrow--up");

const menuTaskItems = document.querySelector('.tasks--dropdown__task')

const menuTask = document.querySelector(".menu__tasks--dropdown");


// taptotop function
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    tapToTop.style.display = "block";
  } else {
    tapToTop.style.display = "none";
  }
}
// taptotop function




