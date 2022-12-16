const palindromes = function (entry) {
    // let original = Array.from(entry);
    let entryRegex = /[a-z]/gi;
    let original = entry.match(entryRegex).join('');
    console.log("Original");
    console.log(original);
    let startSample = Array.from(original);
    startSample.reverse();
    let final = startSample.join('');
    console.log("Final");
    console.log(final);
    return original.toLowerCase() == final.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
