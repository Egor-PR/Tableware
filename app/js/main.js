const btn = document.querySelectorAll('.btn')
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        this.innerHTML = (this.innerHTML === 'ДОБАВЛЕНО') ? this.innerHTML = 'ДОБАВИТЬ В КОРЗИНУ' : this.innerHTML = 'ДОБАВЛЕНО';
    })
}

const data = [
    {
        id: 1,
        name: 'Коптильня 10л',
        price: 1200
    },
    {
        id: 2,
        name: 'Коптильня 20л',
        price: 1400
    },
    {
        id: 3,
        name: 'Коптильня 30л',
        price: 1600
    },
]
let sum = 0; 

const products = document.querySelectorAll('.content__block-product'); 
const buttons = document.querySelectorAll('.content__block-button');
const sumSelector = document.querySelector('.hero__sum'); 
sumSelector.textContent = sum; 

products.forEach((product, index) => {
    const productTitle = product.querySelector('.content__block-title'); 
    productTitle.textContent = data[index].name; 
    const productPrice = product.querySelector('.content__block-price'); 
    productPrice.textContent = data[index].price; 
    const formattedPrice = numberWithSpaces(data[index].price);
    console.log(formattedPrice)
    productPrice.textContent = `${formattedPrice} РУБ.`; 
});

buttons.forEach((button, index) => {
    button.addEventListener('click', e => {
        button.classList.add('.button_disabled');
        sum += data[index].price; 
        sumSelector.textContent = sum; 
    });
});
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); 
  }