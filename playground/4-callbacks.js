// setTimeout(()=>{
//     console.log('Two seconds is Up!')
// }, 2000)

// const names = ['bishal', 'manish', 'ram', 'shyam']
// const shortNames = names.filter((name) => {
//     return name.length < 4
// })
// console.log(shortNames)

// const geocode = (address, callback) => {
//     setTimeout(() =>{
//         const data = {
//             latitude: 36, 
//             longitude: 86
//         }
//         callback(data)
//     }, 2000)
// }
// // IF OUR FUNCTION IS SYNCHRONOUS THEN WE ARE ABLE TO USE RETURN.
// // IF WE ARE TO USE ASYNCHRONOUS THEN WE NEED TO CALL CALLBACK PATTERN
// geocode('philadelphia', (data) =>{
//     console.log(data)
// })


// IN ASYNCHRONOUS PROGRAMMING CALLBACK FUNCTION IS REQUIRED!!!

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a+b
        console.log(sum)
        callback(sum)
    }, 2000)
}



add(1, 4, (sum) => {
    console.log(`the sum is : ${sum}`)
})