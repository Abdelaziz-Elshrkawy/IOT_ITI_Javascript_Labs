// 1
// 1.1
// var text = prompt("Insert your message");

// for (var i = 1; i < 7; i++) {
//     document.writeln('<h' + i + '>' + text + '</h' + i + '>')
// }


// 1.2
// var number = 0;
// var sum = 0
// do {
//     var text = prompt("insert your number")
//     number = Number(text)
//     sum += number
// } while (number != 0 && sum < 100)

// document.writeln("the sum is: " + sum)

// -------------------------------

//     2
// 2.1
// var text = prompt("insert your text");
// var count = 0;
// text.split('').forEach((e) => {
//     if (e === 'e') {
//         count++
//     }
// })

// document.writeln(count)


// 2.2

// var caseOption = confirm('press ok to ignore cas sensitive if not press cancel')
// var textArr = caseOption ? prompt('insert the word').toLowerCase().split('')
//     :
//     prompt('insert the word').split('')
// textArr.join() == textArr.reverse().join() ?
//     document.writeln('this word is palindrome')
//     :
//     document.writeln('this word is not palindrome')

// 2.3 
var name;
var phoneNumber;
var mobileNumber;
var email;
var color;
var emailRegex = /^[a-zA-z]{3}@[0-9]{3}\.com$/
var date = new Date()

do {
    name = prompt('insert your name')
} while (!isNaN(Number(name)))

do {
    phoneNumber = prompt('insert your phone number')
    console.log(phoneNumber.length)
    console.log(isNaN(Number(phoneNumber)))
} while (isNaN(Number(phoneNumber)) || (phoneNumber.length != 8))

do {
    mobileNumber = prompt('insert your mobile number')
    console.log('third number ' + Number(mobileNumber.split('')[2]))
    console.log('len ' + mobileNumber.length)
    console.log('isnan ' + isNaN(Number(mobileNumber)))
    console.log((Number(mobileNumber.split('')[2]) != 0 && Number(mobileNumber.split('')[2]) != 1 && Number(mobileNumber.split('')[2]) != 2))
} while (
    isNaN(Number(mobileNumber))
    || mobileNumber.length != 11
    || (Number(mobileNumber.split('')[2]) != 0 && Number(mobileNumber.split('')[2]) != 1 && Number(mobileNumber.split('')[2]) != 2)
)

do {
    email = prompt('insert your email').trim()
    console.log('test ' + emailRegex.test(email))
    console.log(email)
} while (!emailRegex.test(email))

do {
    color = prompt('choose color for font as follow 1-red,2-blue,3-green')
} while (color > 3 && color <= 0)
console.log(color)
color == 1 ? color = 'red' : color == 2 ? color = 'blue' : color = 'green';
console.log(color)

document.writeln(
    `<span style="color:${color};">Welcome </span><span>${name}</span><br>` +
    `<span style="color:${color};"> Your Phone Number is </span><span>${phoneNumber}</span><br>` +
    `<span style="color:${color};"> Your Mobile Number is </span><span>${mobileNumber}</span><br>` +
    `<span style="color:${color};"> Your Email is </span><span>${email}</span><br>` +
    '<br><br><br><br><br><br><br><br><br><br><br><br>' +
    `<span style="color:${color};">today is </span><span>${date.toLocaleDateString('us-EN', {
        weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric'

    })}</span>`
)