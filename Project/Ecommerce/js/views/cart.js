import { Product } from "./product.js"

function Cart() {
    const cart = document.getElementById('cart')
    const containersDiv = document.createElement('div')
    const cartProductsDiv = document.createElement('div')
    const cartTotalDiv = document.createElement('div')
    const closeBtn = document.createElement('button')
    const totalP = document.createElement('p')
    const submitBtn = document.createElement('button')
    const cartEmptyError = document.createElement('p')
    const submitMessage = document.createElement('p')
    totalP.id = 'total-p'
    closeBtn.id = 'cart-close-btn'
    closeBtn.textContent = 'X'
    cart.appendChild(closeBtn)
    cartProductsDiv.id = 'cart-products-div'
    cartTotalDiv.id = 'cart-total-div'
    containersDiv.id = 'products-total-container-div'
    submitBtn.id = 'submit-btn'
    cartEmptyError.id = 'car-empty-error'
    submitMessage.id = 'submit-message'

    submitBtn.textContent = 'Submit'
    cartEmptyError.textContent = 'your cart is empty'
    totalP.textContent = 'Total Price is: 0$'
    submitMessage.textContent = 'your order submitted successfully'
        
    cartTotalDiv.append(totalP, submitBtn, cartEmptyError, submitMessage)
    containersDiv.append(cartTotalDiv, cartProductsDiv)
    cart.appendChild(containersDiv)
    return {
        html: null,
        events: function () {
            document.getElementById('cart-close-btn').addEventListener('click', () => {
                document.getElementById('cart').style.display = 'none'
            })
            document.getElementById('rootDiv').addEventListener('click', (e) => {
                if (e.target.id != 'cart') {
                    document.getElementById('cart').style.display = 'none'
                }
            })
            document.body.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.getElementById('cart').style.display = 'none'
                }
            })
            document.getElementById('submit-btn').addEventListener('click', () => {
                const cartProductList = document.getElementById('cart-products-div')
                if (cartProductList.children.length == 0) {
                    document.getElementById('car-empty-error').style.display = 'block'
                    setTimeout(() => {
                        document.getElementById('car-empty-error').style.display = 'none'
                    }, 2000)
                } else {
                    cartProductList.innerHTML = null
                    document.getElementById('submit-message').style.display = 'block'
                    document.getElementById('products-num').style.display = 'none'
                    document.getElementById('products-num').textContent = ''
                    setTimeout(() => {
                        document.getElementById('submit-message').style.display = 'none'
                    }, 2000)
                    updateTotal()
                }   
            })
            document.getElementById('cart-span').addEventListener('click', () => {
                document.getElementById('cart').style.display = 'inline'
            })
        }
    }
}

function updateTotal() {
    let total = 0
    const productsArr = document.getElementsByClassName('cart-product-price')
    for (let i = 0; i < productsArr.length; i++) {
        total += parseInt(productsArr[i].textContent.split(':')[1].split('$')[0])
    }
    document.getElementById('total-p').textContent = `Total Price is: ${total}$`
    console.log(total)
}

export {
    Cart,
    updateTotal
}