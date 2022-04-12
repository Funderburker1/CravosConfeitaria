

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



const menuTabs = document.querySelector(".links-shop");

menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        //mudar cor das tabs
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("tabColor", "active");
        e.target.classList.add("tabColor", "active");

        console.log(target)

        //mudar div
        const main = document.querySelector(".shop-container");
        main.querySelector(".tab-content.active").classList.remove("active");
        main.querySelector(target).classList.add("active");

        console.log(main)
    }
});


cookies.map((item, index) => {
    // console.log(item)
    let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
    console.log(shopItem)
    document.querySelector('.shop-container-cookie').append(shopItem)

    // preencher os dados de cada pizza
    shopItem.querySelector('.shop-item--img img').src = item.img
    shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    shopItem.querySelector('.shop-item--name').innerHTML = item.name
    shopItem.querySelector('.shop-item--desc').innerHTML = item.description

})

brigadeiros.map((item, index) => {
    // console.log(item)
    let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
    console.log(shopItem)
    document.querySelector('.shop-container-brigadeiro').append(shopItem)

    // preencher os dados de cada pizza
    shopItem.querySelector('.shop-item--img img').src = item.img
    shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    shopItem.querySelector('.shop-item--name').innerHTML = item.name
    shopItem.querySelector('.shop-item--desc').innerHTML = item.description

})

brownies.map((item, index) => {
    // console.log(item)
    let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
    console.log(shopItem)
    document.querySelector('.shop-container-brownie').append(shopItem)

    // preencher os dados de cada pizza
    shopItem.querySelector('.shop-item--img img').src = item.img
    shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    shopItem.querySelector('.shop-item--name').innerHTML = item.name
    shopItem.querySelector('.shop-item--desc').innerHTML = item.description

})

combos.map((item, index) => {
    // console.log(item)
    let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
    console.log(shopItem)
    document.querySelector('.shop-container-combos').append(shopItem)

    // preencher os dados de cada pizza
    shopItem.querySelector('.shop-item--img img').src = item.img
    shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    shopItem.querySelector('.shop-item--name').innerHTML = item.name
    shopItem.querySelector('.shop-item--desc').innerHTML = item.description

});

boloDePote.map((item, index) => {
    // console.log(item)
    let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
    console.log(shopItem)
    document.querySelector('.shop-container-boloDePote').append(shopItem)

    // preencher os dados de cada pizza
    shopItem.querySelector('.shop-item--img img').src = item.img
    shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    shopItem.querySelector('.shop-item--name').innerHTML = item.name
    shopItem.querySelector('.shop-item--desc').innerHTML = item.description

});

// dataComemorativa.map((item, index) => {
    
//     let shopItem = document.querySelector('.shop-content .shop-item').cloneNode(true);
//     console.log(shopItem)
//     document.querySelector('.shop-container-dataComemorativa').append(shopItem)

    
//     shopItem.querySelector('.shop-item--img img').src = item.img
//     shopItem.querySelector('.shop-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
//     shopItem.querySelector('.shop-item--name').innerHTML = item.name
//     shopItem.querySelector('.shop-item--desc').innerHTML = item.description

// });




