var redP = document.getElementById("redP")
var yellowP = document.getElementById("yellowP")
var greenP = document.getElementById("greenP")
var input = document.getElementById("traffic")

var numValue = 1;
setInterval(() => {
    if (numValue == 1) {
        redP.style.backgroundColor = 'red'
        redP.children[0].style.display = 'inline'
    } else {
        redP.style.backgroundColor = '#7f7f7f'
        redP.children[0].style.display = 'none'
    }
    if (numValue == 2) {
        yellowP.style.backgroundColor = 'yellow'
        yellowP.children[0].style.display = 'inline'
    } else {
        yellowP.style.backgroundColor = '#7f7f7f'
        yellowP.children[0].style.display = 'none'
    }
    if (numValue == 3) {
        greenP.style.backgroundColor = 'green'
        greenP.children[0].style.display = 'inline'
    } else {
        greenP.style.backgroundColor = '#7f7f7f'
        greenP.children[0].style.display = 'none'
    }
    numValue++
    if (numValue > 3) {
        numValue = 1
    }
}, 1000);

