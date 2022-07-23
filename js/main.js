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


//Desafio de DOM
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

//function handleClick(){
    //btnCarritoDelantal.style.backgroundColor = "#78e08f";
    //alert("Delantal a carrito")
//}

//function handleClick(){
    //btnCarritoPortarrollo.style.backgroundColor = "#78e08f";
    //alert("Portarrollo a carrito")
//}




