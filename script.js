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
let numero = 1;
let texto = "Hola Mundo";
let verdadero = true;
let falso= false;
let indefinido;
let undef= undefined;
let nulo= null;

const checkboxes = document.querySelectorAll('.precio-checkbox');
        const sumaPrecios = document.getElementById('sumaPrecios');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', actualizarSuma);
        });

        function actualizarSuma() {
            let total = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    total += parseFloat(checkbox.getAttribute('data-precio'));
                }
            });
            sumaPrecios.textContent = 'S/.' + total.toFixed(2);
        }
        
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.addEventListener('change', actualizarTotal);
        });
        
        function actualizarTotal() {
          let total = 0;
        
          document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            total += parseFloat(checkbox.value);
          });
        
          document.getElementById('resultadototal').innerHTML = `Total: $${total.toFixed(2)}`;
        }        
