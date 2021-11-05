// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Debra Koch" // HINT: Replace this with your own name!
// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// attempt::   document.getElementById("qty-gb").innerHTML = x;
// if("add-gb")is clicked then add 1++ to the "qty-gb"

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('add-cc').addEventListener('click', function(){
    console.log('Choco Chip + button was clicked')
})
/* todo: finish cc code for +
if add-cc button is clicked then add 1 cookie to the 'qty-cc'
*/
document.getElementById('add-sugar').addEventListener('click', function(){
    console.log('Sugar + button was clicked')
})
//todo: finish sugar code for +

document.getElementById('minus-gb').addEventListener('click', function(){
    console.log('GB - button was clicked')
})
//todo: finish GB code for -

document.getElementById('minus-cc').addEventListener('click', function(){
    console.log('Choco chip - button was clicked')
})
//todo finish cc code for -

document.getElementById('minus-sugar').addEventListener('click', function(){
    console.log('Sugar - button was clicked')
})
//todo: finish sugar code for -
