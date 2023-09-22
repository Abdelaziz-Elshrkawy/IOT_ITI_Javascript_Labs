import { Product } from "./product.js"

function categoryButton(category) {
    const btnDiv = document.createElement('div')
    const btn = document.createElement('button')

    btn.textContent = `${category[0].toUpperCase()}${category.slice(1)}`
    btn.id = category
    btn.className = 'category-btn'
    btnDiv.className = 'category-div'
    btnDiv.appendChild(btn)
    return {
        html: btnDiv
    }
}

function filter(data) {
    const categoriesBtns = document.getElementsByClassName('category-btn')
    return {
        html: null,
        events: function () {
            for (let categoryBtn of categoriesBtns) {
                categoryBtn.addEventListener('click', (e) => {
                    const productsDiv = document.getElementById('products-div')
                    const docFrag = new DocumentFragment()
                    for (let element of data) {
                        if (e.target.id === 'all') {
                            docFrag.appendChild(Product(element.thumbnail, element.title, element.price).html)
                        } else
                            if (element.category === e.target.id) {
                                docFrag.appendChild(Product(element.thumbnail, element.title, element.price).html)
                            }
                    }
                    productsDiv.innerHTML = null
                    productsDiv.appendChild(docFrag)
                    Product().events()
                })
            }
        }
    }
}

export {
    categoryButton,
    filter
}
