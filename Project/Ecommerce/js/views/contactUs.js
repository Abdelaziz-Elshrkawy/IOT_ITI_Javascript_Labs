export default async function contactUs() {
    const contactUsDiv = document.createElement('div')
    const contactUsLottie = document.createElement('div')
    const formDiv = document.createElement('div')
    const form = document.createElement('form')
    const nameDiv = document.createElement('div')
    const emailDiv = document.createElement('div')
    const messageDiv = document.createElement('div')
    const nameInput = document.createElement('input')
    const nameError = document.createElement('p')
    const emailInput = document.createElement('input')
    const emailError = document.createElement('p')
    const messageInput = document.createElement('textarea')
    const messageError = document.createElement('p')
    const formSubmitBtn = document.createElement('button')
    const successMessage = document.createElement('p')
    const doneDiv = document.createElement('div')
    contactUsDiv.id = 'contactUs-div'
    contactUsLottie.id = 'contactUs-lottie-div'
    formDiv.id = 'form-div'
    nameDiv.id = 'form-name-div'
    emailDiv.id = 'form-email-div'
    messageDiv.id = 'form-message-div'
    formSubmitBtn.id = 'form-submit-btn'
    nameError.id = 'form-name-error'
    emailError.id = 'form-email-error'
    messageError.id = 'form-message-error'
    successMessage.id = 'success-message'
    doneDiv.id = 'done-div'
    
    nameInput.type = 'text'
    nameInput.placeholder = 'Your Name'
    emailInput.type = 'text'
    emailInput.placeholder = 'Your Email'
    messageInput.placeholder = 'Type Your Message here......'
    nameInput.minLength = 8

    nameError.textContent = '>>'
    nameError.style.opacity = 0
    emailError.textContent = '>>'
    emailError.style.opacity = 0
    messageError.textContent = '>>'
    messageError.style.opacity = 0
    formSubmitBtn.textContent = 'Submit'
    successMessage.textContent = 'we got your message, Thank you for your time'
    successMessage.style.opacity = 0
    doneDiv.style.opacity = 0

    nameDiv.appendChild(nameInput)
    emailDiv.appendChild(emailInput)
    messageDiv.appendChild(messageInput)
    form.append(nameDiv, nameError, emailDiv, emailError, messageDiv, messageError, formSubmitBtn, successMessage, doneDiv)
    formDiv.appendChild(form)
    contactUsDiv.append(contactUsLottie, formDiv)

    return {
        html: contactUsDiv.outerHTML,
        events: function () {
            bodymovin.loadAnimation({
                container: document.getElementById('contactUs-lottie-div'),
                render: 'svg',
                loop: true,
                autoplay: true,
                path: '../../assets/lottie/contactUs.json'
            })
            const doneAnimation = bodymovin.loadAnimation({
                container: document.getElementById('done-div'),
                render: 'svg',
                loop: false,
                autoplay: false,
                path: '../../assets/lottie/done.json'
            })
            const confirmArr = [false, false, false]
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            const name = document.querySelector('#form-name-div input')
            const nameError = document.getElementById('form-name-error')
            const email = document.querySelector('#form-email-div input')
            const emailError = document.getElementById('form-email-error')
            const message = document.querySelector('#form-message-div textarea')
            const messageError = document.getElementById('form-message-error')
            const successMessage = document.getElementById('success-message')
            const doneDiv = document.getElementById('done-div')
            document.getElementById('form-submit-btn').addEventListener('click', (e) => {
                e.preventDefault()
                if (name.value.length == 0) {
                    confirmArr[0] = false
                    nameError.textContent = 'name is required'
                    nameError.style.opacity = 1
                    setTimeout(() => {
                        nameError.style.opacity = 0
                    }, 2000)
                } else if (name.value.length < 8) {
                    confirmArr[0] = false
                    nameError.textContent = 'name must me equal or more than 8 characters'
                    nameError.style.opacity = 1
                    setTimeout(() => {
                        nameError.style.opacity = 0
                    }, 2000)
                } else {
                    confirmArr[0] = true
                }

                if (email.value.length == 0) {
                    confirmArr[1] = false
                    emailError.textContent = 'email is required'
                    emailError.style.opacity = 1
                    setTimeout(() => {
                        emailError.style.opacity = 0
                    }, 2000)
                } else if (!emailRegex.test(email.value)) {
                    confirmArr[1] = false
                    emailError.textContent = 'insert a valid email'
                    emailError.style.opacity = 1
                    setTimeout(() => {
                        emailError.style.opacity = 0
                    }, 2000)
                } else {
                    confirmArr[1] = true
                }

                if (message.value.length == 0) {
                    messageError.textContent = 'your message is valuable for us'
                    messageError.style.opacity = 1
                    confirmArr[2] = false
                    setTimeout(() => {
                        messageError.style.opacity = 0
                    }, 2000)
                } else if (message.value.length < 50) {
                    confirmArr[2] = false
                    messageError.textContent = 'message must be more than 50 character'
                    messageError.style.opacity = 1
                    setTimeout(() => {
                        messageError.style.opacity = 0
                    }, 2000)
                } else {
                    confirmArr[2] = true
                }
                if (
                    confirmArr[0] &&
                    confirmArr[1] &&
                    confirmArr[2]
                ) {
                    name.value = ''
                    email.value = ''
                    message.value = ''
                    successMessage.style.opacity = 1
                    doneDiv.style.opacity = 1
                    doneAnimation.play()
                    setTimeout(() => {
                        successMessage.style.opacity = 0
                        doneDiv.style.opacity = 0
                        doneAnimation.stop()
                    }, 2000);
                }

                console.log(confirmArr)
            })
        }
    }
}