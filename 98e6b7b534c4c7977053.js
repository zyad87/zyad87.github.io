window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';


document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener('click', () => {
        alert("أضيف المُنتج إلى عربة الشراء")

    })
})

document.querySelectorAll(".size-option input[type='radio']").forEach(item =>{
    item.addEventListener('change', ()=> {
        document.querySelectorAll('.size-option').forEach(i =>{
            i.classList.remove('active');
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.querySelectorAll(".color-option input[type='radio']").forEach(item =>{
    item.addEventListener('change', ()=> {
        document.querySelectorAll('.color-option').forEach(i =>{
            i.classList.remove('active');
        })
        item.parentNode.parentNode.classList.add('active')
    })
})


// حساب سعر أجمالي المنتج

document.querySelectorAll('[data-product-quantity]').forEach(item =>{
    item.addEventListener('change', ()=.{
        con
    })
})


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear();
console.log('zyad اهلا')
console.log('zyad مرحبا')

