// 3-

/* var input;
var arr =[];
var count = 1;
do {
    input = prompt(`insert the ${count == 1 ? 'first' : count == 2 ? 'second' : 'third'}`)
    input = Number(input)
    arr.push(input);
    count++
} while (count <= 3)

document.writeln(`
sum of the values is ${arr[0] + arr[1] + arr[2]}
<br>
multiplication of the values is ${arr[0] * arr[1] * arr[2]}
<br>
division of the values is ${arr[0] / arr[1] / arr[2]}
`) */

// 3.2
/* var input;
var arr = [];
var count = 1;
var sorted;
do {
    input = prompt(`insert the ${count == 1 ? 'first' : count == 2 ? 'second' : count == 3 ? 'third' : count == 4 ? 'forth' : 'fifth'}`)
    input = Number(input)
    arr.push(input);
    count++
} while (count <= 5)


document.writeln(`you have entered the values`)
arr.forEach((e) => {
    document.writeln(` ${e} `)
})


document.writeln(`<br>after ascending sort`)
sorted = arr.sort((a, b) => {
    return a - b;
})
sorted.forEach(e => {
    document.writeln(` ${e} `)
})


document.writeln(`<br>after descending sort`)
sorted = arr.sort((a, b) => {
    return b - a;
})
sorted.forEach(e => {
    document.writeln(` ${e} `)
}) */

// 4-
// *
var input;
do {
    input = prompt("insert the radius")
}while(isNaN(Number(input)))

alert(`the total area of the circle is ${( Math.PI * Math.pow(input,2)).toFixed(2)}`)
// *
do {
    input = prompt("insert the desired number for square root")
} while (isNaN(Number(input)))

alert(`the square root of ${input} is ${(Math.sqrt(input))}`)
// *
do {
    input = prompt("insert the angel to calculate the cos")
} while (isNaN(Number(input)))

alert(`cos(${input}) is ${(Math.cos(input* Math.PI/180).toFixed(0))}`) 

//Fizz Buzz
/* var input;
do {
    input = prompt("insert the desired number")
} while (isNaN(Number(input)))

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0)
    {
        return 'Fizz Buzz'    
    } else if (num % 5 == 0 && num % 3 != 0) {
        return 'Fizz'
    } else {
        return 'Buzz'
    }
}
alert(`the result is ${fizzBuzz(input)}`) */

// Who am i

/* 
function whoAmI(){
    var confirming = confirm('Can you fly?')
var value;
if (confirming) {
    confirming = confirm('Are you Wild ?')
    confirming ? value = 'Eagle' : value = 'Parrot'
} else {
    confirming = confirm('Do you Live under the sea?')
    if (confirming) {
        confirming = confirm('Are you Wild?')
        confirming ? value = 'Shark' : value = 'Dolphin'
    } else {
        confirming = confirm('Are you Wild?')
        confirming ? value = 'Lion' : value = 'Cat' 
    }
}

alert (`You are a ${value}`) 
}
whoAmI()
*/

// count char
/* function charRedundancy(str, letter) {
    var arr;
    str.split.array.forEach((e,i) => {
        if (e == letter) {
            arr.push(i)
        }
    });
    return arr
} */

