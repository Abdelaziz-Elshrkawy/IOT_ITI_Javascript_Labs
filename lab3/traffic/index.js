var redP = document.getElementById("redP")
var yellowP = document.getElementById("yellowP")
var greenP = document.getElementById("greenP")
var input = document.getElementById("traffic")

input.addEventListener('input', (e) => {
    if (isNaN(Number(e.target.value)) || e.target.value > 3 || e.target.value < 1) {
        e.target.value = ''
    }
    var numValue = Number(e.target.value)
    if (numValue == 1) {
        redP.style.backgroundColor = 'red'
    } else {
        redP.style.backgroundColor = '#7f7f7f'
    }
    if (numValue == 2) {
        yellowP.style.backgroundColor = 'yellow'
    } else {
        yellowP.style.backgroundColor = '#7f7f7f'
    }
    if (numValue == 3) {
        greenP.style.backgroundColor = 'green'
    } else {
        greenP.style.backgroundColor = '#7f7f7f'
    }
})