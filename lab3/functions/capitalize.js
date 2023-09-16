var capitalize = (str = '') => {
    var processedStr = str.split('')
    for (let i = 0; i < str.length - 1; i++) {
        if (i == 0) {
            processedStr[i] = str[i].toUpperCase()
        } else if (str[i] == ' ') {
            processedStr[i] = str[i]
            processedStr[i + 1] = str[i + 1].toUpperCase()
            i++
        } else {
            processedStr[i] = str[i]
        }
    }
    processedStr = processedStr.join('')
    console.log(processedStr)
}


var capitalize1 = (str = '') => {
    var wordArr = str.split(' ')
    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = `${wordArr[i][0].toUpperCase()}${wordArr[i].slice(1)}`
    }
    wordArr = wordArr.join(' ')
    console.log(wordArr)
}


capitalize('ahmed ali mohamed')
capitalize1('ahmed ali mohamed')