//Defino una clase para mis productos
class Materiales {
  constructor (id, name, price, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

//Creo array vacio
let productos = [];
let carrito = [];

//FETCH
fetch('../data.json')
.then((resinicial) => resinicial.json())
.then((res) => {
  const miArray = res;
  miArray.forEach(element => {
    productos.push(new Materiales(element.id, element.name, element.price, element.img))
  });
  let htmlAux = '';
  for (let i = 0; i < miArray.length; i++) {
    htmlAux =
      htmlAux +
        `<div id="grid-fondo-cocina" class="grid__item grid__item--${i}">
        <h3 class="item-title">${miArray[i].name}</h3>
        <h4 class="grid__subtitle--h3 item-price">$${miArray[i].price}</h4>
        <img class="item-image" src="${miArray[i].img}" alt="${miArray[i].name}">
        <img class="grid__img" src="${miArray[i].logo}" alt="hot-sale" width="100" height="50">
        <span id=${miArray[i].id} class="jam jam-shopping-cart grid__carrito addToCart"></span>
        </div>`;
  }
  document.getElementById('listadoDeProductos').innerHTML = htmlAux;
  const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
  addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});
checkCarrito()
})
    .catch((e) => {
});


//FIN DE FETCH

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
  const button = event.target;
  const grid__item = button.closest('.grid__item');

  const itemTitle = grid__item.querySelector('.item-title').textContent;
  const itemPrice = grid__item.querySelector('.item-price').textContent;
  const itemImage = grid__item.querySelector('.item-image').src;


  //Matchear entre producto seleccionado y producto de lista
  const existe = productos.find((prod) => prod.name === itemTitle);
  if (existe) {
    carrito.push(existe)
  }

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);

  //Guardo en LocalStorage lo que el usuario agrega al carro
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

//Creo una funcion que busca en LocalStorage el carrito del cliente y lo empuja a la funcion del carro
function checkCarrito () {
  const userCarrito = (JSON.parse(localStorage.getItem('carrito')))
  carrito.push(...userCarrito)
  if (userCarrito) {
    userCarrito.forEach(prod => {
      addItemToShoppingCart(prod.name, prod.price, prod.img);
    })
  }
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      updateShoppingCartTotal();
      return;
    }
  }
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem ${itemTitle}">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button id=${itemTitle} class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();

}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
  //Guardo en LocalStorage lo que el usuario agrega al carro
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  const item = carrito.find((prod) => prod.name === buttonClicked.id)
  if (item) {
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
  }
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

//LIBRERIA SWEET ALERT - COCINA
const btn = document.querySelector('#btn-success')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Compra exitosa!',
        text: 'Recibiras tu pedido dentro de 3 dias habiles',
        icon: 'success',
        confirmButtonText: 'OK'
})
})

