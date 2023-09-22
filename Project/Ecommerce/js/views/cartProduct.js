import { updateTotal } from "./cart.js"

function cartProduct(imgSrc,text,price) {
    const cartProductsDiv = document.getElementById('cart-products-div')
    const productDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const textDiv = document.createElement('div')
    const textP = document.createElement('p')
    const inputDiv = document.createElement('div')
    const btn = document.createElement('button')
    const input = document.createElement('input')
    const priceSpan = document.createElement('span')

    productDiv.className = 'cart-product-div'
    imgDiv.className = 'cart-product-img-div'
    textDiv.className = 'cart-product-text-div'
    textP.className = 'cart-product-text-p'
    inputDiv.className = 'cart-product-input-div'
    priceSpan.className = 'cart-product-price'
    btn.className = 'cart-remove-btn'
    input.className = 'cart-product-input'

    priceSpan.innerHTML = `<b>Price:</b>  ${price}$`
    img.src = imgSrc
    img.alt = text
    textP.textContent = text

    btn.textContent = 'X'

    imgDiv.appendChild(img)
    textDiv.append(textP,priceSpan)
    inputDiv.append(btn)
    productDiv.append(imgDiv, textDiv, inputDiv)
    if (cartProductsDiv.firstChild != null) {
        if (cartProductsDiv.firstChild.tagName === 'svg') {
              cartProductsDiv.innerHTML = null
          } 
        
    }

    cartProductsDiv.appendChild(productDiv)
    removeProduct()
    updateTotal()
}

function removeProduct () {
    const removeBtns = document.getElementsByClassName('cart-remove-btn')
    for (let btn of removeBtns) {
        btn.addEventListener('click', (e) => {
            if (document.getElementById('cart-products-div').firstChild != null){
                document.getElementById('cart-products-div').removeChild(e.target.parentNode.parentNode)
            }
            updateTotal()
            document.getElementById('products-num').textContent = document.getElementsByClassName('cart-remove-btn').length
            if (removeBtns.length == 0) {
                document.getElementById('products-num').style.display = 'none'
            }
            updateTotal()
        })
    }
}


export {
    cartProduct
}