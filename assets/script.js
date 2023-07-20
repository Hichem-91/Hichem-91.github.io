const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const flecheDroite = document.querySelector(".arrow_right")
const flecheGauche = document.querySelector(".arrow_left")
const dots = document.querySelectorAll(".dot");
const bannerSlide = document.getElementById("banner-img");
const bannerText = document.querySelector("p");

let slideActuel = 0;
updateActiveDot()

function updateActiveDot() {
	dots.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === slideActuel) {
			dot.classList.add("dot_selected");
		}
	});
}

flecheDroite.addEventListener("click", SlideSuivant)
function SlideSuivant() {
	slideActuel = (slideActuel + 1) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[slideActuel].image;
	bannerText.innerHTML = slides[slideActuel].tagLine;
	updateActiveDot();
}

flecheGauche.addEventListener("click", SlidePrecedent)
function SlidePrecedent() {
	slideActuel = (slideActuel - 1 + slides.length) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[slideActuel].image;
	bannerText.innerHTML = slides[slideActuel].tagLine;
	updateActiveDot();
}
/* test */