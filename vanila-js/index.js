// catch  html Id / DOM elements 
const price = document.getElementById("price")
const totalPrice = document.getElementById("totalPrice")
const addButton = document.getElementById("addButton")
const productItem = document.getElementById("productItem")
const vat = document.getElementById("vat")
const totalPriceWithVat = document.getElementById("totalPriceWithVat")

// data 
const productPrice = 10000;
let totalProduct = 0;
let totalAmount = 0;


// set product price , total price & total item 
price.innerText = `Price: ${productPrice} TK`;
totalPrice.innerText = `Item Price: TK 00 `;
productItem.innerText = ` ${totalProduct} pieces`;
vat.innerText = `vat: 00 TK`
totalPriceWithVat.innerText = `: 00 TK`

addButton.addEventListener("click", () => {

    // count product item 
    totalProduct++
    productItem.innerText = `Item: ${totalProduct} pieces`

    // update total product price 
    totalAmount += productPrice
    totalPrice.innerText = `SubTotal Wiout Vat: ${totalAmount} TK`

    // vat calculate 
    const vatAmount = (totalAmount * 5) / 100;
    console.log(vat)
    vat.innerText = `vat 5% : ${vatAmount} TK`

    // total Price With Vat
    totalPriceWithVat.innerText = `Net Total: ${totalAmount + vatAmount} TK`
});
