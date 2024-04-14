// var shelf = ["pencils", "pens", "eraser", "ruler", "markers"]

// console.log(shelf)

// shelf.push("Colours")

// console.log(shelf)

// shelf.pop()
// console.log(shelf)

// shelf.unshift("Papers")
// console.log(shelf)

// shelf.shift()
// console.log(shelf)

// shelf.shift()
// console.log(shelf)

// var order1; 
// var order2;
// var order3;

// // function greet (name){
// //     alert(`hello there `+ name)
// // }

// // greet("sameer")

// var shelf1 = "biryani"
// let shelf2 = "karahi"
// const shelf3 = "kheer"


// alert(shelf1)
// console.log(shelf2)
// alert(shelf3)

// var shelf1 = "Pulao"

// alert(shelf1)

// shelf1= "pulao"
// alert(shelf1)

// shelf2 = "Qorma"
// console.log (shelf2)


// const animals = ["bandar", "hathi", "gadha","ghora"]
// console.log(animals)

// animals.push("lion")
// console.log(animals)

// animals.shift()
// console.log(animals)

// animals.unshift("cheetah")
// console.log(animals)

// animals.splice(1,2, "dog", "cat")
// console.log(animals)

// animals.splice(3,1)
// console.log(animals)

// animals.splice(3,0, "cow")
// console.log(animals)

// const petAnimals = animals.slice(1,4)
// document.write(petAnimals)
// document.write(animals)

// console.log(petAnimals)
// console.log(animals)

// restaurant prompt("apko kiya khana h?")
// alert restaurant

// const restaurant = ["karahi", "biryani", "qorma"]


// for (var i = 0; i < restaurant.length; i++){
//     alert(restaurant)
// }

// slide # 27

const car = {
    make: "Audio",
    model: "e-tronGT",
    year: 2024,
    colors: ["black", "white", "mintGreen"],
    hybrid: true,
    drive: function(){
        console.log ("gadi chal rahi h")
    },
    stop: function(){
        console.log ("gadi ruk gayi h")
    }
}
 console.log (car.make)
 console.log (car.colors[1])
 console.log (car.drive())
 console.log (car.stop())

// slide # 35

 const person1 = {
    name: "sameer",
    age : 24,
    status:"resident"
 }

 const person2 = {
    name: "wasiq",
    age : 18,
    status:"tourist"
 }


 if(person1.age > 18 && person1.status =="resident"){
    console.log("you are eligible for CNIC")
 }else {
    console.log("you are not eligible for CNIC")
 }

 if(person2.age > 18 && person2.status =="resident"){
    console.log("you are eligible for CNIC")
 }else {
    console.log("you are not eligible for CNIC")
 }


//  Date Section


var todayDate = new Date ()

console .log (todayDate)

todayDate.setFullYear(2000)

console .log (todayDate)
todayDate.setMonth(5)
console .log (todayDate)

todayDate.setDate(28)
console .log (todayDate)

console.log (todayDate.getDay())
console.log (todayDate.getDate())
console.log (todayDate.getFullYear())
console.log (todayDate.getMonth())
console.log (todayDate.getHours())
console.log (todayDate.getMinutes())
console.log (todayDate.getSeconds())
console.log (todayDate.getMilliseconds())

var months =["jan" ,"feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

console.log (months[todayDate.getMonth()])

var days = ["sun","mon","tue", "thur", "Fri", "Sat"]
console.log (days[todayDate.getDay()])

console .log (todayDate)