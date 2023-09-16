const contDiv = document.getElementById('cont');
const imgArr = ['./imgs/marble1.jpg', './imgs/marble2.jpg', './imgs/marble3.jpg']
const imgs = contDiv.children
console.log(imgs[0].src)

var counter = 0
var interval;
var play = () => {
    interval = setInterval(() => {
        if (counter == 6) {
            counter = 0
        }
        if (counter == 0) {
            imgs[counter].src = imgArr[2]
            imgs[imgs.length - 1].src = imgArr[0]
        } else {
            imgs[counter - 1].src = imgArr[0]
            imgs[counter].src = imgArr[2]
        }
        counter++
    }, 400)

}

play()

contDiv.onmouseover = () => {
    clearInterval(interval)
}

contDiv.onmouseleave = () => {
    play()
}


