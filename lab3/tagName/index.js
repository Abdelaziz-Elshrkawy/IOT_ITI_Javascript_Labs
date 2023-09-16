var btn = document.getElementById('btn')
var tag = document.getElementById('tag')
var _class = document.getElementById('class')
var id = document.getElementById('id')
var _name = document.getElementById('name')
var result = document.getElementById('result')

btn.addEventListener('click', (e) => {

    result.innerHTML = `
    number of tag ${tag.value} is ${document.getElementsByTagName(tag.value).length ? document.getElementsByTagName(tag.value).length : 0}
    <br>
    number of class ${_class.value} is ${document.getElementsByClassName(_class.value).length ? document.getElementsByClassName(_class.value).length : 0}
    <br>
    number of id ${id.value} is ${document.querySelectorAll(id.value).length ? document.querySelectorAll(id.value).length : 0}
    <br>
    number of name ${_name.value} is ${document.getElementsByName(_name.value).length ? document.getElementsByName(_name.value).length : 0}
    `
    console.log(document.querySelectorAll(id.value))
})

