import getData from "../getData.js"
import {categoryButton, filter} from "./categoryBtn.js"
import { Product } from "./product.js"
import {Slider} from "./slider.js"

export default async function Home() {
    const homeDiv = document.createElement('div')
    const categoriesDiv = document.createElement('div')
    const productsDiv = document.createElement('div')
    homeDiv.id = 'home-div'
    categoriesDiv.id = 'categories-div'
    productsDiv.id = 'products-div'

    let categoriesArr = ['all']

    try {
        let data = await (await getData()).json()
        data = data.products
        console.log(data)

        for (let i of data) {
            if (!categoriesArr.includes(i.category)) {
                categoriesArr.push(i.category)
            }
        }
        for (let cat of categoriesArr) {
            categoriesDiv.appendChild(categoryButton(cat).html)
        }
        const slider = Slider()
        // productsDiv.appendChild(docFrag)
        homeDiv.appendChild(slider.html)
        homeDiv.appendChild(categoriesDiv)
        homeDiv.appendChild(productsDiv)
        console.log('home')
        return {
            html: homeDiv.outerHTML,
            events: function () {
                slider.events()
                filter(data).events()
                //displaying all categories
                document.getElementsByClassName('category-btn')[0].click()
            }
        }
    } catch (e) {
        console.log(e)
    }
}