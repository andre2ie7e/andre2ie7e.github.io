let numero = 1;
let texto = "Hola Mundo";
let verdadero = true;
let falso= false;
let indefinido;
let undef= undefined;
let nulo= null;

let precios = [429.99, 229.99, 59.00]; // Precios de los productos
        let suma = precios.reduce((total, precio) => total + precio, 0);
        document.getElementById("sumaPrecios").textContent = 'S/.' + suma.toFixed(2);


