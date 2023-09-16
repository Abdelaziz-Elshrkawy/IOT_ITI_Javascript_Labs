// import createUserDiv from "./userDiv"

const usersBnt = document.getElementById('users')
const idDiv = document.getElementById('idDiv')
const dataDiv = document.getElementById('dataDiv')

usersBnt.onclick = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(async (obj) => {
            let data = await obj.json()
            console.log(data)
            const contDiv = document.createElement('div')
            data.forEach(e => {
                contDiv.innerHTML += createUserDiv(e);
            });
            console.log(contDiv)
            dataDiv.innerHTML = null
            dataDiv.appendChild(contDiv)
        }).catch((e) => {
            console.log(e)
        })
}

idDiv.querySelectorAll('button').forEach(e => {
    e.onclick = (btn) => {
        btn.preventDefault()
        const contDiv = document.createElement('div');
        fetch(`https://jsonplaceholder.typicode.com/users/${e.id.split('-')[1]}`).then(async data => {
            let user = await data.json()
            contDiv.innerHTML = createUserDiv(user);
        })
        dataDiv.innerHTML = null
        dataDiv.appendChild(contDiv)
        console.log(e.id.split('-')[1])
    }
})


function createUserDiv(user) {
    const nameP = document.createElement('p');
    const usernameP = document.createElement('p');
    const emailP = document.createElement('p');
    const addressP = document.createElement('p');
    const phoneP = document.createElement('p');
    const websiteP = document.createElement('p');
    const companyP = document.createElement('p');
    const borderDiv = document.createElement('div');
    const userDiv = document.createElement('div')

    userDiv.style.textAlign = 'center'
    userDiv.style.marginTop = '150px'
    borderDiv.style.borderBottom = '2px solid #000'
    borderDiv.style.width = '60%'
    borderDiv.style.margin = 'auto'
    userDiv.id = 'userDiv'
    nameP.textContent = `name: ${user.name}`
    usernameP.textContent = `username: ${user.username}`
    emailP.textContent = `email: ${user.email}`
    addressP.textContent =
        `address: ${user.address.zipcode}, ${user.address.street}, ${user.address.city}, ${user.address.suite}`
    phoneP.textContent = `phone: ${user.phone}`
    websiteP.innerHTML = `website: <a href="https://www.${user.website}"> ${user.website} </a>`
    companyP.innerHTML = `<b>Company name:</b> ${user.company.name}<br><b>catchPhrase:</b> ${user.company.catchPhrase}<br><b>bs:</b> ${user.company.bs}`
    userDiv.append(nameP, usernameP, emailP, addressP, phoneP, websiteP, companyP, borderDiv)

    return userDiv.outerHTML
}
