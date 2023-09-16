var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var gender = document.querySelectorAll('input[type="radio"]');
var sports = document.querySelectorAll('input[type="checkbox"]');
var country = document.getElementById('country-select')
var submit = document.getElementById('submit')
var errorName = document.getElementById('errorName')
var errorEmail = document.getElementById('errorEmail')
var errorPassword = document.getElementById('errorPassword')
var errorSports = document.getElementById('errorSports')
var errorCountry = document.getElementById('errorCountry')
var done = document.getElementById('done')
var errorSportsZero = document.getElementById('errorSportsZero')
var errorGenderZero = document.getElementById('errorGenderZero')
var validInputsCheck = []
var checkboxAndRadio = document.querySelectorAll('input[type="radio"],input[type="checkbox"]');
var input = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


submit.onclick = (e) => {
    e.preventDefault()
    inputValidation()
    if (
        validInputsCheck[0] == true &&
        validInputsCheck[1] == true &&
        validInputsCheck[2] == true &&
        validInputsCheck[3] == true &&
        validInputsCheck[4] == true &&
        validInputsCheck[5] == true
    ) {
        clearInputs()
        done.className = 'error'
        setTimeout(() => {
            done.className = 'hidden'
        }, 2000);
    }
}


var inputCheck = (inputElement, errorElement, targetLength, index) => {
    if (inputElement.value.length < targetLength) {
        errorElement.className = 'error'
        validInputsCheck[index] = false
    } else {
        errorElement.className = 'hidden'
        validInputsCheck[index] = true
    }
}

var clearInputs = () => {
    input.forEach((e) => {
        e.value = ''
    })
    checkboxAndRadio.forEach((e) => {
        e.checked = false
    })
    checkBoxChecked = 0

    country.value = country.options[0].value
}

const inputValidation = () => {
    //name
    inputCheck(nameInput, errorName, 8, 0)
    //password
    inputCheck(passwordInput, errorPassword, 12, 2)
    //email
    if (!emailRegex.test(emailInput.value)) {
        errorEmail.className = 'error'
        validInputsCheck[1] = false
    } else {
        errorEmail.className = 'hidden'
        validInputsCheck[1] = true
    }
    //gender
    let checkChecked = 0
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            checkChecked++
        }
    }
    if (checkChecked === 0) {
        errorGenderZero.className = 'error'
        validInputsCheck[3] = false
    } else {
        errorGenderZero.className = 'hidden'
        validInputsCheck[3] = true
    }
    //sports
    checkChecked = 0
    for (let i = 0; i < sports.length; i++) {
        if (sports[i].checked) {
            checkChecked++
        }
    }
    if (checkChecked === 0) {
        errorSportsZero.className = 'error'
        validInputsCheck[4] = false
    } else {
        errorSportsZero.className = 'hidden'
        validInputsCheck[4] = true
    }
    //country    
    if (country.value == '') {
        errorCountry.className = 'error'
        validInputsCheck[5] = false
    } else {
        errorCountry.className = 'hidden'
        validInputsCheck[5] = true
    }
}

gender.forEach((e) => {
    e.onclick = (event) => {
        console.log(event.target.checked)
    }
})

var checkBoxChecked = 0
sports.forEach((e) => {
    e.onchange = (element) => {
        if (element.target.checked) {
            checkBoxChecked++
        } else {
            checkBoxChecked--
        }
        if (checkBoxChecked > 2) {
            element.target.checked = false
            checkBoxChecked--
            errorSports.className = 'error'
            setTimeout(() => {
                errorSports.className = 'hidden'
            }, 2000)
        } else {
            errorSportsZero.className = 'hidden'
        }
        console.log(checkBoxChecked)
    }
})







