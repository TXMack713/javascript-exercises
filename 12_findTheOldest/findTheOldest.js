const findTheOldest = function(arrayOfPeople) {
    let ages = [];
    for(let i = 0; i < arrayOfPeople.length; i++) {
        let yearOfDeath = arrayOfPeople[i].yearOfDeath;
        let yearOfBirth = arrayOfPeople[i].yearOfBirth;
        let age = yearOfDeath - yearOfBirth;
        console.log(age);
        if ((yearOfDeath == 'null') || (yearOfDeath == 'undefined')) {
            const date = new Date();
            let year = date.getFullYear();
            age = year - yearOfBirth;
            ages.push(age);
        } else {
            ages.push(age);
        }
    }
    let indexOfLargest = 0;
    let currentLargest = 0;
    for(let j = 0; j < ages.length; j++) {
        if(ages[j] > currentLargest) {
            currentLargest = ages[j];
            indexOfLargest = j;
        }
    }
    let oldest = arrayOfPeople[indexOfLargest].name;
    console.log(oldest);
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
