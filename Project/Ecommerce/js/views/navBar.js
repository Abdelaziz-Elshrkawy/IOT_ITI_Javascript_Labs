import { loadAnimation } from "../animation/animation.js";
import { Routing } from "../routing.js";

export default function NavBar(obj, parent, data) {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    ul.id = 'nav-ul'
    const logoSpan = document.createElement('span')
    logoSpan.id = 'logo-span'
    const cartSpan = document.createElement('span')
    cartSpan.id = 'cart-span'
    const productsNum = document.createElement('span')
    productsNum.id = 'products-num'
    cartSpan.appendChild(productsNum)
    const loginDiv = document.createElement('div')
    loginDiv.id = 'cart-login-div'
    loginDiv.appendChild(cartSpan)
    parent.appendChild(logoSpan)

    Object.keys(obj).forEach((key) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        li.id = `${key}-li`
        li.className = 'nav-li'
        a.id = `${key}-a`
        a.className = `nav-a`
        a.textContent = `${key[0].toUpperCase()}${key.slice(1)}`

        a.onclick = (e) => {
            e.preventDefault()
            const contentId = document.getElementById('rootDiv').firstChild.id.split('-')[0]
            if (contentId != key) {
                key != 'home' ? document.title = key : document.title = 'My-Store'
                const load = document.getElementById('load')
                load.style.display = 'block'
                load.style.backgroundColor = 'rgba(3, 3, 3, 0.537)'
                document.body.style.overflow = 'hidden'
                loadAnimation.play()
                setTimeout(() => {
                    Routing(key)
                    load.style.display = 'none'
                    document.body.style.overflow = 'auto'
                    loadAnimation.stop()
                }, 1000)
            }
        }
        li.appendChild(a)
        ul.appendChild(li)
    });
    nav.appendChild(ul)

    parent.appendChild(nav)
    parent.appendChild(loginDiv)
}