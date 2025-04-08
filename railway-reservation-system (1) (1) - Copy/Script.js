const images = [
    "background1.jpg",
    "background2.jpg",
   
];

let index = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
    index = (index + 1) % images.length;
    slideshow.src = images[index];
}, 3000);
