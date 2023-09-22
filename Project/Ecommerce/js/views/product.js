const cartArr = []

function Product(imgSrc, text, price, buttonClassName, buttonTextContent) {    
    const productDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const textDiv = document.createElement('div')
    const textP = document.createElement('p')
    const inputDiv = document.createElement('div')
    const btn = document.createElement('button')
    const input = document.createElement('input')
    const priceSpan = document.createElement('span')

    productDiv.className = 'product-div'
    imgDiv.className = 'product-img-div'
    textDiv.className = 'product-text-div'
    textP.className = 'product-text-p'
    inputDiv.className = 'product-input-div'
    btn.className = buttonClassName || 'product-btn'
    input.className = 'product-input'
    priceSpan.className = 'product-price'
    img.src = imgSrc
    img.alt = text
    textP.textContent = text
    btn.textContent = buttonTextContent || 'Add to Cart'
    input.type = 'text'
    input.maxLength = 2
    input.value = 1
    priceSpan.innerHTML = `<b>Price:</b>  ${price}$`

    imgDiv.appendChild(img)
    inputDiv.append(input, btn)
    textDiv.append(textP, priceSpan, inputDiv)

    productDiv.append(imgDiv, textDiv, inputDiv)

    return {
        html: productDiv,
        events: function () {
            const productsBtn = document.getElementsByClassName(buttonClassName || 'product-btn')
            const productsInput = document.getElementsByClassName('product-input')
            if (buttonClassName != 'product-btn') {
                for (let i = 0; i < productsBtn.length; i++) {
                    productsBtn[i].addEventListener('click', (e) => {
                        e.preventDefault()
                        let cartNumber = document.getElementById('products-num')
                        if (productsInput[i].value != '' && productsInput[i].value != 0) {
                            if (cartNumber.textContent == '') {
                                cartNumber.textContent = productsInput[i].value
                            } else {
                                cartNumber.textContent = parseInt(cartNumber.textContent) + parseInt(productsInput[i].value)
                            }
                            document.getElementById('products-num').style.display = 'inline'
                            console.log(productsInput[i].value)
                        }
                    })
                    productsInput[i].value = 1
                    productsInput[i].addEventListener('input', () => {
                        if (isNaN(productsInput[i].value)) {
                            productsInput[i].value = ''
                        }
                    })
                }
            }
        }
    }
}


export {
    Product,
    cartArr
}