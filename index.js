function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
    }

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}

// Taking input speed from the user
const speed = parseFloat(prompt("Enter the speed of the car:"));
calculateDemeritPoints(speed);

