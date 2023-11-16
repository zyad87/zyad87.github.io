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

// يتم تحديد جميع العناصر التي تحتوي على خاصية 'data-product-quantity'
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    // يتم إضافة استماع لحدث 'change' على كل عنصر
    item.addEventListener('change', () => {
        // يتم الحصول على الكمية الجديدة المحددة من قبل المستخدم
        const newQuantity = item.value;
        
        // يتم العثور على العنصر الأقرب الذي يحتوي على خاصية 'data-product-info'
        const parent = item.closest('[data-product-info]');
        
        // يتم الحصول على سعر الوحدة للمنتج من خلال الخاصية 'data-product-price'
        const pricePerUnit = parent.getAttribute('data-product-price');
        
        // يتم حساب السعر الإجمالي للمنتج باستخدام الكمية الجديدة
        const totalPriceForProduct = newQuantity * pricePerUnit
        
        // يتم تحديث نص العنصر الذي يحمل الفئة '.total-price-for-product' بالقيمة الجديدة
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + " ريال ";
        
        calculateTotalPrice()
    })
})

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()
        calculateTotalPrice()
    })
})

function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value
        const totalPriceForProduct = pricePerUnite * quantity

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct;
}
const citiesByCountry = {
    sa: ['جدة', 'الرياض'],
    eg: ['القاهرة', 'الإسكندرية'],
    jo: ['عمان', 'الزرقاء'],
    sy: ['دمشق', 'حلب', 'حماه']
}

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value

        const cities = citiesByCountry[country]

        document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

        const firstOption = document.createElement('option')
        const optionText = document.createTextNode('اختر المدينة')
        firstOption.appendChild(optionText)
        firstOption.setAttribute('value', '')
        firstOption.setAttribute('disabled', 'true')
        firstOption.setAttribute('selected', 'true')

        const city_options = document.getElementById('paymentcities')
        city_options.appendChild(firstOption)

        cities.forEach(city => {
            const newOption = document.createElement('option')
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value', city)
            city_options.appendChild(newOption)
        })
    })
})
document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
    item.addEventListener('change', () => {
        const paymentMethod = item.value;

        const creditCardInputs = document.querySelectorAll('#credit_card_info input');

        if(paymentMethod === 'on_delivery') {
            creditCardInputs.forEach(input => {
                input.style.display='none'
            })
        } else {
            creditCardInputs.forEach(input => {
                input.style.display='block'
            })
        }
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

