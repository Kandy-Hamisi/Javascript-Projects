const calc = document.querySelector(".calculations");
const cartBtn = document.querySelector(".cart-img");
const cartCard = document.querySelector(".modal-cart-container");
const quantityVal = document.querySelector("#quantity");

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
        console.log("functioning")
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



