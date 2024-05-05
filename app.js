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

// const car = {
//     make: "Audio",
//     model: "e-tronGT",
//     year: 2024,
//     colors: ["black", "white", "mintGreen"],
//     hybrid: true,
//     drive: function(){
//         console.log ("gadi chal rahi h")
//     },
//     stop: function(){
//         console.log ("gadi ruk gayi h")
//     }
// }
//  console.log (car.make)
//  console.log (car.colors[1])
//  console.log (car.drive())
//  console.log (car.stop())

// slide # 35

//  const person1 = {
//     name: "sameer",
//     age : 24,
//     status:"resident"
//  }

//  const person2 = {
//     name: "wasiq",
//     age : 18,
//     status:"tourist"
//  }


//  if(person1.age > 18 && person1.status =="resident"){
//     console.log("you are eligible for CNIC")
//  }else {
//     console.log("you are not eligible for CNIC")
//  }

//  if(person2.age > 18 && person2.status =="resident"){
//     console.log("you are eligible for CNIC")
//  }else {
//     console.log("you are not eligible for CNIC")
//  }


//  Date Section


// var todayDate = new Date ()

// console .log (todayDate)

// todayDate.setFullYear(2000)

// console .log (todayDate)
// todayDate.setMonth(5)
// console .log (todayDate)

// todayDate.setDate(28)
// console .log (todayDate)

// console.log (todayDate.getDay())
// console.log (todayDate.getDate())
// console.log (todayDate.getFullYear())
// console.log (todayDate.getMonth())
// console.log (todayDate.getHours())
// console.log (todayDate.getMinutes())
// console.log (todayDate.getSeconds())
// console.log (todayDate.getMilliseconds())

// var months =["jan" ,"feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

// console.log (months[todayDate.getMonth()])

// var days = ["sun","mon","tue", "thur", "Fri", "Sat"]
// console.log (days[todayDate.getDay()])

// console .log (todayDate)



// For loop


// for (let i=10; i<=15; i++){
//    console.log(i)
// }

// for (var j=1; j>=10; j++){
//    for (var j=1; j>=10; j++){
//       document.write(i)
//    }
//    document.write (2)
// }


// switch Statemnet

// let userName = prompt ("What is your userName")
// userName = userName.toLowerCase()

// switch (userName){
//    case "salman":
//       alert("you have acces for this website")
//       break;
//    case "zaid":
//       alert("you have acces for this website")
//       break;
//       case "sameer":
//       alert("you have acces for this website")
//       break;
//       default:
//          alert("you have not acces for this website")
// }



// while loop

// let amount = 0

// while (amount < 5) {
//    console.log(`I have ` + amount + ` dollars`)
//    amount++
// }


// const person = {
//    name : "peter",
//    greeting (){
//       console.log ("Hey, I'm Peter");
//    },
// };

// console.log (person);
// console.log (person.name);
// person.greeting();


// let student1 = {
//    name:"Sameer",
//    lastName:"Khan",
//    address:"Baldia Town",
//    age: 24,
// }

// let student2= {...student1, name:"Zaid", age:19}
// let student3= {...student1, name:"Salman", age:30}
// let student4= {...student1, name:"Hasnian", address:"Nazimabad", age:25}

// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)


let name = 'bobo'

function calculate(){
   const name = 'sameer'
   const age = 24
   becomesGlobal = 'globar variable'
}

calculate()

