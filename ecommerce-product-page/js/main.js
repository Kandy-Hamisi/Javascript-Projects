const calc = document.querySelector(".calculations");
const cartBtn = document.querySelector(".cart-img");
const cartCard = document.querySelector(".modal-cart-container");
const quantityVal = document.querySelector("#quantity");
const addToCartBtn = document.querySelector(".add-cart-btn");
const checkoutBtn = document.querySelector(".checkout-btn a");
const emptyCart = document.querySelector(".content-empty");
const cartContent = document.querySelector(".content");
const countBadge = document.querySelector(".count-badge");
const delBtn = document.querySelector(".icon-delete img");

const lightbox = document.querySelector(".lightbox-section");
const imgThumbnails = document.querySelectorAll(".image-thumb img");


// cart calculation items
const itemPrice = 125;
const calculationCont = document.querySelector(".calculations");

console.log(itemPrice);

console.log(cartContent);

addToCartBtn.onclick = () => {
    
    // handling the display of the items to the cart
    
    if (quantityVal.value != 0) {
        emptyCart.style.display = "none";
        cartContent.style.display = "flex";
        checkoutBtn.style.display = "flex";
        countBadge.style.display = "block"

        // handle cartitem price calculation
        let totalPrice = itemPrice * quantityVal.value;

        countBadge.innerHTML = quantityVal.value;
        
        calculationCont.innerHTML = `
        <p class="multiplication">$${itemPrice}.00 x ${quantityVal.value}</p>
        <h5 class="total">$${totalPrice}.00</h5>
        `;
    } else {
        alert("Add Number of items!")
    }    
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


// if delete button is clicked on the cart item

delBtn.onclick = () => {
    // confirm("do you want to delete item");

    // set cart item quantity to zero
    quantityVal.value = 0;

    if (quantityVal.value == 0) {
        emptyCart.style.display = "flex";
        cartContent.style.display = "none";
        checkoutBtn.style.display = "none";
        countBadge.style.display = "none"
        cartCard.classList.remove("activo");
    }
}


// iterating through the image thumbnails
imgThumbnails.forEach(image => {
    image.onclick = () => {
        lightbox.classList.add("active");
        const img = document.createElement('img');

        while (lightbox.firstChild) {
            lightbox.removeChild()
        }
        img.src = image.src;
        lightbox.appendChild(img);
    }
});


// if any place of the lightbox is clicked remove the lightbox
 lightbox.onclick = (e) => {

    if( e.target !== e.currentTarget ) return
     lightbox.classList.remove("active");
 }