const small = document.querySelector('.carousel');
M.Carousel.init(small, {});


/*galeria jquery*/
$(document).ready(function () {
    $('.gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
        // other options
    });
});


/*galeria 2 */
let time = 3000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start);

/*---------------------------------------------------------------------------------------*/

const menuTabs = document.querySelector(".menu-tabs");

menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        //mudar cor das tabs
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        //mudar div
        const main = document.querySelector(".perfil");
        main.querySelector(".tab-content.active").classList.remove("active");
        main.querySelector(target).classList.add("active");
    }
});


/*---------------------------------change perfil---------------------------------*/
let btnOpArtistz = document.querySelector('.tab-OpArtistz');
let btnOpInfluencerz = document.querySelector('.tab-OpInfluencerz');
let btnOpModelz = document.querySelector('.tab-OpModelz');

let OpArtistz = document.querySelector('.OpArtistz_container');

let OpInfluencerz = document.querySelector('.OpInfluencerz_container');

let OpModelz = document.querySelector('.OpModelz_container');

let galleryGrafic = document.querySelector('.gallery_graphic_container');

btnOpArtistz.addEventListener("click", function (e) {
    e = OpArtistz.style.display = 'block';
    e = OpInfluencerz.style.display = 'none';
    e = OpModelz.style.display = 'none';
    e = galleryGrafic.style.display = 'none';
})

btnOpInfluencerz.addEventListener("click", function (e) {
    e = OpArtistz.style.display = 'none';
    e = OpInfluencerz.style.display = 'block';
    e = OpModelz.style.display = 'none';
    e = galleryGrafic.style.display = 'block';
})

btnOpModelz.addEventListener("click", function (e) {
    e = OpArtistz.style.display = 'none';
    e = OpModelz.style.display = 'block';
    e = OpInfluencerz.style.display = 'none';
    e = galleryGrafic.style.display = 'none';
})









