

let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".banner-img img")
max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


cookies.map((item, index) => {
    // console.log(item)
    let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
    console.log(shopItem)
    document.querySelector('.shop-container').append(shopItem)

    // preencher os dados de cada pizza
    shopItem.querySelector('.shop-item--img img').src = item.img
    shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    shopItem.querySelector('.shop-item--name').innerHTML = item.name
    shopItem.querySelector('.shop-item--desc').innerHTML = item.description

})
