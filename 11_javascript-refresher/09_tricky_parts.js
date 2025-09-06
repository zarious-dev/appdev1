//difference between == and ===
console.log("8" == 8)  
console.log("8" === 8) 

//undefined vs null
let a
let b = null
console.log(typeof a)
console.log(typeof b)      

//arrow function and regular function
const obj = {
    name: "Rad",
    regularFunction: function () {
        console.log("regular:", this.name)
    },
    arrowFunction: () => {
        console.log("arrow:", this.name)
    }
}

obj.regularFunction() 
obj.arrowFunction()   


//arrays
let arr1 = [5, 10, 15]
let arr2 = arr1 

arr2.push(20)

console.log(arr1) 
console.log(arr2) 


let arr3 = [5, 10, 15]
let arr4 = [...arr3] 

arr4.push(20)

console.log(arr3) 
console.log(arr4) 

