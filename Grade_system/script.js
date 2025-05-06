
let grade = Number(prompt("Enter your grade"));

if (grade >= 70 && grade <= 100) {
    alert(`You scored ${grade} - A`);
} else if (grade >= 60 && grade <= 69) {
    alert(`You scored ${grade} - B`);
} else if (grade >= 50 && grade <= 59) {
    alert(`You scored ${grade} - C`);
} else if (grade >= 45 && grade <= 49) {
    alert(`You scored ${grade} - D`);
} else if (grade >= 40 && grade <= 44) {
    alert(`You scored ${grade} - E`);
} else if (grade >= 0 && grade <= 39) {
    alert(`You scored ${grade} - F`);
} else if (isNaN(grade)) {
    alert("Your score is not a number.");
} else {
    alert(`You scored ${grade}, which is invalid.`);
}
