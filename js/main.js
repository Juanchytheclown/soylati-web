let productos = [
    {id: 100, nombre: "delantal", precio: 1605, img: "src=../imagenes/cocina/delantal-removebg.png"},
    {id: 101, nombre: "pava", precio: 10500, img: "src=../imagenes/cocina/pava-negra-removebg.png"},
    {id: 102, nombre: "perchero", precio: 1750, img: "src=../imagenes/hogar/perchero-removebg.png"},
    {id: 103, nombre: "lampara", precio: 2851, img: "src=../imagenes/hogar/lampara-removebg.png"},
    {id: 104, nombre: "almohadon", precio: 3500, img: "src=../imagenes/textil/almohadon-removebg.png"},
    {id: 105, nombre: "amigurruni", precio: 1500, img: "src=../imagenes/textil/amigurumi-amarillo-removebg.png"},
];

let aux = localStorage.getItem("productosEnCarro");
let productosEnCarro;

if(!aux){
    productosEnCarro = [];
}else{
    productosEnCarro = JSON.parse(aux)
    pintarProductosEnCarro()
}

function pintarListadoProductos() {
    let aux = "";
    for (let i = 0; i < productos.length; i++ ){
        aux = 
          aux + 
          `<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer; background-color: #ceb4e2; border: 1px solid black">
             <h3>Nombre: ${productos[i].nombre}</h3>
             <span style="background-color: #460080; font-size: 25px; color: white; border-radius: 20%">$ ${productos[i].precio}</span>
             <p>Categoria: ${productos[i].id}</p>
             <img ${productos[i].img}>
          </div>`;
}

document.getElementById("div-productos").innerHTML = aux;
}

pintarListadoProductos();

//FUNCIONES DE CARRO
function meterAlCarro(objetoProducto) {
    productosEnCarro.push(objetoProducto);
    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro))
    pintarProductosEnCarro();
}

function borrarDelCarro(id) {
    productosEnCarro.splice(id, 1);
    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro))
    pintarProductosEnCarro();
}

function pintarProductosEnCarro() {
    let aux = "";
    for (let i = 0; i < productosEnCarro.length; i++ ){
        aux = 
          aux + 
          `<div style="border: 1px solid black; background-color: lightgreen">
             <h3>Nombre: ${productosEnCarro[i].nombre}</h3>
             <span style="background-color: #004400; font-size: 25px; color: white; border-radius: 20%">$ ${productosEnCarro[i].precio}</span>
             <p>Categoria: ${productosEnCarro[i].id}</p>
             <p onclick="borrarDelCarro(${i})" style="cursor: pointer;">🗑️</p>
          </div>`;
}

document.getElementById("div-carrito").innerHTML = aux;
}

//EVENTOS EN COCINA.HTML (AGREGA AL CARRO Y CAMBIA DE COLOR ICONO DEL CARRITO)
let btnCarritoDelantal = document.getElementById("btnCarritoDelantal")
let btnCarritoPortarrollo = document.getElementById("btnCarritoPortarrollo")
let btnCarritoPava = document.getElementById("btnCarritoPava")
let btnCarritoSet = document.getElementById("btnCarritoSet")
let btnCarritoMate = document.getElementById("btnCarritoMate")
let btnCarritoEspeciero = document.getElementById("btnCarritoEspeciero")
let btnCarritoMolinillo = document.getElementById("btnCarritoMolinillo")
let btnCarritoPastarella = document.getElementById("btnCarritoPastarella")


btnCarritoDelantal.addEventListener("click", () => {
    btnCarritoDelantal.style.backgroundColor = "#78e08f";
    alert("Delantal a carrito")
})

btnCarritoPortarrollo.addEventListener("click", () => {
    btnCarritoPortarrollo.style.backgroundColor = "#78e08f";
    alert("Portarrollo a carrito")
})

btnCarritoPava.addEventListener("click", () => {
    btnCarritoPava.style.backgroundColor = "#78e08f";
    alert("Pava Negra a carrito")
})

btnCarritoSet.addEventListener("click", () => {
    btnCarritoSet.style.backgroundColor = "#78e08f";
    alert("Set Nature a carrito")
})

btnCarritoMate.addEventListener("click", () => {
    btnCarritoMate.style.backgroundColor = "#78e08f";
    alert("Mate a carrito")
})

btnCarritoEspeciero.addEventListener("click", () => {
    btnCarritoEspeciero.style.backgroundColor = "#78e08f";
    alert("Especiero a carrito")
})

btnCarritoMolinillo.addEventListener("click", () => {
    btnCarritoMolinillo.style.backgroundColor = "#78e08f";
    alert("Molinillo a carrito")
})

