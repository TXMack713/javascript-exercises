const getTheTitles = function(bookObjects) {
    let titles = [];
    for(let i = 0; i < bookObjects.length; i++) {
        titles.push(bookObjects[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
