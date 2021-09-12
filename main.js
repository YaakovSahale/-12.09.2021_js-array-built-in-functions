
// var cars = [
//     {
//         model: "toyota",
//         year: "2019",
//         price: 20000
//     },

//     {
//         model: "zejo",
//         year: "1999",
//         price: 25000
//     },

//     {
//         model: "colvo",
//         year: "2015",
//         price: 80000
//     },

//     {
//         model: "audi",
//         year: "2021",
//         price: 100000
//     },

//     {
//         model: "bubaro",
//         year: "2001",
//         price: 15000
//     },
// ]


// var btnUp = document.getElementById("btnUp")
// var btn1Down = document.getElementById("btn1Down")
// var btnAlpha = document.getElementById("btnAlpha")
// var btnOld = document.getElementById("btnOld")
// var myDiv = document.getElementById("myDiv")



// cars.sort((a,b)=> a.price - b.price)
// console.log(cars);


// btnUp.onclick = ()=>{
//     cars.sort((a,b)=> a.price - b.price)

//     for (let i = 0; i < cars.length; i++) {
//         myDiv.innerHTML += `<p> model:${cars[i].model}<br> year:${cars[i].year}<br>  price:${cars[i].price} </p>`
//     }
//     myDiv.innerHTML += "<br><br>"

// }

// btn1Down.onclick = ()=>{
//     cars.sort((a,b)=> b.price - a.price)
    
//     for (let i = 0; i < cars.length; i++) {
//         myDiv.innerHTML += `<p> model:${cars[i].model}<br> year:${cars[i].year}<br>  price:${cars[i].price} </p>`
//     }
//     myDiv.innerHTML += "<br><br>"
// }

// cars.sort((a,b)=> a.year - b.year)
// console.log(cars);


// btnAlpha.onclick = ()=>{
//     cars.sort((a,b)=> a.model.localeCompare(b.model))

//     for (let i = 0; i < cars.length; i++) {
//         myDiv.innerHTML += `<p> model:${cars[i].model}<br> year:${cars[i].year}<br>  price:${cars[i].price} </p>`
//     }
//     myDiv.innerHTML += "<br><br>"
// }
    

// btnOld.onclick = ()=>{
//     cars.sort((a,b)=> a.year - b.year)

//     for (let i = 0; i < cars.length; i++) {
//         myDiv.innerHTML += `<p> model:${cars[i].model}<br> year:${cars[i].year}<br>  price:${cars[i].price} </p>`
//     }
//     myDiv.innerHTML += "<br><br>"
// }




//!...............................אתגר

// var arrayNums = [11,87,8,100,5]
// var temp

// for (let i = 1; i < arrayNums.length; i++) {
//     for (let j = 0; j < arrayNums.length-i; j++) {
//         if(arrayNums[j] > arrayNums[j+1]){
//             temp = arrayNums[j+1]
//             arrayNums[j+1] = arrayNums[j]
//             arrayNums[j] = temp
//         }
//     }
// }

// console.log(arrayNums);







