// catch  html Id / DOM elements 

const price = document.getElementById("price")
const totalPrice = document.getElementById("totalPrice")
const addButton = document.getElementById("addButton")
const productItem = document.getElementById("productItem")

const productPrice = 25000;
let totalProduct = 0;
let totalAmount = 0;

price.innerText = `৳ ${productPrice}`;
totalPrice.innerText = `Total: ৳ 00 `;
productItem.innerText = `${totalProduct} pieces`;


addButton.addEventListener("click", () => {

    // count product item 
    totalProduct++
    productItem.innerText = `${totalProduct} pieces`

    totalAmount += productPrice
    totalPrice.innerText = `৳ ${totalAmount}`


})
