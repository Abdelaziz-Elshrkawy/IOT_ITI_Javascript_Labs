const createUserDiv = (user) => {
    const nameP = document.createElement('p');
    const usernameP = document.createElement('p');
    const emailP = document.createElement('p');
    const addressP = document.createElement('p');
    const phoneP = document.createElement('p');
    const websiteP = document.createElement('p');
    const companyP = document.createElement('p');
    const userDiv = document.createElement('div')

    userDiv.style.textAlign = 'center'
    userDiv.style.marginTop = '150px'
    userDiv.id = 'userDiv'
    console.log(user.name,user.username)
    nameP.textContent = user.name
    usernameP.textContent = user.username
    emailP.textContent = user.email
    addressP.textContent =
        `${user.address.zipcode}, ${user.address.street}, ${user.address.city}, ${user.address.suite}`
    phoneP.textContent = user.phone
    websiteP.textContent = user.website
    companyP.innerHTML = `<b>Company name:</b> ${user.company.name} <b>catchPhrase:</b> ${user.company.catchPhrase}  <b>bs:</b> ${user.company.bs}`
    
    userDiv.append(nameP, usernameP, emailP, addressP, phoneP, websiteP, companyP)

    return userDiv.outerHTML
}

export default createUserDiv