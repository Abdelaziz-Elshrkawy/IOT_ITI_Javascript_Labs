export default function Footer(parent) {
    const contacts = {
        "facebook": "https://www.facebook.com/zezo.elsharkawy/",
        "twitter": "https://twitter.com/abdelziz53/",
        "whatsapp": "https://wa.me/01121418155",
        "linkedin": "https://www.linkedin.com/in/abdelaziz-elshrkawy-5b6888146",
        "discord": "https://discord.com/users/1305"
    }

    const footer = document.createElement('footer')
    const contactsDiv = document.createElement('div')
    contactsDiv.id = 'contacts-div'
    Object.keys(contacts).forEach((e) => {
        const div = document.createElement('div')
        div.id = `${e}-div`
        div.className = 'contact'
        const img = document.createElement('img')
        img.id = `${e}-img`
        img.src = `./assets/imgs/${e}.svg`
        const a = document.createElement('a')
        a.id = `${e}-a`
        a.href = contacts[e]
        a.target = '_blank'
        div.appendChild(a)
        a.appendChild(img)
        contactsDiv.appendChild(div)
    })

    const textDiv = document.createElement('div')
    textDiv.id = 'text-div'
    const textP = document.createElement('p')
    textP.id = 'text-p'
    textP.textContent = 'Copyright © 2023 IOT EME ITI Munofia'
    textDiv.appendChild(textP)

    footer.appendChild(textDiv)
    footer.appendChild(contactsDiv)
    parent.appendChild(footer)
}