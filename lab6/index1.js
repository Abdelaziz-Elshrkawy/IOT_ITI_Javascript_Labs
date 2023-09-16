// 1- swap
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log('x:', x, ' y:', y);

// 2- rest operator

const maxMin = (...arg) => {
    let max = Math.max(...arg)
    let min = Math.min(...arg)
    return {
        max,
        min
    }
}

console.log(maxMin(0, 1, 2, 5))

// 3- array api
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango']
// a-
const checkArr = fruits.every((e) => {
    return typeof e === 'string'
})
console.log(checkArr)
// b-
const filterArr = fruits.some((e) => {
    return e[0] === 'a'
})
console.log(filterArr)
// c-
const filterArrC = fruits.filter((e) => {
    return e[0] === 'b' || e[0] === 's'
})
console.log(filterArrC)
// d-
const arrMap = fruits.map((e) => {
    return `I Don't Like ${e}`
})
// e-
const arrForEach = fruits.forEach((e) => {
    console.log(e)
})