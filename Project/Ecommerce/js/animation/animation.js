
let logoAnimation
let cartAnimation
let loginAnimation
let loadAnimation

function animation() {
    logoAnimation = bodymovin.loadAnimation({
        container: document.getElementById('logo-span'),
        render: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/lottie/animation_lmmf31df.json'
    })
    logoAnimation.setSpeed(0.7)

    const cartSpan = document.getElementById('cart-span')
    cartAnimation = bodymovin.loadAnimation({
        container: cartSpan,
        render: 'svg',
        loop: false,
        autoplay: false,
        path: './assets/lottie/animation_lmtg23ys.json'
    })
    cartSpan.onmouseover = () => {
        cartAnimation.play()
    }
    cartSpan.onmouseleave = () => {
        cartAnimation.stop()
    }

    loadAnimation = bodymovin.loadAnimation({
        container: document.getElementById('load'),
        render: 'svg',
        loop: true,
        autoplay: true,
        path: '../../assets/lottie/animation_lmmf351c.json'
    })
}


export {
    animation,
    cartAnimation,
    loadAnimation,
    loginAnimation,
    logoAnimation
}