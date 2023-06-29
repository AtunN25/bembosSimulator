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
    hamburguesaOptions.forEach((option) => {
        option.classList.add("hidden");
    });

    menusOptions.forEach((option) => {
        option.classList.add("hidden");
    });

    complementosOptions.forEach((option) => {
        option.classList.add("hidden");
    });

    bebidasOptions.forEach((option) => {
        option.classList.add("hidden");
    });
}

// Función para mostrar las opciones seleccionadas
function mostrarOpciones(options) {
    options.forEach((option) => {
        option.classList.remove("hidden");
    });
}