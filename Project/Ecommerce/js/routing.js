import { rootDiv } from "./index.js"

const pages = {
    home: 'Home()',
    aboutUs: 'About()',
    contactUs: 'Contact()'
}

function Routing(route) {
    rootDiv.innerHTML = pages[route]
}


export {
    pages,
    Routing
}