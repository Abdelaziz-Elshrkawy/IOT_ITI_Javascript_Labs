import {animation, loadAnimation} from './animation/animation.js'
import { Routing, pages } from './routing.js'
import { Cart } from "./views/cart.js"
import Footer from './views/footer.js'
import NavBar from './views/navBar.js'
import UpBtn from './views/upBtn.js'
const rootDiv = document.getElementById('rootDiv')
const navDiv = document.getElementById('navDiv')
const footer = document.getElementById('footerDiv')
const load = document.getElementById('load')

window.onload = () => {
    Routing('home')
    Cart().events()
    load.style.display = 'block'
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
        navDiv.style.display = 'flex'
        footer.style.display = 'flex'
        load.style.display = 'none'
        document.body.style.overflow = 'auto'
        loadAnimation.stop()
    }, 3000)
}

NavBar(pages, navDiv)
UpBtn()
Footer(footer)
animation()


export {
    rootDiv
}