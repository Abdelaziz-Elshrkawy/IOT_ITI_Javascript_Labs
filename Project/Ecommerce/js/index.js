import animation from './animation/animation.js'
import getData from './getData.js'
import { Routing, pages } from './routing.js'
import Footer from './views/footer.js'
import NavBar from './views/navBar.js'
const rootDiv = document.getElementById('rootDiv')
const navDiv = document.getElementById('navDiv')
const footer = document.getElementById('footerDiv')
console.log(footer)
getData().then(async e => {
    console.log(await e.json())
})


NavBar(pages, navDiv)
Footer(footer)
animation()
window.onload = () => {
    // Routing('home')
}

export {
    rootDiv
}