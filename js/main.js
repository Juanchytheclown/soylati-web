class Producto{
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

} 