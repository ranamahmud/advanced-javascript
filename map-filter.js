const numbers = [3, 4, 5, 6, 7, 8]

function square(element) {
    return element * element;
}
numbers.map(square)

numbers.map(function (element) {
    console.log(element);
})


numbers.map(function (element, index) {
    console.log(element, index);
})

numbers.map(function (element, index, array) {
    console.log(element, index, array);
})

const result = numbers.map(function (element) {
    return element * element
})

console.log(result);

// const square = element => element * element;
// const square =  x => x * x;

const result2 = numbers.map(x => x * x);
console.log(result2);


const bigger = numbers.filter(x => x > 5);
console.log(bigger);


const isThere = numbers.find(x => x > 5);
console.log(isThere);



