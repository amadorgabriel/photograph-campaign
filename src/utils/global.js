// SLIDE
$(".slide").hiSlide();

// SHAKE MOUSE
var popup = document.querySelectorAll(".popup");
function shakePopup(e) {
  popup[e].setAttribute("class", "popup animation-popup"),
    setTimeout(function () {
      popup[e].removeAttribute("class", "animation-popup"),
        popup[e].setAttribute("class", "popup");
    }, 500);
}

// APPEAR ANIMATION
const elementsScrool = document.querySelectorAll("[data-anime]"),
  animateClass = "animate",
  debounce = function (e, t, n) {
    let o;
    return function (...i) {
      const a = this,
        l = n && !o;
      clearTimeout(o),
        (o = setTimeout(function () {
          (o = null), n || e.apply(a, i);
        }, t)),
        l && e.apply(a, i);
    };
  };

function animeScroll() {
  const e = window.pageYOffset + (3 * window.innerHeight) / 4;
  elementsScrool.forEach(function (t) {
    e > t.offsetTop && t.classList.add(animateClass);
  });
}

window.addEventListener(
  "scroll",
  debounce(function () {
    animeScroll();
  }, 100)
);

// IMAGE DISPLAY SELECTED
var sectionImage = document.querySelector("#galery-image"),
  imageSelected = document.querySelector("#galery-image img");

function fechaImagem() {
  sectionImage.setAttribute("class", "none");
}

function abrirImagem(e, t) {
  imageSelected.setAttribute("src", "./assets/images/gallery/" + e + "." + t),
    sectionImage.removeAttribute("class", "none"),
    sectionImage.setAttribute("id", "galery-image");
}
