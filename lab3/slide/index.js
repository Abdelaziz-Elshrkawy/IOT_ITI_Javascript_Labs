var imgArr = [
    'https://th.bing.com/th/id/OIP.7ng8jCJZOZ8YC5Pfq4y1fgHaE8?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.IadWjX7Z2rp2w7Td5k-LAwHaFA?pid=ImgDet&rs=1',
    'https://wallup.net/wp-content/uploads/2015/06/Goldish-cat-smiles.jpg',
    'https://www.fetchfind.com/blog/wp-content/uploads/2017/08/cat-2734999_1920-5-common-cat-sounds.jpg'
]

var img = document.getElementsByTagName('img')[0]
var counter = 0
img.src = imgArr[counter]
var prev = document.getElementById('prev')
var play = document.getElementById('paly')
var stop = document.getElementById('stop')
var next = document.getElementById('next')
var playStat = true
var nextFunc = () => {
    if (counter == imgArr.length - 1) {
        counter = 0
        img.src = imgArr[counter]
    } else {
        counter++
        img.src = imgArr[counter]
    }
}
prev.addEventListener('click', () => {
    if (counter == 0) {
        counter = imgArr.length - 1
        img.src = imgArr[counter]
    } else {
        counter--
        img.src = imgArr[counter] 
    }
})
next.addEventListener('click', nextFunc)
var interval;
play.addEventListener('click', () => {
    interval = setInterval(() => {
        nextFunc()
    }, 2000);
})

stop.addEventListener('click', () => {
    clearInterval(interval)
})

