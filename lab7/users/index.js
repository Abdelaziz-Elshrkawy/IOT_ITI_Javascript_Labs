import createUserDiv from "./userDiv.js"

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

