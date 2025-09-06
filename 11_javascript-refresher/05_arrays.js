const faveFoods = ["shrimp", "barbecue", "ice cream"] 

faveFoods.push("salad")
console.log(faveFoods)

faveFoods.shift()
console.log(faveFoods)

for (let food of faveFoods) {
    console.log(food)
}

let likedFoods = faveFoods.map(food => `I like ${food}`);
console.log(likedFoods);