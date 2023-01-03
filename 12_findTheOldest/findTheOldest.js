const findTheOldest = function(arrayOfPeople) {
    let ages = [];
    for(let i = 0; i < arrayOfPeople.length; i++) {
        let age = 0;
        if (arrayOfPeople[i].yearOfDeath !== 'undefined') {
            let yearOfDeath = arrayOfPeople[i].yearOfDeath;
            let yearOfBirth = arrayOfPeople[i].yearOfBirth;
            age = yearOfDeath - yearOfBirth;
            console.log("Age of " + arrayOfPeople[i].name);
            console.log("Death year: " + yearOfDeath + " minus Birth year: " + yearOfBirth + " equals: " + age);
            ages.push(age);
        } else {
            const date = new Date();
            const year = date.getFullYear();
            age = year - arrayOfPeople[i].yearOfBirth;
            console.log("For " + arrayOfPeople[i].name + ":");
            console.log("No year of death is available.");
            console.log("The current year is: " + year);
            console.log("Death year: " + year + " minus Birth year: " + yearOfBirth + " equals: " + age);
            ages.push(age);
        }
    }
    let indexOfLargest = 0;
    let currentLargest = 0;
    for(let j = 0; j < arrayOfPeople.length; j++) {
        if(ages[j] >= currentLargest) {
            currentLargest = ages[j];
            indexOfLargest = j;
        }
    }
    let oldest = arrayOfPeople[indexOfLargest].name;
    console.log("The oldest is: " + oldest);
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
