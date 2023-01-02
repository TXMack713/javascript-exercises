const findTheOldest = function(arrayOfPeople) {
    let ages = [];
    for(let i = 0; i < arrayOfPeople.length; i++) {
        let yearOfDeath = arrayOfPeople[i].yearOfDeath;
        let yearOfBirth = arrayOfPeople[i].yearOfBirth;
        let age = yearOfDeath - yearOfBirth;
        console.log("Age of " + arrayOfPeople[i].name);
        console.log(age);
        if ((arrayOfPeople[i].yearOfDeath == 'null') || (arrayOfPeople[i].yearOfDeath == 'undefined') || (arrayOfPeople[i].yearOfDeath == 'NaN')) {
            const date = new Date();
            let year = date.getFullYear();
            age = year - yearOfBirth;
            console.log("No year of death is available.");
            console.log("The current year is: " + year)
            ages.push(age);
        } else {
            ages.push(age);
        }
    }
    let indexOfLargest = 0;
    let currentLargest = 0;
    for(let j = 0; j < ages.length; j++) {
        if(ages[j] >= currentLargest) {
            currentLargest = ages[j];
            indexOfLargest = j;
        }
    }
    let oldest = arrayOfPeople[indexOfLargest].name;
    console.log("The oldest is: " + oldest);
    return arrayOfPeople[indexOfLargest].name;

};

// Do not edit below this line
module.exports = findTheOldest;
