//!CART
const cartIcon = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.getElementById("close-cart");
//open cart
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});
//close cart
closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

//!CART workings

//todo--6: BUY NOW BUTTON
const buyButtonClicked = () => {
  alert("Your order is placed");
};

//todo--6: adding items to cart

const addProductToCart = (productImg, title, price) => {
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");

  //checking if the selected item already exists in the cart
  let cartItems = document.querySelector(".cart-content");
  let cartItemsNames = cartItems.querySelectorAll(".cart-product-title");

  cartItemsNames.forEach((prodTitle) => {
    if (title == prodTitle.innerText) {
      alert("You have already added the item to cart");
      return;
    }
  });

  //adding
  let cartBoxContent = `
              <img src="${productImg}" class="cart-img" />

              <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity" min="1" />
              </div>
              <!-- remove cart -->
              <i class="fa-regular fa-trash-can cart-remove"></i>
`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);

  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
};
const addCartClicked = (event) => {
  let button = event.target;
  let shopProduct = button.parentElement;

  let productImg = shopProduct.querySelector(".product-img").src;
  let title = shopProduct.querySelector(".product-title").innerText;
  let price = shopProduct.querySelector(".price").innerText;

  addProductToCart(productImg, title, price);
  updateTotal();
};

//todo--5: Updating the total price
const updateTotal = () => {
  let cartContent = document.querySelector(".cart-content");
  let cartBox = document.querySelectorAll(".cart-box");
  let total = 0;

  Array.from(cartBox).forEach((box) => {
    let priceElement = box.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerText.replace("$", ""));

    let quantityElement = box.querySelector(".cart-quantity");
    let quantity = quantityElement.value;

    total = total + price * quantity;
  });

  //if price contains decimal values limit it to 2 places
  total = Math.round(total * 100) / 100;
  document.querySelector(".total-price").innerText = `$${total}`;
};

//todo--3:remove cart items function
const removeCartItem = (item) => {
  let buttonClicked = item.target;
  // console.log(buttonClicked);
  buttonClicked.parentElement.remove();

  updateTotal();
};
//todo--4:quantity change function
//quantity change function
const quantityChanged = (event) => {
  updateTotal();
};

//todo--2: Making ready function
const ready = () => {
  //Adding items to cart
  let addCart = document.querySelectorAll(".add-cart");
  addCart.forEach((cartElement) => {
    let button = cartElement;
    // console.log(button);
    button.addEventListener("click", addCartClicked);
  });

  //Remove items from the cart
  let removeCartButtons = document.getElementsByClassName("cart-remove");

  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    //now removing the item that belong to that remove button
    button.addEventListener("click", removeCartItem);
  }

  //quantity change
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  //buy now
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
};

//todo--1:Checking if the dom is loaded
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

updateTotal();
