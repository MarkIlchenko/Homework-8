

let userNumber1 = prompt("Enter your 1 number: ");
let userNumber2 = prompt("Enter your 2 number: ");
let userNumber3 = prompt("Enter your 3 number: ");
let userNumber4 = prompt("Enter your 4 number: ");

function func() {
    var arr = [userNumber1, userNumber2, userNumber3, userNumber4];

    // Removing the specified element from the array
    var spliced = arr.splice(1, 2);
    console.log("Removed element: " + spliced);
    console.log("Remaining elements: " + arr);
}
func();