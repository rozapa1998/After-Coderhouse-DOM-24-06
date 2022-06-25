//*******Arrays********
//Productos
const productos = [
    { id:0, nombre: "Remera", precio: 2000, marca: "Nike", img: "src/media/Remera.jpg" },
    { id:1, nombre: "Pantalon", precio: 4000, marca: "Levis",img: "src/media/pantalon.jpg" },
    { id:2, nombre: "Zapatilla", precio: 15000, marca: "Nike",img: "src/media/Zapatillas.jpg" },
    { id:3, nombre: "Gorra", precio: 800, marca: "Adibas",img: "src/media/Gorra.jpeg"}
]

//Carrito
const carrito = []

//************DOM**********
//-----------Productos Cards--------------
let cards = document.getElementById("cardProd")
let carritoProd = document.getElementById("cardCarrito")
let valorTotal = document.getElementById("precioFinal")

productos.forEach(producto => {
    let card = document.createElement("div")
    card.className="col-12 col-sm-3 mt-5"
    card.innerHTML=`
    <div class="card text-center">
  <img src="${producto.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Marca: ${producto.marca}</p>
    <p class="card-text fs-3">$${producto.precio}</p>
    <button id="comprar" onclick="Comprar(${producto.id})"  class="btn btn-primary">Comprar</button>
  </div>
</div>
`
    cards.append(card)
});


//----------Nav----------
let nav = document.getElementById("nav")
nav.innerHTML=`
<nav class="navbar navbar-dark navbar-expand-lg bg-dark pt-3">
      <div class="container-fluid">
        <a class="navbar-brand ms-5" href="#"><img src="src/media/pngwing.com.png" style="height:70px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            <a class="nav-link active" href="#">Productos</a>
          </div>
        </div>
        <div class="me-5">
          <button class="btn btn-primary position-relative">
          <i class="fa fa-shopping-cart" style="font-size:30px; color: #ffffff;"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
          </span>
        </button>
          </div>
        </div>
      </div>
    </nav>
`
//**********Funciones***********/
const Comprar = (x) =>{
 carrito.push(productos[x])
 
 //Reduce para calcular el total
 let total = carrito.reduce((acc, item)=>{
    return acc + item.precio}, 0)
    
 //Iteracion del los items del Carrito
 carrito.forEach(producto => {
    let card = document.createElement("div")
    card.className="col-12 col-sm-3 pt-5"
    card.innerHTML=`
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text fs-3">Precio: $${producto.precio}</p>
      </div>
    </div>
  </div>
</div>
`
    carritoProd.append(card)
});

//Renderizado del total de la compra
valorTotal.innerHTML=`
<h2 class="white">Total de compra = $${total}</h2>
`
}
