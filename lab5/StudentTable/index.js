const btn = document.getElementById('submit')
const _name = document.getElementById('name')
const age = document.getElementById('age')
const nameRequireError = document.getElementById('nameRequireError')
const nameLengthError = document.getElementById('nameLengthError')
const ageRequireError = document.getElementById('ageRequireError')
const ageLengthError = document.getElementById('ageLengthError')
const removeBtn = document.getElementsByClassName('removeBtn')
let rowsNumber = 1


// constructor function
const studentConstructor = (name, age) => {
    this.name = name
    this.age=age
}

// insure that the name is characters only
_name.oninput = (e) => {
    if (!isNaN(Number(e.target.value))) {
        e.target.value = ''
    } else if (e.target.value.length > 2) {
        e.target.value.slice(2)
    }
}

//insure that age is number only
age.oninput = (e) => {
    if (isNaN(Number(e.target.value))) {
        e.target.value = ''
    } else if (e.target.value.length > 2) {
        e.target.value.slice(2)
    }
}


btn.addEventListener('click', (e) => {
    e.preventDefault()
    const _name = document.getElementById('name')
    const age = document.getElementById('age')
    const data = new InputValidationConstructor(_name.value, age.value)
    const tbody = document.querySelector('tbody')
    const checker = []

    if (data.name == 0) {
        nameLengthError.style.visibility = 'hidden'
        nameRequireError.style.visibility = 'visible'
        checker[0] = false
    } else if (data.name == 'length') {
        nameLengthError.style.visibility = 'visible'
        nameRequireError.style.visibility = 'hidden'
        checker[0] = false
    } else {
        nameLengthError.style.visibility = 'hidden'
        nameRequireError.style.visibility = 'hidden'
        checker[0] = true
    }

    if (data.age == 0) {
        ageLengthError.style.visibility = 'hidden'
        ageRequireError.style.visibility = 'visible'
        checker[1] = false
    } else if (data.age == 'limit') {
        ageLengthError.style.visibility = 'visible'
        ageRequireError.style.visibility = 'hidden'
        checker[1] = false
    } else {
        ageLengthError.style.visibility = 'hidden'
        ageRequireError.style.visibility = 'hidden'
        checker[1] = true
    }
    console.log(checker)
    if (checker[0] == true && checker[1] == true) {
        addStudent(tbody, data.name, data.age)
        _name.value = ''
        age.value = ''
        rowsNumber++
    }
})



const inputValidation = (_name, age) => {
    let data = {
        name,
        age
    };
    if (_name.value.length == 0) {
        data.name = 0
    } else if (_name.value.length < 3) {
        data.name = 'length'
    } else {
        data.name = _name.value
    }
    if (age.value.length == 0) {
        data.age = 0
    } else if (age.value < 18) {
        data.age = 'limit'
    } else {
        data.age = age.value
    }
    console.log(data)
    return data
}
const inputValidationConst = (_name, age) => {
    let data = new InputValidationConstructor()
    if (_name.value.length == 0) {
        data.name = 0
    } else if (_name.value.length < 3) {
        data.name = 'length'
    } else {
        data.name = _name.value
    }
    if (age.value.length == 0) {
        data.age = 0
    } else if (age.value < 18) {
        data.age = 'limit'
    } else {
        data.age = age.value
    }
    console.log(data)
    return data
}
function InputValidationConstructor  (name, age)  {
    this.name = name
    this.age = age
}

const addStudent = (parent, name, age) => {
    const tr = document.createElement('tr')
    const idTd = document.createElement('td')
    const nameTd = document.createElement('td')
    const ageTd = document.createElement('td')
    const removeTd = document.createElement('td')
    const removeBtn = document.createElement('button')
    idTd.textContent = rowsNumber
    idTd.className = 'id'
    nameTd.textContent = name
    ageTd.textContent = age
    removeBtn.textContent = 'Remove'
    removeTd.appendChild(removeBtn)
    tr.append(idTd, nameTd, ageTd, removeTd)
    parent.appendChild(tr)

    //remove student
    removeBtn.onclick = (e) => {
        const row = e.target.closest('tr')
        row.parentNode.removeChild(row)
        //calling the container div by it's id directly
        const currentRows = tableDiv.querySelectorAll('tr')
        for (let i = 1; i < currentRows.length; i++) {
            currentRows[i].querySelector('.id').textContent = i
        }
        rowsNumber--
        console.log(currentRows)
    }
}



