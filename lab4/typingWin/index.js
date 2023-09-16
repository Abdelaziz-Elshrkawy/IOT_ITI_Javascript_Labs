const btn = document.getElementById('btn')
const message = document.getElementById('message')
let message_txt
message.onchange = (e) => {
    console.log(e.target.value)
    message_txt = e.target.value
}
btn.onclick = () => {
    var messageWin = window.open('', 'Message', 'width=400,height=400')
    var counter = 0
    var interval = setInterval(() => {
        console.log(counter)
        if (counter == message_txt.length-1) {
            clearInterval(interval)
            setTimeout(() => {
                messageWin.close()
            },1000)
        }
        messageWin.document.write(message_txt[counter])
        counter++
    }, 200);
}

