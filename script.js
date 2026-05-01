let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✔");
}

function showCart() {
  let container = document.getElementById("cartItems");
  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {
    container.innerHTML += `
      <div class="item">
        <p>${item.name}</p>
        <p>${item.price} EGP</p>
      </div>
    `;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: " + total + " EGP";
}