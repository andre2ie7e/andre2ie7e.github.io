let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoList = document.getElementById('carrito');
  carritoList.innerHTML = '';

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    carritoList.appendChild(li);
  });

  document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}