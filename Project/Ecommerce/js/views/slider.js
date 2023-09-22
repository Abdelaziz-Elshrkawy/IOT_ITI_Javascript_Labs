let interval

function Slider() {
    const arr = ['../../assets/imgs/1.png', '../../assets/imgs/2.png', '../../assets/imgs/3.png', '../../assets/imgs/4.jpg', '../../assets/imgs/5.gif','../../assets/imgs/6.png']
    const slideDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const prevDiv = document.createElement('div')
    const prevBtn = document.createElement('button')
    const nextDiv = document.createElement('div')
    const nextBtn = document.createElement('button')

    slideDiv.id = 'slide-div'
    imgDiv.id = 'img-div'
    nextDiv.id = 'next-btn'
    nextBtn.textContent = '>'
    prevDiv.id = 'prev-btn'
    prevBtn.textContent = '<'
    prevDiv.appendChild(prevBtn)
    nextDiv.appendChild(nextBtn)
    imgDiv.append(prevDiv, img, nextDiv)
    slideDiv.append(imgDiv)

    let counter = 0
    img.src = arr[0]
    const prevOnClick = () => {
        counter--
        if (counter < 0) {
            counter = arr.length - 1
        }
        document.querySelector('#img-div img').src = arr[counter]
    }

    const nextOnClick = () => {
        counter++
        if (counter > arr.length - 1) {
            counter = 0
        }
        document.querySelector('#img-div img').src = arr[counter]
    }


    return {
        html: slideDiv,
        events: function () {
            document.getElementById('prev-btn').addEventListener('click', prevOnClick)
            document.getElementById('next-btn').addEventListener('click', nextOnClick)
            document.querySelector('#img-div img').addEventListener('click', () => {
                document.getElementById('products-div').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
            interval = setInterval(() => {
                nextOnClick()
            }, 5000)
        }
    }
}

export {
    Slider,
    interval
}