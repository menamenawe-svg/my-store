let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

function loadCart() {
  let data = localStorage.getItem("cart");
  cart = data ? JSON.parse(data) : [];

  let container = document.getElementById("cartItems");
  if (!container) return;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="item">
        <h3>${item.name}</h3>
        <p>${item.price} EGP</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

window.onload = loadCart;
