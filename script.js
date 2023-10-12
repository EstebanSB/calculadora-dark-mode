// Captura el id "switch" en el HTML
const switchbtn = document.getElementById("switch");

// Obtiene el elemento con el id "display" en el HTML
const display = document.getElementById("display");

// Obtiene una lista de todos los elementos <input> en el HTML
const input = document.querySelectorAll("input");

// Variable "value" que captura la entrada del usuario en la calculadora
let value = "";

// Agrega un evento de click al elemento con el id "switch" en el HTML
switchbtn.addEventListener("click", () => {
    // Comprueba si el interruptor está activado
    if (switchbtn.checked == true) {
        // Si el interruptor está activado, establece el tema oscuro
        document.body.setAttribute("data-theme", "dark");
    } else {
        // Si el interruptor no está activado, quita el tema oscuro
        document.body.setAttribute("data-theme", "");
    }
});

// Maneja los eventos a cada elemento <input> de la lista
input.forEach((e) => {
    e.addEventListener("click", (event) => {
        // Comprueba el valor del elemento <input> que se hizo click
        if (event.target.value == "=") {
            // Si el botón es "=" en la calculadora
            if (value.length != 0) {
                // Si hay una entrada válida, realiza una operación matemática
                let newval = eval(value);
                value = newval;
                display.value = value;
            }
        } else if (event.target.value == 'C') {
            // Si es el botón "C" (borrar), restablece el valor a una cadena vacía
            value = "";
            display.value = value;
        } else if (event.target.value == "switch") {
            // Si es el botón con valor "switch" (posiblemente no se utiliza)
        } else {
            // Para otros botones (números y operadores), agrega su valor a la entrada actual
            value += event.target.value;
            display.value = value;
        }

        // Agrega una clase "active" al elemento <input> que se hizo click
        if (!event.target.classList.contains("switch")) {
            event.target.classList.add("active");
            // Elimina la clase "active" después de 400ms (0.4 segundos)
            setTimeout(() => {
                event.target.classList.remove("active");
            }, 400);
        }
    });
});
