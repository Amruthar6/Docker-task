const cart = [];
const cartLink = document.getElementById("cart-link");
const cartSection = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

const products = [
    { id: 1, name: "Product 1", price: 10.00 },
    { id: 2, name: "Product 2", price: 15.00 },
    { id: 3, name: "Product 3", price: 20.00 }
];

addToCartButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const productId = this.closest(".product").getAttribute("data-id");
        const product = products.find(p => p.id == productId);
        addToCart(product);
    });
});

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = cart.length;
    cartLink.textContent = `Cart (${cartCount})`;

    if (cartCount === 0) {
        cartSection.style.display = "none";
    } else {
        cartSection.style.display = "block";
    }

    renderCartItems();
}

function renderCartItems() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

checkoutButton.addEventListener("click", function() {
    alert("Thank you for your purchase!");
    cart.length = 0;
    updateCart();
});
