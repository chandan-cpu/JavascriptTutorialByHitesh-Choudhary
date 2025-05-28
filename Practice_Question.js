//1)Problem:Create an array conatining different types of teas

const teas = ["Green tree", "Black tree", "Oolong Tree", "Masala Tree","herbal Tea"];
console.log(teas);
//2Problem:Add"Chamomile Tea" to the exisiting list of tree
teas.push("Chamomile Tea");
//3)Problem:Remove the Oolong Tree From the exisiting list of the tree
const index = teas.indexOf("Green tree");
console.log(index)
if (index > -1) {
    // teas.splice(index, 1);
}
// console.log(teas);

//4)Problem:Filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "herbal Tea");
console.log(caffeinatedTeas);


//Problem: Sort the list of teas in alphabetical order.
const sortedTeas = teas.sort();
console.log(sortedTeas);

//Use a for loop to print each type of tea in the array
teas.forEach((tea1) => {
    console.log(tea1);
});

//Problem: Use a for loop to count how many teas are caffeinated (excluding Harbal Tea).
let count = 0;
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "herbal Tea") {
        count++;
    }
}
console.log(count);

//Problem:Use a for loop to create a new array with all tea name in uppercase
const upper = [];
for (let i = 0; i < teas.length; i++) {
    upper.push(teas[i].toUpperCase());
}
console.log(upper);

//Problem:Use a for loop to find the tea name with the most characters
let max = "";
teas.forEach((tea2) => {
    if (tea2.length > max.length)
    {
        max = tea2;
    }
})
console.log(max);
//Problem:Use a for loop to reverse the order of teas in the array
const reverse = [];
for (let i = teas.length - 1; i >= 0; i--) {
    reverse.push(teas[i]);
}
console.log(reverse);

