import { cartProduct } from "./cartProduct.js"

const cartArr = []

function Product(imgSrc, text, price) {
    const productDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const textDiv = document.createElement('div')
    const textP = document.createElement('p')
    const inputDiv = document.createElement('div')
    const btn = document.createElement('button')
    const priceSpan = document.createElement('span')

    productDiv.className = 'product-div'
    imgDiv.className = 'product-img-div'
    textDiv.className = 'product-text-div'
    textP.className = 'product-text-p'
    inputDiv.className = 'product-input-div'
    priceSpan.className = 'product-price'
    btn.className = 'product-btn'

    btn.name = text

    priceSpan.innerHTML = `<b>Price:</b>  ${price}$`
    img.src = imgSrc
    img.alt = text
    textP.textContent = text

    btn.textContent = 'Add to Cart'





    imgDiv.appendChild(img)
    inputDiv.append(btn)
    textDiv.append(textP, priceSpan, inputDiv)

    productDiv.append(imgDiv, textDiv, inputDiv)

    return {
        html: productDiv,
        events: function () {
            const productsBtn = document.getElementsByClassName('product-btn')
            let cartNumber = document.getElementById('products-num')
            for (const element of productsBtn) {
                element.addEventListener('click', (e) => {
                    e.preventDefault()
                    cartNumber.textContent = document.getElementsByClassName('cart-remove-btn').length+1
                    cartNumber.style.display = 'inline'
                    const price = e.target.parentNode.parentNode.children[1].children[1].textContent.split(':')[1].split('$')[0]
                    console.log(price)
                    cartProduct(e.target.parentNode.parentNode.children[0].firstChild.src, e.target.parentNode.parentNode.children[1].firstChild.textContent,price)
                })
            }

        }
    }
}


export {
    Product,
    cartArr
}