///// Header function /////

window.onscroll = function() {scrollFunction()};

const scrolling = document.getElementById("header");
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrolling.classList.remove("headerBlack");
    scrolling.classList.add("headerWhite");
  } else {
    scrolling.classList.add("headerBlack");
    scrolling.classList.remove("headerWhite");
    
  }
}