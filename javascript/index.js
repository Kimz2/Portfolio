// window.onload = ()=> {
let myMenu = document.getElementById("js-myMenu");
let hamburger = document.getElementById("js-hamburger");

hamburger.addEventListener("click", function() {
  myMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
// };
