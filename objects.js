let carBio = {
    carName:"Rangerover",
    carType:"suv",
    carColor:"red",
    carPrice:"$1,000",
}
console.log(carBio)
console.log(carBio["carType"])

// when we use dot notation
// when we access things from objects property.
// when we use bracket notation.

let carInfo = "carName"
console.log(carBio[carInfo])

                              // Arrays//
let selectBooks = ["Rich dad Poor dad", "Think and grow rich","Invisible man"]
console.log(selectBooks)

                             // Access arrays by using index number
console.log(selectBooks[1])
                              // for in loop
for(let bookName in selectBooks){
    console.log(bookName)
    console.log(selectBooks[bookName])
    
}
                             // for of loop
for(let books of selectBooks){
    console.log(books)
}
                             // for loop
for(let i=0;i<selectBooks.length;i++){
    console.log(selectBooks[i])
}
                         // String conversion
let num = '123'
console.log(Number(num))
console.log(typeof(num))

let value = 12
let value1 = '12'
console.log(value>value1)

console.log([1]>null)

const course={
    lecture:10,
    section:3,
    title:"javascript",
    notes:{
        introduction:"Welcome to js course",
        type:"basics to advance",
    },
    enroll(){
        console.log('you are successfully enrolled')
    }
    }
    course.enroll()
    // objects are dynamic in nature and properties value can be change because objects are refernce datatype.
    course.price = 999

    // This keyword
    /* in an object method,this refers to the object
    Alone, this refers to the global object
    In an function, this refers to the global object
    In an function, in strict mode, this is undefined
    In an event, this refers to the element that receives the event.
    In an event, this refers to the element that received the event.
    Methods like call(), and bind(), and apply(), can refer this to any object. 
    */
   function createCourse(){
    const course = {
        lecture:10,
        section:3,
        title:"javascript",
        notes:{
            intro:"welcome to js code"
        },
        enroll(){
            console.log("hey viewers")
        }
    }
   }
                                             // Constructor function
   function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log("you are sucessfully enrolled");
    }
   }
   const course = new Course("javascript")
   course.enroll()

console.log(course.constructor)

// Objects are immutable in case of primitive datatypes.



const Course_1 = new function('title'){
    this.title = title,
    this.enroll = function(){
console.log("you are genius")
    }
}