export default async function   getData () {
    let data = await fetch('https://dummyjson.com/products')
    return data
}