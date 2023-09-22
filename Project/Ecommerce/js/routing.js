import { rootDiv } from "./index.js"
import aboutUs from "./views/aboutUs.js"
import contactUs from "./views/contactUs.js"
import Home from "./views/home.js"
import { interval } from "./views/slider.js"

const pages = {
    home: Home(),
    aboutUs: aboutUs(),
    contactUs: contactUs()
}

function Routing(route) {
    pages[route].then((e) => {
        rootDiv.innerHTML = e.html
        e.events()
    })
    if (route != 'home') {
        clearInterval(interval)
    }
}


export {
    pages,
    Routing
}