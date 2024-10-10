// Prompt user for their age
let age = prompt("Enter your age:");

// Convert input to number
age = Number(age);

// Determine category based on age
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
