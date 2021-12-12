
const numbers = [1, 2, 3, 4, 5]

createAddNumber = number => 
arr => arr.map(item => item += number)


const addOne = createAddNumber(1)

const addFive = createAddNumber(5)

console.log(addOne(numbers))
console.log(addFive(numbers))