btnCarritoPastarella.addEventListener("click", () => {
    btnCarritoPastarella.style.backgroundColor = "#78e08f";
    alert("Pastarella a carrito")
})

/*function handleClick(){
    btnCarritoDelantal.style.backgroundColor = "#78e08f";
    alert("Delantal a carrito")
}

function handleClick(){
    btnCarritoPortarrollo.style.backgroundColor = "#78e08f";
    alert("Portarrollo a carrito")
}




//SWEET ALERT
/*function manejeElClick() {
    Swal.fire({
      title: 'Suscripcion Exitosa',
      text: 'Pronto recibiras novedades de',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  //Toastify
  function manejeElClick() {
  Toastify({
    text: 'Probando toast!',
    duration: 3000,
    onclick: () => {
        Toastify({
        text: 'Clikeaste un toast!',
        duration: 1500,
        position: "left",
    }).showToast();
  }
 }).showToast();
}*/

//LUXON DATE
/*const DateTime = luxon.DateTime;

const dt = DateTime.local(2022, 1, 25, 12, 10);

console.log(dt);*/



//PREENTREGA FINAL 1
/*class Producto{
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarproducto(){
        return " id: " + this.id + " " + 
        " precio: " + this.precio + " " + " producto: " + 
        this.nombre + "\n";
    }
}

function comprar(nombre, email, tel, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);
    alert("Gracias " + nombre + " por tu compra. \n Total: $" + cant);
}

let productos = [
    new Producto(100, "delantal", 1605, "cocina"),
    new Producto(101, "pava", 10500, "cocina"),
    new Producto(102, "perchero", 1750, "hogar"),
    new Producto(103, "lampara", 2851, "hogar"),
    new Producto(104, "almohadon", 3500, "textil"),
    new Producto(105, "amigurruni", 1500, "textil")
];

let categorias = ["cocina", "hogar", "textil"];

let productosEnCarro = [];

let categoria = "";

while (categoria != "salir" && categoria != null){
    let aux = categorias.join (", ");
    categoria = prompt("ingrese una categoria para comprar o ingrese salir:  \n(" + aux + ")")
    if (categoria != "salir" && categoria != null){
        let productosFiltradoPorCategoria = productos.filter((item) => (item.categoria == categoria));
        let cartel = "";
        for(let i = 0; i < productosFiltradoPorCategoria.length; i++ ){

            cartel += productosFiltradoPorCategoria[i].mostrarproducto();
            
        }
        let idSelccionado = parseInt(prompt("seleccione ID del producto que quiere comprar \n\n" + cartel));
        let productoParaCarro = productosFiltradoPorCategoria.find((item) => item.id == idSelccionado);

        if (productoParaCarro){
            productosEnCarro.push(productoParaCarro)
        }


    }
}

if (productosEnCarro.length > 0){
    alert("ingrese sus datos para terminar su compra");
    let nombre = prompt("ingrese su nombre");
    let tel = prompt("ingrese su tel");
    let email = prompt("ingrese su email");
    comprar(nombre, email, tel, productosEnCarro)

}*/


//DESAFIO DE DOM
/*let productos = [
    {"id": 100, "nombre": "delantal", "precio": 1605, "img": "../imagenes/cocina/delantal-removebg.png"},
    {"id": 101, "nombre": "pava", "precio": 10500, "img": "../imagenes/cocina/pava-negra-removebg.png"},
    {"id": 102, "nombre": "perchero", "precio": 1750, "img": "../imagenes/hogar/perchero-removebg.png"},
    {"id": 103, "nombre": "lampara", "precio": 2851, "img": "../imagenes/hogar/lampara-removebg.png"},
    {"id": 104, "nombre": "almohadon", "precio": 3500, "img": "../imagenes/textil/almohadon-removebg.png"},
    {"id": 105, "nombre": "amigurruni", "precio": 1500, "img": "../imagenes/textil/amigurumi-amarillo-removebg.png"},
]

const carrito = []

function renderizarProductos(){
    let tienda = document.getElementById("tienda");

productos.forEach((e)=>{
    let productoHTML = 
    `<div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
    <img src="${e.img}" class="card-img-top" alt="catalogo">
    <div class="card-body">
      <h5 class="card-title">${e.nombre}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text">${e.precio}$</p>
      <button class="btn btn-primary">Añadir al carrito</button>
    </div>
  </div>`
  tienda.innerHTML += productoHTML
  tienda.style.backgroundColor="#ceb4e2";

});

}
renderizarProductos();*/