// PRIMERAS ENTRAGAS - MENUES CARRITO

// let precio, continuaCompra, mensaje;
// const envio = 400;
// let compras = [];

// do {
//   producto = prompt(
//     'Buenos días! Qué desea comprar?\nMonstruo, Manta o Carpa'
//   );
//   switch (producto) {
//     case 'Monstruo':
//       cantidad = prompt('Ingrese cantidad');
//       precio = 4000;
//       compras.push({
//         producto,
//         precio: precio * cantidad + envio,
//       });
//       break;
//     case 'Carpa':
//       cantidad = prompt('Ingrese cantidad');
//       precio = 8000;
//       compras.push({
//         producto,
//         precio: precio * cantidad + envio,
//       });
//       break;
//     case 'Manta':
//       cantidad = prompt('Ingrese cantidad');
//       precio = 2000;
//       compras.push({
//         producto,
//         precio: precio * cantidad + envio,
//       });
//       break;
//     default:
//       alert('Este producto no existe');
//   }

//   continuaCompra = confirm('Desea comprar algo más?');
// } while (continuaCompra);

// compras.forEach((compra) => {
//   mensaje += `Producto: ${compra.producto}, Precio: ${compra.precio} \n`;
// });

// alert(mensaje);


const productosCarro = document.getElementById("productosCarro");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("carritoVaciar");
const unidadCarrito = document.getElementById("btn-carro");
const precioTotal = document.getElementById("precioTotal");



/////////// AGREGAR AL CARRITO

//creación de array para guardar en el carrito
let carritoComp = []

//carga de productos en array para luego mostrarlo por html
let stockP = [
  {
    id: 1,
    nombre: "Escarapela",
    cantidad: 1,
    productodesc:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    precio: 500,
    img: "../img/escarapela.jpeg",
  },
  {
    id: 2,
    nombre: "Carpa Tipi",
    cantidad: 1,
    productodesc:
      "Son un excelente juego individual, se emplean mucho para la diversión en grupo. Las pijamadas con carpas tipis, acompañadas de pelis, meriendas y almohadones. En la terraza, bajo el quincho o el balcón. A cielo abierto en el jardín, o en un parque, son garantía de diversión.",
    precio: 10000,
    img: "../img/carpa.png",
  },
  {
    id: 3,
    nombre: "Monstruo",
    cantidad: 1,
    productodesc:
      "Suaves, en la más lindas telas y texturas. Ideales para abrazar; en diferentes tamaños, minis, pequeños y grandes.",
    precio: 7000,
    img: "../img/monstruo.png",
  },
];

////////// Insertando Cards de productos
stockP.forEach((producto) => {
  const divHTML = document.createElement("div");
  divHTML.class = "col-md-4 mt-2";
  divHTML.innerHTML = `<div class="card">
  <div class="card-body">
  <div class="card-img-actions">
  <img src=${producto.img} class="card-img img-fluid" width="96" height="350" alt="">
  </div>
  </div>
  <div class="card-body bg-light text-center">
  <div class="mb-2">
  <h6 class="font-weight-semibold mb-2">
  <h5 class="card-title">${producto.nombre}</h5>
  </h6>
  <p class="card-text">${producto.productodesc}</p>
  </div>
  <h3 class="mb-0 font-weight-semibold">$${producto.precio}</h3>
  <button type="button" class="btn bg-cart" id="agregarCarrito${producto.id}"><i class="fa fa-cart-plus mr-2"></i>Agregar al carrito</button> 
  </div>
  </div>`;

  productosCarro.appendChild(divHTML);

  //////// Capturando eventos
  const btnshop = document.getElementById(`agregarCarrito${producto.id}`);
  btnshop.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
});

///////// Agregando productos al carrito, por ahora los muestro en un clg
const agregarAlCarrito = (productoId) => {
  const product = stockP.find((producto) => producto.id === productoId);
  carritoComp.push(product);
  actualizarCarrito();
};

console.log(carritoComp);

///////////

const eliminarDelCarrito = (productoId) => {
  const product = carritoComp.find((producto) => producto.Id === productoId);
  const indice = carritoComp.indexOf(product);
  carritoComp.splice(indice, 1);
  actualizarCarrito();
};

/////////////

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carritoComp.forEach((producto) => {
    const div = document.createElement(`div`);
    div.className = "carrito-contenedor";
    div.innerHTML = `
        <p><b>${producto.nombre}</b></p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${producto.id})"><i class='bx bx-x'></i></button>
        `;
    contenedorCarrito.appendChild(div);
  });

  unidadCarrito.innerText = carritoComp.length;
  precioTotal.innerText = carritoComp.reduce((acc, producto) => acc + producto.precio, 0);
};

botonVaciar.addEventListener("click", () => {
  carritoComp.length = 0;
  actualizarCarrito();
});

