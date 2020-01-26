// Object property shorthand

const name = 'bishal'
const userAge = 24

const user = {
    name, // can be written as name only as es6 features to define object property
    age:userAge,
    location: 'Kathmandu'
}

console.log(user)

// Object destructuring
///---- To access the object property as variable
const product = {
    label: 'Red note book',
    price: 3,
    sale: 'Not available',
    stock: 203
}

// const label = product.label
// const price = product.price

const {label, price:productPrice, rating = 5, sale = 'Sold'} = product // label = product.label
// default value while destructuring works if the property doesnot exists
console.log(label)
// console.log(price) // reference error now not defined
// console.log(rating) // undefined
console.log(rating)
console.log(productPrice)
console.log(product.rating)
console.log(sale)


const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('Order', product)