let cart=[]
function addToCart(productId) {
     alert(`Product ${productId} added to cart!`);
     cart.push(productId);
     console.log(cart);
}

function viewCart() {
     if (cart.length===0) {
          alert("Your cart is empty");
     } else {
          alert(`Your cart contains products: ${cart.join(", ")}`);
     }
}
function updateCartBadge() { 
     let badge = document.getElementById("cart-badge"); 
     badge.textContent = cart.length; 
     badge.style.display = cart.length > 0 ? "inline-block" : "none";
}
function addToCart(productId) {
     const existingItem = cart.find(item => item.id === productId); 
     if (existingItem) { existingItem.quantity++; } else { const product = products.find(p => p.id === productId); 
     cart.push({ ...product, quantity: 1 });
     } updateCart(); 
}
function showCart() { 
     const cartModal = document.getElementById('cart-modal'); 
     const cartItems = document.getElementById('cart-items'); 
     const cartTotal = document.getElementById('cart-total'); 
     cartItems.innerHTML = ''; 
     let total = 0; 
     cart.forEach((item, index) => { total += item.price * item.quantity; 
     const li = document.createElement('li'); 
     li.innerHTML = ` ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} <button onclick="changeQuantity(${index}, 1)">+</button> <button onclick="changeQuantity(${index}, -1)">-</button> `; 
     cartItems.appendChild(li); 
});
function addToCart(productId) { 
     const existingItem = cart.find(item => item.id === productId); 
     if (existingItem) { existingItem.quantity++; 
     } else { const product = products.find(p => p.id === productId); 
     cart.push({ ...product, quantity: 1 }); 
     }updateCart(); 
}
function showCart() { 
     const cartModal = document.getElementById('cart-modal'); 
     const cartItems = document.getElementById('cart-items'); 
     const cartTotal = document.getElementById('cart-total'); 
     cartItems.innerHTML = ''; 
     let total = 0; 
     cart.forEach((item, index) => { total += item.price * item.quantity; 
     const li = document.createElement('li'); 
     li.innerHTML = ` ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} <button onclick="changeQuantity(${index}, 1)">+</button> <button onclick="changeQuantity(${index}, -1)">-</button> `; 
     cartItems.appendChild(li); 
});
cartTotal.textContent = total.toFixed(2); 
cartModal.classList.add('visible'); 
} function changeQuantity(index, change) { cart[index].quantity += change; 
if (cart[index].quantity <= 0) cart.splice(index, 1); 
updateCart(); 
showCart();
}