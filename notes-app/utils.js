
console.log(__filename);

const add = (a, b) =>{
    return a+b; 
}


// All files have their own scoop even though they are loaded.
// We need to export all of the stuff, which is going to be used by other file system because of the scoop.

// module.exports = name; // defining all the things that will be shared to another file-system. 
                        // when ever we assign using module.exports that is available as the return value of the require in the importing module.

module.exports = add;

