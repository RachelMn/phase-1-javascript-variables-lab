function calculateGrade(marks) {
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    return grade;
}

const inputMarks = parseFloat(prompt("Enter the student's marks (between 0 and 100):"));
if (inputMarks >= 0 && inputMarks <= 100) {
    const grade = calculateGrade(inputMarks);
    console.log(`Grade: ${grade}`);
} else {
    console.log("Please enter marks between 0 and 100.");
}
