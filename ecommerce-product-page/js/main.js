const calc = document.querySelector(".calculations");
const cartBtn = document.querySelector(".cart-img");
const cartCard = document.querySelector(".modal-cart-container");
const quantityVal = document.querySelector("#quantity");
const addToCartBtn = document.querySelector(".add-cart-btn");
const checkoutBtn = document.querySelector(".checkout-btn a");
const emptyCart = document.querySelector(".content-empty");
const cartContent = document.querySelector(".content");

console.log(quantityVal);

console.log(cartContent);

addToCartBtn.onclick = () => {
    
    emptyCart.style.display = "none";
    cartContent.style.display = "flex";
    checkoutBtn.style.display = "flex";


}

// console.log(quantityVal);

let showCartCard = false;

cartBtn.onclick = () => {
    if(!showCartCard) {
        cartCard.classList.add("activo");
        showCartCard = true;
        console.log("showing");
    } else {
        cartCard.classList.remove("activo");
        showCartCard = false;
        console.log("hidden");
    }
}



// incrementing the product quantity

const incrementValue = () => {
    
    let value = parseInt(quantityVal.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value ++;
        quantityVal.value = value;
        quantityVal.innerHTML = value;
    }
}

// decrementing the product quantity

const decrementValue = () => {
    let value = parseInt(quantityVal.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value --;
        quantityVal.value = value;
    }
}



