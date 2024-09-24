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

