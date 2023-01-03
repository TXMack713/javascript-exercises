const findTheOldest = function(arrayOfPeople) {
    let ages = [];
    for(let i = 0; i < arrayOfPeople.length; i++) {
        let age = 0;
        let yearOfDeath = arrayOfPeople[i].yearOfDeath;
        let yearOfBirth = arrayOfPeople[i].yearOfBirth;
        if (!arrayOfPeople[i].hasOwnProperty("yearOfDeath")) {
            console.log("If block");
            let date = new Date();
            let year = date.getFullYear();
            age = year - arrayOfPeople[i].yearOfBirth;
            console.log("For " + arrayOfPeople[i].name + ":");
            console.log("No year of death is available.");
            console.log("The current year is: " + year);
            console.log("Age of " + arrayOfPeople[i].name);
            console.log(age);
            console.log("Death year: " + year + " minus Birth year: " + yearOfBirth + " equals: " + age);
            ages.push(age);
            // continue;
        } else {
            console.log("Else block");
            yearOfDeath = arrayOfPeople[i].yearOfDeath;
            yearOfBirth = arrayOfPeople[i].yearOfBirth;
            age = yearOfDeath - yearOfBirth;
            console.log("Age of " + arrayOfPeople[i].name);
            console.log("Death year: " + yearOfDeath + " minus Birth year: " + yearOfBirth + " equals: " + age);
            ages.push(age);
            // continue;
        }
    }
    let indexOfLargest = 0;
    let currentLargest = 0;
    for(let j = 0; j < arrayOfPeople.length; j++) {
        if(ages[j] > currentLargest) {
            currentLargest = ages[j];
            indexOfLargest = j;
        }
    }
    let oldest = arrayOfPeople[indexOfLargest].name;
    console.log("The oldest is: " + oldest);
    return arrayOfPeople[indexOfLargest];

};

// Do not edit below this line
module.exports = findTheOldest;
