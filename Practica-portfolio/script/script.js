const tapToTop = document.querySelector(".container__arrow--up");

const menuBar = document.querySelector('.header__menu__bar')
const menu = document.querySelector('.header__menu')


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



menuBar.addEventListener('click', () => {
  if(menu.classList.contains("show")){
    menu.classList.remove('show')
    menuBar.classList.remove("deg90")
  } else{
    menu.classList.add("show")
    menuBar.classList.add("deg90")
  }
})

