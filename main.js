const productos = [
    { nombre: "Lente recetado", precio: 50000 },
    { nombre: "Lente de sol", precio: 15000 },
    { nombre: "Lentes de contacto", precio: 20000 },
    { nombre: "Lentes polarizados", precio: 25000 },
    { nombre: "Reparacion de anteojo", precio: 300 },
    { nombre: "Sujetador", precio: 3500 },
    { nombre: "Patilla de anteojo", precio: 4000 },
    { nombre: "Limpia cristales", precio: 4050 },
    { nombre: "Estuche de antojos de sol", precio: 2500 },
    { nombre: "Estuche de anteojo de receta", precio: 3550 }
];
let carrito = [];

function mostrarMenu() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i = i + 1) {
        mensaje += (i + 1) + ". " + productos[i].nombre + "\n";
    }
    mensaje += "11. Finalizar compra";
    return mensaje;
}

function agregarProducto(indice) {
    carrito.push(productos[indice]);
    alert("Has agregado " + productos[indice].nombre + " al carrito.");
}

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

function procesarSeleccion() {
    let comprando = true;
    while (comprando) {
        let opcion = parseInt(prompt(mostrarMenu()));
        if (opcion >= 1 && opcion <= 10) {
            agregarProducto(opcion - 1);
        } else if (opcion === 11) {
            comprando = false;
        } else {
            alert("Opción inválida. Intente nuevamente.");
        }
    }

    let total = calcularTotal();
    if (carrito.length > 0) {
        alert("Has comprado:\n" + carrito.map(producto => producto.nombre).join("\n") + "\nTotal a pagar: $" + total + ".-");
    } else {
        alert("No has seleccionado ningún producto.");
    }
}

procesarSeleccion();
