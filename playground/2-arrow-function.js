//


const square = x => x*x;

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for event '+this.name);
//     }
// } // arrow function doesnot have this binding.



console.log(square(9));


// const event = {
//     name: "Birthday Party",
//     printGuestList: () => {
//         console.log('Guest list for event '+ this.name); // o/p undefined as arrow function doesnot give this binding to the obhect
//     }
// }

// arrow function don't have their this value, they get the this value from the context where they are defined
const event = {
    name: "Birthday Party",
    guestList: ['andrew', 'ram', 'sita'],
    printGuestList(){
        const that = this;
        console.log('Guest list for event '+ this.name ); // o/p undefined as arrow function doesnot give this binding to the obhect
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending '+ that.name);
            
        })
    }
}



event.printGuestList();