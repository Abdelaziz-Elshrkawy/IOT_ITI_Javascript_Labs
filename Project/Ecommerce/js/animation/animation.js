export default function animation() {
    const logo = bodymovin.loadAnimation({
        container: document.getElementById('logo-span'),
        render: 'svg',
        loop: true,
        autoplay: true,
        path: '../../assets/lottie/animation_lmmf31df.json'
    })
    logo.setSpeed(0.7)

    const cartSpan = document.getElementById('cart-span')
    const cart = bodymovin.loadAnimation({
        container: cartSpan,
        render: 'svg',
        loop: false,
        autoplay: false,
        path: '../../assets/lottie/animation_lmmf2sbc.json'
    })
    cartSpan.onmouseover = () => {
        cart.play()
    }
    cartSpan.onmouseleave = () => {
        cart.stop()
    }
    
    const loginSpan = document.getElementById('login-span')
    const login = bodymovin.loadAnimation({
        container: loginSpan,
        render: 'svg',
        loop: false,
        autoplay: false,
        path: '../../assets/lottie/login.json'
    })
    loginSpan.onmouseover = () => {
        login.play()
    }
    loginSpan.onmouseleave = () => {
        login.stop()
    }
    login.setSpeed(1.1)
}