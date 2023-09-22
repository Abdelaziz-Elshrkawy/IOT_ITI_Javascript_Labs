export default async function contactUs() {
    const div = document.createElement('div')
    div.id = 'contactUs-div'
    div.textContent = 'contactUs'
    return {
        html: div.outerHTML,
        events: function () {
            console.log('contactUs')
        }
    }
}