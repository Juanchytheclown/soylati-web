//FETCH
function clickEnProducto(id){
  alert('click en ' + id)
}

fetch('../data.json')
.then((resinicial) => resinicial.json())
.then((res) => {
  const miArray = res;

  let htmlAux = '';
  for (let i = 0; i < miArray.length; i++) {
    htmlAux =
      htmlAux +
        `<div class="container">
        <div class="row align-items-start">
          <div id="grid-fondo-cocina-fetch" class="col">
          <h3>${miArray[i].name}</h3>
          <h4>$${miArray[i].price}</h4>
          <img ${miArray[i].img}>
          <img ${miArray[i].logo} width="100" height="50">
          </div>
          <div id="grid-fondo-cocina-fetch" class="col">
          <h3>${miArray[i].name}</h3>
          <h4>$${miArray[i].price}</h4>
          <img ${miArray[i].img}>
          <img ${miArray[i].logo} width="100" height="50">
          </div>`;
  }
  document.getElementById('listadoDeProductos').innerHTML = htmlAux;
})
    .catch((e) => {
      console.log(e);
});

//FIN DE FETCH

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
  const button = event.target;
  const grid__item = button.closest('.grid__item');

  const itemTitle = grid__item.querySelector('.item-title').textContent;
  const itemPrice = grid__item.querySelector('.item-price').textContent;
  const itemImage = grid__item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
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
  <div class="row shoppingCartItem">
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
                <button class="btn btn-danger buttonDelete" type="button">X</button>
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
    console.log(total)
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
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

