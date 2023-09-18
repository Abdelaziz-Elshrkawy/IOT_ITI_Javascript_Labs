import { Routing } from "../routing.js";

export default function NavBar(obj, parent) {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    ul.id = 'nav-ul'
    const logoSpan = document.createElement('span')
    logoSpan.id = 'logo-span'
    const cartSpan = document.createElement('span')
    cartSpan.id = 'cart-span'
    const loginSpan = document.createElement('span')
    loginSpan.id = 'login-span'
    const cartLoginDiv = document.createElement('div')
    cartLoginDiv.id = 'cart-login-div'
    cartLoginDiv.appendChild(cartSpan)
    cartLoginDiv.appendChild(loginSpan)
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
            Routing(key)
        }
        li.appendChild(a)
        ul.appendChild(li)
    });
    nav.appendChild(ul)

    parent.appendChild(nav)
    parent.appendChild(cartLoginDiv)
}