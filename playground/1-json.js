const fs = require('fs');

// const book = {
//     title: 'The Pilgrimage',
//     author: 'Paulo Cohelo'
// }

// const bookJSON = JSON.stringify(book); // take an object and convert to string

// console.log(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);


// const dataBuffer = fs.readFileSync('1-json.json'); // data stored is not string
// // actually a buffer to represent a binary data in nodejs so calling it buffer.
// // console.log(dataBuffer); /// outputs binary data nodejs call it buffer
// const dataJSON = dataBuffer.toString();

// const data =JSON.parse(dataJSON);

// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data =  JSON.parse(dataJSON);

data[1].name = 'Bishal Gautam';
data[1].age = 25;

const dataJSON2 = JSON.stringify(data);

fs.writeFileSync('1-json.json', dataJSON2);