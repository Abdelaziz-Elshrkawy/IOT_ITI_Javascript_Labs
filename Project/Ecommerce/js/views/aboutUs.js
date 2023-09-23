import { animation } from "../animation/animation.js"

export default async function aboutUs() {
    const aboutUsDiv = document.createElement('div')
    aboutUsDiv.id = 'aboutUs-div'
    const div_1 = document.createElement('div')
    div_1.id = 'div-1'
    const div_2 = document.createElement('div')
    div_2.id = 'div-2'
    const div_3 = document.createElement('div')
    div_3.id = 'div-3'
    const div_4 = document.createElement('div')
    div_4.id = 'div-4'

    div_2.textContent = 'Hey there, We a bunch of Developers and Career changers whose looking for an opportunity to change there life'
    div_3.innerHTML = 'We aren\'t playing we are seeking for a better life, we have tensity we have passion and finally we have a <b>dream</b>'

    aboutUsDiv.append(div_1, div_2, div_3, div_4)
    return {
        html: aboutUsDiv.outerHTML,
        events: function () {
            console.log('aboutUs')
            setTimeout(console.log(document.getElementById('div-1')))

            // aboutUs animation
            bodymovin.loadAnimation({
                container: document.getElementById('div-1'),
                render: 'svg',
                loop: true,
                autoplay: true,
                path: '../../assets/lottie/about1.json'
            })
            bodymovin.loadAnimation({
                container: document.getElementById('div-4'),
                render: 'svg',
                loop: true,
                autoplay: true,
                path: '../../assets/lottie/about2.json'
            })
        }
    }
}