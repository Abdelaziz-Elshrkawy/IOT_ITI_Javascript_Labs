import { rootDiv } from "../index.js";

export default function UpBtn() {
    const upBtn = document.createElement('span');
    upBtn.id = 'up-btn'
    upBtn.textContent = '^'
    upBtn.style.display = 'none'
    upBtn.style.cursor = 'pointer'
    upBtn.title = 'Go Up'
    upBtn.onclick = () => {
        document.body.scrollIntoView({ behavior: 'smooth' })
        document.body.scrollTop = 0;

    }
    window.onscroll = () => {
        const rootDivRect = rootDiv.getBoundingClientRect()
        if (rootDivRect.top < -400) {
            upBtn.style.display = 'inline'
        } else {
            upBtn.style.display = 'none'
        }
    }
    document.body.appendChild(upBtn)
}