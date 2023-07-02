
var btnHamburguesas = document.getElementById("Hamburguesas");
var btnMenus = document.getElementById("Menus");
var btnComplementos = document.getElementById("Complementos");
var btnBebidas = document.getElementById("Bebidas");

// Opciones de hamburguesas
var btnClasica = document.getElementById("Clasica");
var btnCheese = document.getElementById("Cheese");
var btnRoyal = document.getElementById("Royal");

// Opciones de menús
var btnPechugon = document.getElementById("Pechugon");
var btnBroaster = document.getElementById("Broaster");
var btnBurger = document.getElementById("Burger");

// Opciones de complementos
var btnNuggets = document.getElementById("Nuggets");
var btnSalchipapa = document.getElementById("Salchipapa");
var btnCheeseFingers = document.getElementById("Cheese-fingers");

// Opciones de bebidas
var btnIncaKola = document.getElementById("Inca-kola");
var btnCocaCola = document.getElementById("Coca-cola");
var btnSprite = document.getElementById("Sprite");

// Opciones de hamburguesas
var hamburguesaOptions = [btnClasica, btnCheese, btnRoyal];

// Opciones de menús
var menusOptions = [btnPechugon, btnBroaster, btnBurger];

// Opciones de complementos
var complementosOptions = [btnNuggets, btnSalchipapa, btnCheeseFingers];

// Opciones de bebidas
var bebidasOptions = [btnIncaKola, btnCocaCola, btnSprite];

// Variable para almacenar la última categoría seleccionada
var ultimaCategoriaSeleccionada = null;

btnHamburguesas.addEventListener("click", () => {
    console.log("Botón de hamburguesas presionado");
    if (ultimaCategoriaSeleccionada === hamburguesaOptions) {
        ocultarOpciones();
        ultimaCategoriaSeleccionada = null;
    } else {
        ocultarOpciones();
        mostrarOpciones(hamburguesaOptions);
        ultimaCategoriaSeleccionada = hamburguesaOptions;
    }
});

btnMenus.addEventListener("click", () => {
    console.log("Botón Menus presionado");
    if (ultimaCategoriaSeleccionada === menusOptions) {
        ocultarOpciones();
        ultimaCategoriaSeleccionada = null;
    } else {
        ocultarOpciones();
        mostrarOpciones(menusOptions);
        ultimaCategoriaSeleccionada = menusOptions;
    }
});

btnComplementos.addEventListener("click", () => {
    console.log("Botón Complementos presionado");
    if (ultimaCategoriaSeleccionada === complementosOptions) {
        ocultarOpciones();
        ultimaCategoriaSeleccionada = null;
    } else {
        ocultarOpciones();
        mostrarOpciones(complementosOptions);
        ultimaCategoriaSeleccionada = complementosOptions;
    }
});

btnBebidas.addEventListener("click", () => {
    console.log("Botón Bebidas presionado");
    if (ultimaCategoriaSeleccionada === bebidasOptions) {
        ocultarOpciones();
        ultimaCategoriaSeleccionada = null;
    } else {
        ocultarOpciones();
        mostrarOpciones(bebidasOptions);
        ultimaCategoriaSeleccionada = bebidasOptions;
    }
});

// Función para ocultar todas las opciones
function ocultarOpciones() {
    if (hamburguesaOptions) {
        hamburguesaOptions.forEach((option) => {
            if (option) {
                option.classList.add("hidden");
            }
        });
    }

    if (menusOptions) {
        menusOptions.forEach((option) => {
            if (option) {
                option.classList.add("hidden");
            }
        });
    }

    if (complementosOptions) {
        complementosOptions.forEach((option) => {
            if (option) {
                option.classList.add("hidden");
            }
        });
    }

    if (bebidasOptions) {
        bebidasOptions.forEach((option) => {
            if (option) {
                option.classList.add("hidden");
            }
        });
    }
}

// Función para mostrar las opciones de una categoría
function mostrarOpciones(opciones) {
    if (opciones) {
        opciones.forEach((option) => {
            if (option) {
                option.classList.remove("hidden");
            }
        });
    }
}

let id ;
// Función para agregar evento de selección a un botón
function agregarEventoSeleccion(btn, idfunction) {
    if (btn) {
        btn.addEventListener("click", () => {
            console.log(`Producto ${idfunction} seleccionado`);
            id = idfunction;
            console.log("SE ENVIO : " + id);
        });
    }
}

// Agregar eventos a los botones de hamburguesas
if (btnClasica) {
    agregarEventoSeleccion(btnClasica, 1);
}

if (btnCheese) {
    agregarEventoSeleccion(btnCheese, 2);
}

if (btnRoyal) {
    agregarEventoSeleccion(btnRoyal, 3);
}

// Agregar eventos a los botones de menús
if (btnPechugon) {
    agregarEventoSeleccion(btnPechugon, 4);
}

if (btnBroaster) {
    agregarEventoSeleccion(btnBroaster, 5);
}

if (btnBurger) {
    agregarEventoSeleccion(btnBurger, 6);
}

// Agregar eventos a los botones de complementos
if (btnNuggets) {
    agregarEventoSeleccion(btnNuggets, 7);
}

if (btnSalchipapa) {
    agregarEventoSeleccion(btnSalchipapa, 8);
}

if (btnCheeseFingers) {
    agregarEventoSeleccion(btnCheeseFingers, 9);
}

// Agregar eventos a los botones de bebidas
if (btnIncaKola) {
    agregarEventoSeleccion(btnIncaKola, 10);
}

if (btnCocaCola) {
    agregarEventoSeleccion(btnCocaCola, 11);
}

if (btnSprite) {
    agregarEventoSeleccion(btnSprite, 12);  
}

import { arregloproductos } from "../../controllers/detalle_venta.js";


export {id};

console.log(arregloproductos);

