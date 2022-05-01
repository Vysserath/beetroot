const main = document.querySelector('.main');
const images = document.querySelector('#images-container');


fetch('https://dummyjson.com/products/2').then((response) => {
    return response.json();
}).then((data) => {
    let template = `
    <div class="container">
        <div class="img-holder">
            <img src="${data.thumbnail}" alt="" class="img img_main">
        </div>
        <div class="text-block">
            <h1 class="text-block__title">${data.title}</h1>
            <ul class="text-block__list">
                <li class="text-block__list-item">Brand: <a href="#">${data.brand}</a></li>
                <li class="text-block__list-item">Price: ${data.price}$</li>
                <li class="text-block__list-item">Rating: ${data.rating}</li>
                <li class="text-block__list-item">Categoty: <a href="#">${data.category}</a></li>
                <li class="text-block__list-item">Description: ${data.description}</li>
            </ul>
            <div class="link-holder">
                <a href="#" class="text-block__link">Buy</a>
            </div>
        </div>
    </div>`

    main.insertAdjacentHTML('afterbegin', template);

    data.images.map((i) => {
        let templateImg = `
        <div class="img-holder img-holder_little">
            <img src="${i}" alt="" class="img">
        </div>`

        images.insertAdjacentHTML('beforeend', templateImg);
    })

})