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
    
    gb++;
    document.getElementById('qty-gb').textContent = gb;
    total(gb,cc,sugar);
    
    //console.log("number of gb cookies: ", gb);
    //document.getElementById('qty-total').textContent = gb+cc+sugar;
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('add-cc').addEventListener('click', function(){
    console.log('Choco Chip + button was clicked')
    cc ++;
    document.getElementById('qty-cc').textContent = cc;
    total(gb,cc,sugar);
    //document.getElementById('qty-total').textContent = gb+cc+sugar;
})
/* todo: finish cc code for +
if add-cc button is clicked then add 1 cookie to the 'qty-cc'
*/
document.getElementById('add-sugar').addEventListener('click', function(){
    console.log('Sugar + button was clicked')
    sugar++;
    document.getElementById('qty-sugar').textContent = sugar;
    total(gb,cc,sugar);
})
//todo: finish sugar code for +

document.getElementById('minus-gb').addEventListener('click', function(){
    console.log('GB - button was clicked')
    if(gb > 0){
        gb--;
        console.log("number of gb cookies: ", gb);
    }
    else {
        console.log('cannot have negative cookies')
    }
    document.getElementById('qty-gb').textContent = gb;
    total(gb,cc,sugar);
})
//todo: finish GB code for -

document.getElementById('minus-cc').addEventListener('click', function(){
    console.log('Choco chip - button was clicked')
    if (cc > 0){
        cc--;
    }        
    else {
        console.log('can\'t have negative cookies')
    }
    document.getElementById('qty-cc').textContent = cc;
    total(gb,cc,sugar);
})
//todo finish cc code for -

document.getElementById('minus-sugar').addEventListener('click', function(){
    console.log('Sugar - button was clicked')
    if (sugar > 0){
        sugar--;
        }
    else {
        console.log('cannot have negative cookies')
    }
    document.getElementById('qty-sugar').textContent = sugar;
    total(gb,cc,sugar);
})
//todo: finish sugar code for -
function total(gb,cc,sugar){
    document.getElementById('qty-total').textContent = gb+cc+sugar;
}
