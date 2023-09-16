var searchNumbers = (arr=[]) => {
    var sortedArr = arr.sort((a, b) => {
        return a-b
    })
    console.log(`the second smaller number is ${sortedArr[1]}\nand the second larger number is ${sortedArr[sortedArr.length-2]}`)
}

searchNumbers([5,2,3,4,1])