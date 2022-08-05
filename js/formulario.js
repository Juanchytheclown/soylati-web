//LIBRERIA SWEET ALERT - CONTACTO
const form = document.querySelector('#btn-formulario')
form.addEventListener('click', () => {

    Swal.fire({
        title: 'Gracias por contactarnos!',
        text: 'Contestaremos tu mensaje lo antes posible',
        icon: 'success',
        confirmButtonText: 'OK'
        
})
})